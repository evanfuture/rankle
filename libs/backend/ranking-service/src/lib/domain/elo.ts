export function calculateElo(ratingA: number, ratingB: number, winner: 'A' | 'B'): [number, number] {
  const k = 32;
  const probA = 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
  const probB = 1 / (1 + Math.pow(10, (ratingA - ratingB) / 400));
  let newA = ratingA;
  let newB = ratingB;
  if (winner === 'A') {
    newA += k * (1 - probA);
    newB += k * (0 - probB);
  } else {
    newA += k * (0 - probA);
    newB += k * (1 - probB);
  }
  return [Math.round(newA), Math.round(newB)];
}
