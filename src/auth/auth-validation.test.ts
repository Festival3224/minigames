import { describe, expect, it } from 'vitest';

import {
  validateEmail,
  validateLoginPassword,
  validatePasswordConfirmation,
  validateRegistrationPassword,
  validateUsername,
} from './auth-validation';

describe('validateEmail', () => {
  it('rejects leading or trailing whitespace', () => {
    expect(validateEmail(' eugenia@example.com').isValid).toBe(false);
    expect(validateEmail('eugenia@example.com ').isValid).toBe(false);
  });

  it('rejects an empty email', () => {
    expect(validateEmail('')).toEqual({
      isValid: false,
      error: 'Email is required.',
    });
  });

  it('rejects an invalid email', () => {
    expect(validateEmail('eugenia@example')).toEqual({
      isValid: false,
      error: 'Enter a valid email address.',
    });
  });

  it('accepts a valid email', () => {
    expect(validateEmail('eugenia@example.com').isValid).toBe(true);
  });
});

describe('validateUsername', () => {
  it('rejects whitespace', () => {
    expect(validateUsername(' Eugenia').isValid).toBe(false);
    expect(validateUsername('Eugenia ').isValid).toBe(false);
    expect(validateUsername('Eugenia Smith').isValid).toBe(false);
  });

  it('rejects an empty username', () => {
    expect(validateUsername('').isValid).toBe(false);
  });

  it('rejects a username shorter than 2 characters', () => {
    expect(validateUsername('E').isValid).toBe(false);
  });

  it('rejects a username longer than 30 characters', () => {
    expect(validateUsername(`E${'a'.repeat(30)}`).isValid).toBe(false);
  });

  it('rejects a username starting with a lowercase letter', () => {
    expect(validateUsername('eugenia').isValid).toBe(false);
  });

  it('rejects non-English letters and special characters', () => {
    expect(validateUsername('Евгения').isValid).toBe(false);
    expect(validateUsername('Eugenia_1').isValid).toBe(false);
  });

  it('accepts English letters and digits starting with an uppercase letter', () => {
    expect(validateUsername('Eugenia1').isValid).toBe(true);
  });
});

describe('validateRegistrationPassword', () => {
  it('rejects non-English letters', () => {
    expect(validateRegistrationPassword('Abcd1Ж').isValid).toBe(false);
    expect(validateRegistrationPassword('Abcd1é').isValid).toBe(false);
  });

  it('rejects whitespace characters', () => {
    expect(validateRegistrationPassword('Abcd1 ').isValid).toBe(false);
    expect(validateRegistrationPassword('Abcd1\t').isValid).toBe(false);
  });

  it('rejects an empty password', () => {
    expect(validateRegistrationPassword('').isValid).toBe(false);
  });

  it('rejects a password shorter than 6 characters', () => {
    expect(validateRegistrationPassword('A1!ab').isValid).toBe(false);
  });

  it('requires an uppercase English letter', () => {
    expect(validateRegistrationPassword('abcdef1!').isValid).toBe(false);
  });

  it('requires a digit', () => {
    expect(validateRegistrationPassword('Abcdef!').isValid).toBe(false);
  });

  it('requires a special character', () => {
    expect(validateRegistrationPassword('Abcdef1').isValid).toBe(false);
  });

  it('accepts a valid registration password', () => {
    expect(validateRegistrationPassword('Abcdef1!').isValid).toBe(true);
  });
});

describe('validateLoginPassword', () => {
  it('rejects an empty password', () => {
    expect(validateLoginPassword('').isValid).toBe(false);
  });

  it('rejects a password shorter than 6 characters', () => {
    expect(validateLoginPassword('abcde').isValid).toBe(false);
  });

  it('does not require registration password strength rules', () => {
    expect(validateLoginPassword('abcdef').isValid).toBe(true);
  });
});

describe('validatePasswordConfirmation', () => {
  it('rejects an empty confirmation', () => {
    expect(validatePasswordConfirmation('Abc123!', '').isValid).toBe(false);
  });

  it('rejects a different password', () => {
    expect(validatePasswordConfirmation('Abc123!', 'Abc123?').isValid).toBe(false);
  });

  it('accepts an exact match', () => {
    expect(validatePasswordConfirmation('Abc123!', 'Abc123!').isValid).toBe(true);
  });
});
