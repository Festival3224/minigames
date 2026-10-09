import { signOut } from 'firebase/auth';

import { auth } from './firebase';
import {
  createAppSessionData,
  writeAppSession,
  clearAppSession,
  isAppSessionExpired,
  readStoredAppSession,
  type AppSession,
} from './app-session';

const sessionRuntime = (() => {
  let session: AppSession | undefined;

  return {
    get(): AppSession | undefined {
      return session;
    },

    set(nextSession: AppSession | undefined): void {
      session = nextSession;
    },
  };
})();

export function getActiveSession(): AppSession | undefined {
  return sessionRuntime.get();
}

interface AppSessionProfile {
  displayName: string;
  email: string;
  avatarUrl?: string;
}

export function startAppSession(profile: AppSessionProfile): AppSession {
  const session = createAppSessionData(profile);

  writeAppSession(session);
  sessionRuntime.set(session);

  return session;
}

export const APP_SESSION_CHANGED_EVENT = 'minigames:app-session-changed';

export type AppSessionState =
  | { status: 'guest' }
  | { status: 'authenticated'; session: AppSession }
  | { status: 'expired' }
  | { status: 'invalid' };

interface LogoutResult {
  isFirebaseSignOutSuccessful: boolean;
}

export async function logoutAppSession(): Promise<LogoutResult> {
  sessionRuntime.set(undefined);
  clearAppSession();

  try {
    if (sessionStorage.getItem('test-signout-failure') === '1') {
      throw new Error('Test sign-out failure');
    }

    await signOut(auth);

    return {
      isFirebaseSignOutSuccessful: true,
    };
  } catch {
    return {
      isFirebaseSignOutSuccessful: false,
    };
  }
}

async function clearSessionAndSignOut(): Promise<void> {
  clearAppSession();

  await signOut(auth);
}

export async function resolveAppSession(now = Date.now()): Promise<AppSessionState> {
  const storedSession = readStoredAppSession();

  if (storedSession.status === 'missing') {
    sessionRuntime.set(undefined);
    return { status: 'guest' };
  }

  if (storedSession.status === 'invalid') {
    sessionRuntime.set(undefined);

    await clearSessionAndSignOut();

    return { status: 'invalid' };
  }

  if (isAppSessionExpired(storedSession.session, now)) {
    sessionRuntime.set(undefined);

    await clearSessionAndSignOut();

    return { status: 'expired' };
  }

  sessionRuntime.set(storedSession.session);

  return {
    status: 'authenticated',
    session: storedSession.session,
  };
}
