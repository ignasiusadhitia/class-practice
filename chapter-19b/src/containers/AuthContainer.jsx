import React, { Component } from "react";
import LoginModal from "../components/LoginModal";
import { login, register } from "../utils/api";

class AuthContainer extends Component {
  state = {
    isLogin: true,
    form: {
      username: "",
      password: "",
    },
    loading: false,
    error: null,
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.setToken(token);
    }
  }

  toggleLogin = () => {
    this.setState({ isLogin: !this.state.isLogin });
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    if (this.state.isLogin) {
      login(this.state.form)
        .then((res) => {
          localStorage.setItem("token", res.accessToken);
          this.props.setToken(res.accessToken);
          this.setState({
            error: null,
            form: { username: "", password: "" },
          });
        })
        .catch((err) => {
          this.setState({ error: err.response?.data.error || "Login Failed" });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    } else {
      register(this.state.form)
        .then(() => {
          alert("Register Success");
          this.setState({ isLogin: true, error: null });
        })
        .catch((err) => {
          this.setState({ error: err.response?.data.error });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
    this.setState({ error: null });
  };

  render() {
    return (
      <div>
        <LoginModal
          loading={this.state.loading}
          error={this.state.error}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          isLogin={this.state.isLogin}
          onToggleLogin={this.toggleLogin}
          form={this.state.form}
        />
      </div>
    );
  }
}

export default AuthContainer;
