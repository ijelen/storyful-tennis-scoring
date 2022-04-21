import { formatedPlayerScore } from ".";

test("Return 'love' if first arg (playerA) is 0", () => {
  expect(formatedPlayerScore(0, 1)).toBe("love");
});
test("Return 'fifteen' if first arg (playerA) is 1", () => {
  expect(formatedPlayerScore(1, 1)).toBe("fifteen");
});
test("Return 'thirty' if first arg (playerA) is 2", () => {
  expect(formatedPlayerScore(2, 2)).toBe("thirty");
});
test("Return 'forty' if first arg (playerA) is 3 and second arg (playerB) is less than 3 or second arg is bigger", () => {
  expect(formatedPlayerScore(3, 0)).toBe("forty");
  expect(formatedPlayerScore(3, 2)).toBe("forty");
  expect(formatedPlayerScore(3, 4)).toBe("forty");
  expect(formatedPlayerScore(4, 5)).toBe("forty");
});
test("Return 'deuce' if score is equal and every player has at list 3 points", () => {
  expect(formatedPlayerScore(3, 3)).toBe("deuce");
  expect(formatedPlayerScore(4, 4)).toBe("deuce");
  expect(formatedPlayerScore(10, 10)).toBe("deuce");
});
test("Return 'advantage' if first arg (playerA) has more than 3 points and only 1 point more than the playerB", () => {
  expect(formatedPlayerScore(4, 3)).toBe("advantage");
  expect(formatedPlayerScore(5, 4)).toBe("advantage");
});
test("Return 'win!' if playerA has 4 points and playerB has less than 3 or playerA has more than 3 points and two points more than playerB", () => {
  expect(formatedPlayerScore(4, 2)).toBe("win!");
  expect(formatedPlayerScore(6, 4)).toBe("win!");
});
