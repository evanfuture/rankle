export function calculateElo(ratingA: number, ratingB: number, winner: 'A' | 'B'): [number, number] {
  const k = 32; // K-factor, a constant that determines how much ratings change (e.g., 16, 24, or 32)
  const probA = 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
  const probB = 1 / (1 + Math.pow(10, (ratingA - ratingB) / 400));

  let newRatingA = ratingA;
  let newRatingB = ratingB;

  if (winner === 'A') {
    newRatingA += k * (1 - probA);
    newRatingB += k * (0 - probB);
  } else {
    newRatingA += k * (0 - probA);
    newRatingB += k * (1 - probB);
  }

  return [Math.round(newRatingA), Math.round(newRatingB)];
}
