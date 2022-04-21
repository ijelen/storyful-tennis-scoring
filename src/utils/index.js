export const formatedPlayerScore = (playerA, playerB) => {
  if (playerA === 0) return "love";
  if (playerA === 1) return "fifteen";
  if (playerA === 2) return "thirty";
  if (playerA === playerB) return "deuce";
  if (playerA === 3 && playerB < 3) return "forty";
  if (playerA + 1 === playerB) return "forty";
  if (playerA - 1 === playerB) return "advantage";
  if (playerA - 2 === playerB || (playerA === 4 && playerB < 3)) return "win!";
  if (playerA + 2 === playerB) return "lost";
  return "error";
};
