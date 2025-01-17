/** Ranks the thoughts from 0 to n in the given array order. */
export const rankThoughtsSequential = thoughts =>
  thoughts.map((thought, i) => ({ value: thought, rank: i }))
