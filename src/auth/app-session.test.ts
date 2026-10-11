import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
  APP_SESSION_KEY,
  APP_SESSION_LIFETIME_MS,
  clearAppSession,
  createAppSessionData,
  isAppSession,
  isAppSessionExpired,
  writeAppSession,
  readStoredAppSession,
} from './app-session';

describe('createAppSessionData', () => {
  it('creates session with required profile data', () => {
    expect(
      createAppSessionData(
        {
          displayName: 'TestUser',
          email: 'test@example.com',
        },
        1000,
      ),
    ).toEqual({
      displayName: 'TestUser',
      email: 'test@example.com',
      authenticatedAt: 1000,
    });
  });

  it('includes avatar only when available', () => {
    expect(
      createAppSessionData(
        {
          displayName: 'TestUser',
          email: 'test@example.com',
          avatarUrl: 'https://example.com/avatar.jpg',
        },
        1000,
      ),
    ).toEqual({
      displayName: 'TestUser',
      email: 'test@example.com',
      authenticatedAt: 1000,
      avatarUrl: 'https://example.com/avatar.jpg',
    });
  });
});

describe('isAppSession', () => {
  it('accepts a valid session', () => {
    expect(
      isAppSession({
        displayName: 'TestUser',
        email: 'test@example.com',
        authenticatedAt: 1000,
      }),
    ).toBe(true);
  });

  it('rejects non-object values', () => {
    expect(isAppSession(undefined)).toBe(false);
    expect(isAppSession('session')).toBe(false);
    expect(isAppSession([])).toBe(false);
  });

  it('rejects a session missing required fields', () => {
    expect(
      isAppSession({
        email: 'test@example.com',
        authenticatedAt: 1000,
      }),
    ).toBe(false);
  });

  it('rejects required fields with wrong types', () => {
    expect(
      isAppSession({
        displayName: 'TestUser',
        email: 'test@example.com',
        authenticatedAt: '1000',
      }),
    ).toBe(false);
  });

  it('rejects an avatar with the wrong type', () => {
    expect(
      isAppSession({
        displayName: 'TestUser',
        email: 'test@example.com',
        authenticatedAt: 1000,
        avatarUrl: 42,
      }),
    ).toBe(false);
  });
});

describe('isAppSessionExpired', () => {
  const session = {
    displayName: 'TestUser',
    email: 'test@example.com',
    authenticatedAt: 1000,
  };

  it('keeps the session valid before five minutes', () => {
    expect(isAppSessionExpired(session, 1000 + APP_SESSION_LIFETIME_MS - 1)).toBe(false);
  });

  it('expires the session exactly after five minutes', () => {
    expect(isAppSessionExpired(session, 1000 + APP_SESSION_LIFETIME_MS)).toBe(true);
  });

  it('expires the session after more than five minutes', () => {
    expect(isAppSessionExpired(session, 1000 + APP_SESSION_LIFETIME_MS + 1)).toBe(true);
  });
});

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

beforeEach(() => {
  storage.clear();
});

describe('app session storage', () => {
  it('returns missing when the session key does not exist', () => {
    localStorage.removeItem(APP_SESSION_KEY);

    expect(readStoredAppSession()).toEqual({
      status: 'missing',
    });
  });

  it('writes and reads a valid session', () => {
    const session = {
      displayName: 'TestUser',
      email: 'test@example.com',
      authenticatedAt: 1000,
    };

    writeAppSession(session);

    expect(readStoredAppSession()).toEqual({
      status: 'valid',
      session,
    });
  });

  it('returns invalid for malformed JSON', () => {
    localStorage.setItem(APP_SESSION_KEY, '{broken-json');

    expect(readStoredAppSession()).toEqual({
      status: 'invalid',
    });
  });

  it('returns invalid when required fields are missing', () => {
    localStorage.setItem(
      APP_SESSION_KEY,
      JSON.stringify({
        email: 'test@example.com',
        authenticatedAt: 1000,
      }),
    );

    expect(readStoredAppSession()).toEqual({
      status: 'invalid',
    });
  });

  it('returns invalid when required fields have wrong types', () => {
    localStorage.setItem(
      APP_SESSION_KEY,
      JSON.stringify({
        displayName: 'TestUser',
        email: 'test@example.com',
        authenticatedAt: '1000',
      }),
    );

    expect(readStoredAppSession()).toEqual({
      status: 'invalid',
    });
  });

  it('removes only the app session key', () => {
    localStorage.setItem(APP_SESSION_KEY, 'session');
    localStorage.setItem('unrelated-key', 'keep-me');

    clearAppSession();

    expect(storage.has(APP_SESSION_KEY)).toBe(false);
    expect(storage.get('unrelated-key')).toBe('keep-me');

    localStorage.removeItem('unrelated-key');
  });
});
