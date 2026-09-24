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
