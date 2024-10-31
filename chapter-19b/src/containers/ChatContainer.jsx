import React, { Component } from "react";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import Navbar from "../components/Navbar";
import { queryAI } from "../utils/api";
import Loader from "../components/Loader";

class ChatContainer extends Component {
  state = {
    messages: [],
    loading: false,
    typing: false,
    error: null,
    query: "",
  };

  handleQuery = (e) => {
    e.preventDefault();
    const { query } = this.state;
    this.setState({ loading: true, error: null });

    queryAI({ query }, this.props.token)
      .then((res) => {
        this.setState({
          messages: [...this.state.messages, { query, data: res }],
          query: "",
        });
      })
      .catch((err) => {
        this.setState({ error: err.response?.data.error || "Query Failed" });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleTyping = (isTyping) => {
    this.setState({ typing: isTyping });
  };

  render() {
    return (
      <div>
        <Navbar setToken={this.props.setToken} onLogout={this.props.onLogout} />
        {this.state.loading && <Loader />}
        {this.state.messages.map((message, index) => (
          <ChatMessage
            key={index}
            query={message.query}
            message={message.data.data}
            onTyping={this.handleTyping}
          />
        ))}

        <ChatInput
          onSubmit={this.handleQuery}
          onChange={this.handleChange}
          loading={this.state.loading}
          query={this.state.query}
          typing={this.state.typing}
        />
      </div>
    );
  }
}

export default ChatContainer;
