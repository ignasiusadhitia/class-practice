import React, { Component } from "react";
import NewsDetailContainer from "./containers/NewsDetailContainer";
import NewsListContainer from "./containers/NewsListContainer";

class App extends Component {
  state = {
    selectedNewsKey: null,
  };

  handleSelectNews = (key) => {
    this.setState({ selectedNewsKey: key });
  };

  handleBack = () => {
    this.setState({ selectedNewsKey: null });
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">The Lazy Monday</h1>
        {this.state.selectedNewsKey ? (
          <NewsDetailContainer
            newsKey={this.state.selectedNewsKey}
            onBack={this.handleBack}
          />
        ) : (
          <NewsListContainer onSelect={this.handleSelectNews} />
        )}
      </div>
    );
  }
}

export default App;
