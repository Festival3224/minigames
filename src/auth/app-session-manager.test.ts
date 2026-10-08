import { beforeEach, describe, expect, it, vi } from 'vitest';

import { APP_SESSION_KEY, APP_SESSION_LIFETIME_MS } from './app-session';

const signOutMock = vi.fn();

vi.mock('firebase/auth', () => ({
  signOut: signOutMock,
}));

vi.mock('./firebase', () => ({
  auth: {},
}));

const storage = new Map<string, string>();

vi.stubGlobal('localStorage', {
  getItem: (key: string) => storage.get(key),
  setItem: (key: string, value: string) => {
    storage.set(key, value);
  },
  removeItem: (key: string) => {
    storage.delete(key);
  },
});

const { resolveAppSession } = await import('./app-session-manager');

beforeEach(() => {
  storage.clear();
  signOutMock.mockReset();
  signOutMock.mockResolvedValue(undefined);
});

describe('resolveAppSession', () => {
  it('returns guest when no app session exists', async () => {
    await expect(resolveAppSession(1000)).resolves.toEqual({
      status: 'guest',
    });

    expect(signOutMock).not.toHaveBeenCalled();
  });

  it('restores a valid unexpired session without changing authenticatedAt', async () => {
    const session = {
      displayName: 'TestUser',
      email: 'test@example.com',
      authenticatedAt: 1000,
    };

    storage.set(APP_SESSION_KEY, JSON.stringify(session));

    await expect(resolveAppSession(2000)).resolves.toEqual({
      status: 'authenticated',
      session,
    });

    expect(JSON.parse(storage.get(APP_SESSION_KEY) ?? '')).toEqual(session);

    expect(signOutMock).not.toHaveBeenCalled();
  });

  it('clears invalid stored data and signs out of Firebase', async () => {
    storage.set(APP_SESSION_KEY, '{broken-json');

    await expect(resolveAppSession(1000)).resolves.toEqual({
      status: 'invalid',
    });

    expect(storage.has(APP_SESSION_KEY)).toBe(false);
    expect(signOutMock).toHaveBeenCalledOnce();
  });

  it('clears an expired session and signs out of Firebase', async () => {
    storage.set(
      APP_SESSION_KEY,
      JSON.stringify({
        displayName: 'TestUser',
        email: 'test@example.com',
        authenticatedAt: 1000,
      }),
    );

    await expect(resolveAppSession(1000 + APP_SESSION_LIFETIME_MS)).resolves.toEqual({
      status: 'expired',
    });

    expect(storage.has(APP_SESSION_KEY)).toBe(false);
    expect(signOutMock).toHaveBeenCalledOnce();
  });

  it('does not remove unrelated localStorage data', async () => {
    storage.set(APP_SESSION_KEY, '{broken-json');
    storage.set('unrelated-key', 'keep-me');

    await resolveAppSession(1000);

    expect(storage.get('unrelated-key')).toBe('keep-me');
  });
});
