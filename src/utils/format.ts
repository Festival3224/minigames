export function formatLikesCount(count: number): string {
  if (count < 1000) {
    return String(count);
  }

  const thousands = Math.floor(count / 100) / 10;

  return `${thousands}K`;
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();

  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const days = Math.floor((now.getTime() - date.getTime()) / millisecondsPerDay);

  if (days < 1) {
    return 'today';
  }

  if (days < 7) {
    return `${days} day${days === 1 ? '' : 's'} ago`;
  }

  const weeks = Math.floor(days / 7);

  return `${weeks} week${weeks === 1 ? '' : 's'} ago`;
}
