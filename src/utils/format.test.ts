import { afterEach, describe, expect, it, vi } from 'vitest';

import { formatLikesCount, formatRating, formatRelativeTime } from './format';

describe('format utilities', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it.each([
    [0, '0'],
    [999, '999'],
    [1000, '1K'],
    [1500, '1.5K'],
    [12_345, '12.3K'],
  ])('formats likes count %i as %s', (count, expected) => {
    expect(formatLikesCount(count)).toBe(expected);
  });

  it.each([
    [4, '4.0'],
    [4.56, '4.6'],
  ])('formats rating %s as %s', (rating, expected) => {
    expect(formatRating(rating)).toBe(expected);
  });

  it.each([
    ['2026-10-10T08:00:00Z', 'today'],
    ['2026-10-09T12:00:00Z', '1 day ago'],
    ['2026-10-07T12:00:00Z', '3 days ago'],
    ['2026-10-03T12:00:00Z', '1 week ago'],
    ['2026-09-26T12:00:00Z', '2 weeks ago'],
  ])('formats relative time as %s', (date, expected) => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-10-10T12:00:00Z'));

    expect(formatRelativeTime(date)).toBe(expected);
  });
});
