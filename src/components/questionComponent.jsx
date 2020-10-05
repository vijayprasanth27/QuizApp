import React, { Component } from "react";

class QuestionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: this.props.answers,
    };
  }

  handleAnswer = (indexValue) => {
    const answerPart = this.state.answers.filter((each, index) => {
      if (index === indexValue) return each;
    });
    this.setState({
      answers: answerPart,
    });
  };

  render() {
    return (
      <div>
        <h1 className="question">{this.props.question}</h1>
        {this.state.answers.map((each, index) => (
          <button
            key={index}
            onClick={() => {
              this.handleAnswer(index);
              this.props.handleScore(each);
            }}
            className="answerBtn"
          >
            {each}
          </button>
        ))}
      </div>
    );
  }
}

export default QuestionComponent;
