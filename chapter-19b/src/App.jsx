import React, { Component } from "react";
import AuthContainer from "./containers/AuthContainer";
import ChatContainer from "./containers/Chatcontainer";
import { logout } from "./utils/api";

class App extends Component {
  state = {
    token: null,
  };

  setToken = (token) => {
    this.setState({ token });
  };

  handleLogout = () => {
    logout(this.state.token)
      .then(() => {
        this.setState({ token: null });
        localStorage.removeItem("token");
      })
      .catch((error) => {
        console.log("Logout failed:", error);
      });
  };

  render() {
    return this.state.token ? (
      <ChatContainer
        token={this.state.token}
        setToken={this.setToken}
        onLogout={this.handleLogout}
      />
    ) : (
      <AuthContainer setToken={this.setToken} />
    );
  }
}

export default App;
