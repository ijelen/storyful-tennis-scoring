import React, { useState } from "react";

const App = () => {
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  const formatedPlayerScore = (playerA, playerB) => {
    if (playerA === 0) return "love";
    if (playerA === 1) return "fifteen";
    if (playerA === 2) return "thirty";
    if (playerA === playerB) return "deuce";
    if (playerA === 3 && playerB < 3) return "forty";
    if (playerA + 1 === playerB) return "forty";
    if (playerA - 1 === playerB) return "advantage";
    if (playerA - 2 === playerB || (playerA === 4 && playerB < 3))
      return "win!";
    if (playerA + 2 === playerB) return "lost";
    return "error";
  };

  const gameIsNotFinished =
    (playerOneScore < 4 && playerTwoScore < 4) ||
    Math.abs(playerOneScore - playerTwoScore) < 2;

  return (
    <div className="ui container" style={{ marginTop: "3rem" }}>
      <h1 className="ui header">Option one: Tennis scoring</h1>
      <p>
        Write a program that simulates a simple tennis game. * Scores from zero
        to three points are described as “love”, “fifteen”, “thirty”, and
        “forty” respectively. * If at least three points have been scored by
        each side and a player has one more point than his opponent, the score
        of the game is “advantage” for the player in the lead. * If at least
        three points have been scored by each player, and the scores are equal,
        the score is “deuce”. * A game is won by the first player to have won at
        least four points in total and at least two points more than the
        opponent
      </p>
      <div className="ui divider" style={{ marginBottom: "3rem" }}></div>
      <div className="ui segment" style={{ height: "14rem" }}>
        <div className="ui left internal rail">
          <div className="ui segment">
            <p>Player 1</p>
            <p style={{ fontSize: "1.5rem" }}>
              {formatedPlayerScore(playerOneScore, playerTwoScore)}
            </p>
            <button
              className="ui button"
              onClick={(e) => {
                if (gameIsNotFinished) {
                  setPlayerOneScore((playerOneScore) => playerOneScore + 1);
                }
              }}
            >
              Add point
            </button>
          </div>
        </div>
        <div className="ui right internal rail">
          <div className="ui segment">
            <p>Player 2</p>
            <p style={{ fontSize: "1.5rem" }}>
              {formatedPlayerScore(playerTwoScore, playerOneScore)}
            </p>
            <button
              className="ui button"
              onClick={(e) => {
                if (gameIsNotFinished) {
                  setPlayerTwoScore((playerTwoScore) => playerTwoScore + 1);
                }
              }}
            >
              Add point
            </button>
          </div>
        </div>
      </div>
      <button
        className="ui button"
        style={{ float: "right" }}
        onClick={() => {
          setPlayerOneScore(0);
          setPlayerTwoScore(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
