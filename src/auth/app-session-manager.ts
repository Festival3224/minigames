import { signOut } from 'firebase/auth';

import { auth } from './firebase';
import {
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

export type AppSessionState =
  | { status: 'guest' }
  | { status: 'authenticated'; session: AppSession }
  | { status: 'expired' }
  | { status: 'invalid' };

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
