import React, { Component, createRef } from "react";
import Markdown from "react-markdown";

class TypingEffectContainer extends Component {
  state = {
    displayedText: "",
    currentIndex: 0,
  };

  typingRef = createRef();

  componentDidMount() {
    this.startTypingEffect();
  }

  componentWillUnmount() {
    clearInterval(this.typingInterval);
  }

  startTypingEffect = () => {
    const { text, typingSpeed = 50 } = this.props;

    this.props.onTyping(true);

    this.typingInterval = setInterval(() => {
      this.setState((prevState) => {
        const nextIndex = prevState.currentIndex + 1;
        if (nextIndex > text.length) {
          clearInterval(this.typingInterval);
          this.props.onTyping(false);
          return prevState;
        }

        this.typingRef.current.scrollIntoView({ behavior: "smooth" });

        return {
          displayedText: text.slice(0, nextIndex),
          currentIndex: nextIndex,
        };
      });
    }, typingSpeed);
  };

  render() {
    return (
      <div ref={this.typingRef}>
        <Markdown>{this.state.displayedText}</Markdown>
      </div>
    );
  }
}

export default TypingEffectContainer;
