import { describe, expect, it } from 'vitest';

import { getProfileInitials, getProfileName } from './profile';

describe('getProfileName', () => {
  it('uses displayName when available', () => {
    expect(getProfileName('Eugenia Kapusta', 'test@example.com')).toBe('Eugenia Kapusta');
  });

  it('trims displayName', () => {
    expect(getProfileName('  Eugenia  ', 'test@example.com')).toBe('Eugenia');
  });

  it('uses email local part when displayName is empty', () => {
    expect(getProfileName('', 'eugenia@example.com')).toBe('eugenia');
  });

  it('uses generic fallback when name and email local part are unavailable', () => {
    expect(getProfileName('', '')).toBe('Player');
  });
});

describe('getProfileInitials', () => {
  it('uses one initial for one-word names', () => {
    expect(getProfileInitials('Eugenia')).toBe('E');
  });

  it('uses two initials for two-word names', () => {
    expect(getProfileInitials('Eugenia Kapusta')).toBe('EK');
  });

  it('uses only the first two words', () => {
    expect(getProfileInitials('Eugenia Maria Kapusta')).toBe('EM');
  });

  it('supports Unicode letters', () => {
    expect(getProfileInitials('Женя Капуста')).toBe('ЖК');
  });

  it('supports digits', () => {
    expect(getProfileInitials('7 Gamer')).toBe('7G');
  });

  it('ignores leading non-alphanumeric characters inside words', () => {
    expect(getProfileInitials('--Eugenia @@Kapusta')).toBe('EK');
  });

  it('returns undefined when there is no alphanumeric character', () => {
    expect(getProfileInitials('--- !!!')).toBeUndefined();
  });
});
