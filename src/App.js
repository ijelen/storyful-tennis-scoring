import React from "react";

const App = () => {
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
      <div className="ui segment" style={{ height: "6rem" }}>
        <div className="ui left internal rail">
          <div className="ui segment">
            <p>Player 1</p>
            <p style={{ fontSize: "1.5rem" }}>Love</p>
            <button className="ui button">Add point</button>
          </div>
        </div>
        <div className="ui right internal rail">
          <div className="ui segment">
            <p>Player 2</p>

            <p style={{ fontSize: "1.5rem" }}>Fifteen</p>
            <button className="ui button">Add point</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
