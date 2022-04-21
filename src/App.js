import React, { useState } from "react";
import { formatedPlayerScore } from "./utils";

const App = () => {
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  const gameIsNotFinished =
    (playerOneScore < 4 && playerTwoScore < 4) ||
    Math.abs(playerOneScore - playerTwoScore) < 2;

  const handleAddPointForPlayerOne = () => {
    if (gameIsNotFinished) {
      setPlayerOneScore((playerOneScore) => playerOneScore + 1);
    }
  };

  const handleAddPointForPlayerTwo = () => {
    if (gameIsNotFinished) {
      setPlayerTwoScore((playerTwoScore) => playerTwoScore + 1);
    }
  };

  const handleReset = () => {
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
  };

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
        <div id="playerOne" className="ui left internal rail">
          <div className="ui segment">
            <p>Player 1</p>
            <p style={{ fontSize: "1.5rem" }}>
              {formatedPlayerScore(playerOneScore, playerTwoScore)}
            </p>
            <button className="ui button" onClick={handleAddPointForPlayerOne}>
              add point
            </button>
          </div>
        </div>
        <div id="playerTwo" className="ui right internal rail">
          <div className="ui segment">
            <p>Player 2</p>
            <p style={{ fontSize: "1.5rem" }}>
              {formatedPlayerScore(playerTwoScore, playerOneScore)}
            </p>
            <button className="ui button" onClick={handleAddPointForPlayerTwo}>
              add point
            </button>
          </div>
        </div>
      </div>
      <button
        className="ui button"
        style={{ float: "right" }}
        onClick={handleReset}
      >
        reset
      </button>
    </div>
  );
};

export default App;
