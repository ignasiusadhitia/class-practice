import React from "react";

function ChatInput({ onChange, onSubmit, loading, query, typing }) {
  return (
    <form
      className="fixed-bottom p-3 bg-primary-subtle border-top shadow"
      onSubmit={onSubmit}
    >
      <div className="input-group container">
        <input
          type="text"
          placeholder="Message Lumoshive AI"
          onChange={onChange}
          value={query}
          className="form-control border-primary"
          disabled={loading || typing}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading || typing}
        >
          <i className="bi bi-arrow-bar-up"></i>
        </button>
      </div>
    </form>
  );
}

export default ChatInput;
