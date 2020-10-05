import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import QuestionComponent from "./components/questionComponent";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import quizService from "./quizService";
import ScoreComponent from "./components/scoreComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      questionBank: [],
      score: 0,
      count: 0,
    };
  }

  getQuestions = () => {
    quizService().then((each) => {
      this.setState({
        questionBank: each,
      });
    });
  };

  computeScore = (answer, correct) => {
    if (answer === correct)
      this.setState({
        score: this.state.score + 1,
      });
    this.setState({
      count: this.state.count + 1,
    });
  };

  replay = () => {
    console.log(this.state.questionBank);
    this.getQuestions();
    console.log(this.state.questionBank);
    this.setState({
      score: 0,
      count: 0,
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div className="container">
        <div className="title">QuizTime</div>
        {this.state.questionBank.length > 0 &&
          this.state.count < 5 &&
          this.state.questionBank.map((each) => (
            <QuestionComponent
              key={each.questionId}
              className="questionBox"
              question={each.question}
              answers={each.answers}
              handleScore={(userAnswer) =>
                this.computeScore(userAnswer, each.correct)
              }
            />
          ))}
        {this.state.count === 5 ? (
          <ScoreComponent score={this.state.score} replay={this.replay} />
        ) : null}
      </div>
    );
  }
}

export default App;
