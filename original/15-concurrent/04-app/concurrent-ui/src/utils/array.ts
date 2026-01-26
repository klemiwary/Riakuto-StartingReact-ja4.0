export const randomPick = <T>(list: T[], amount = 1): T[] =>
  list
    .map((val) => ({ val, rand: Math.random() }))
    .sort((a, b) => a.rand - b.rand)
    .map(({ val }) => val)
    .slice(0, amount);
