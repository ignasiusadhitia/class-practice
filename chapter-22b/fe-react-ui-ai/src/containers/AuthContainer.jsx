import React, { useEffect, useState } from "react";
import LoginModal from "../components/LoginModal";
import { login, register } from "../utils/api";
import PropTypes from "prop-types";

const AuthContainer = ({ setToken }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleLogin = () => {
    // this.setState({ isLogin: !this.state.isLogin, error: null });
    setIsLogin((prevState) => !prevState);
    setError(null);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (isLogin) {
      login(form)
        .then((res) => {
          localStorage.setItem("token", res.accessToken);
          setToken(res.accessToken);
          setError(null);
          setForm({
            username: "",
            password: "",
          });
        })
        .catch((err) => {
          setError(err.response.data.error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      register(form)
        .then(() => {
          alert("register success");

          setIsLogin(true);
          setError(null);
          setForm({
            username: "",
            password: "",
          });
        })
        .catch((err) => {
          setError(err.response.data.error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <LoginModal
        form={form}
        loading={loading}
        error={error}
        handleChange={handleChange}
        isLogin={isLogin}
        toggleLogin={toggleLogin}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

AuthContainer.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default AuthContainer;
