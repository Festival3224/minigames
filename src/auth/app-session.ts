export const APP_SESSION_KEY = 'minigames:festival3224:app-session';

export const APP_SESSION_LIFETIME_MS = 5 * 60 * 1000;

export interface AppSession {
  displayName: string;
  email: string;
  authenticatedAt: number;
  avatarUrl?: string;
}

interface SessionProfile {
  displayName: string;
  email: string;
  avatarUrl?: string;
}

export type StoredSessionResult =
  { status: 'missing' } | { status: 'valid'; session: AppSession } | { status: 'invalid' };

export function createAppSessionData(
  profile: SessionProfile,
  authenticatedAt = Date.now(),
): AppSession {
  return {
    displayName: profile.displayName,
    email: profile.email,
    authenticatedAt,
    ...(profile.avatarUrl && {
      avatarUrl: profile.avatarUrl,
    }),
  };
}

export function isAppSession(value: unknown): value is AppSession {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  const session = value as Record<string, unknown>;

  return !(
    typeof session.displayName !== 'string' ||
    typeof session.email !== 'string' ||
    typeof session.authenticatedAt !== 'number' ||
    !Number.isFinite(session.authenticatedAt) ||
    ('avatarUrl' in session && typeof session.avatarUrl !== 'string')
  );
}

export function isAppSessionExpired(session: AppSession, now = Date.now()): boolean {
  return now - session.authenticatedAt >= APP_SESSION_LIFETIME_MS;
}

export function writeAppSession(session: AppSession): void {
  localStorage.setItem(APP_SESSION_KEY, JSON.stringify(session));
}

export function readStoredAppSession(): StoredSessionResult {
  const storedValue = localStorage.getItem(APP_SESSION_KEY);

  if (!storedValue) {
    return { status: 'missing' };
  }

  try {
    const parsedValue: unknown = JSON.parse(storedValue);

    return isAppSession(parsedValue)
      ? { status: 'valid', session: parsedValue }
      : { status: 'invalid' };
  } catch {
    return { status: 'invalid' };
  }
}

export function clearAppSession(): void {
  localStorage.removeItem(APP_SESSION_KEY);
}
