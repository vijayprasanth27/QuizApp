import React, { Component } from "react";

const ScoreComponent = (props) => {
  return (
    <div>
      <h1 className="score">Your Score = {props.score}/5</h1>
      <button className="playBtn" onClick={props.replay}>
        Play Again!!
      </button>
    </div>
  );
};

export default ScoreComponent;
