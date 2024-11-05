import React, { useEffect, useState } from "react";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import Load from "../components/Load";
import Navbar from "../components/Navbar";
import { logout, queryAI } from "../utils/api";
import PropTypes from "prop-types";

const ChatContainer = ({ token, setToken }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const endOfMessagesRef = React.createRef();

  const handleQuery = (e) => {
    e.preventDefault();
    scrollToBottom();

    setLoading(true);
    setError(null);

    queryAI({ query }, token)
      .then((res) => {
        setMessages((prevMessages) => [...prevMessages, { query, data: res }]);
        setQuery("");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const scrollToBottom = () => {
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogout = () => {
    setLoading(true);
    logout(token)
      .then(() => {
        setToken(null);
        localStorage.removeItem("token");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  return (
    <div>
      <Navbar logout={handleLogout} loading={loading} />
      <div className="container">
        {loading && messages.length === 0 ? (
          <Load />
        ) : (
          messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.data.data}
              query={message.query}
              isLoading={loading}
              lastArray={index === messages.length - 1}
              currentQuery={query}
            />
          ))
        )}
        {/* Elemen referensi untuk scroll otomatis */}
        <div ref={endOfMessagesRef} />
      </div>
      <ChatInput
        onSubmit={handleQuery}
        onChange={handleChange}
        loading={loading}
        query={query}
      />
    </div>
  );
};

ChatContainer.propTypes = {
  token: PropTypes.string.isRequired,
  setToken: PropTypes.func.isRequired,
};

export default ChatContainer;
