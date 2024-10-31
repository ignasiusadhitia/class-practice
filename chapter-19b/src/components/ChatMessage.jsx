import React from "react";
import TypingEffectContainer from "../containers/TypingEffectContainer";

function ChatMessage({ query, message, onTyping }) {
  return (
    <div className="container  chat-message-cstm">
      {/* User Question */}
      <div className="d-flex justify-content-end mb-3">
        <div className="p-3 border shadow-sm rounded-user-cstm bg-primary-subtle">
          <i className="bi bi-person-circle me-2"></i>
          <strong>Question:</strong> {query}
        </div>
      </div>

      {/* AI Answer */}
      <div className="d-flex justify-content-start">
        <div className="p-3 border shadow-sm rounded-ai-cstm bg-primary-subtle">
          <i className="bi bi-robot me-2"></i>
          <strong>Answer:</strong>
          <div>
            <TypingEffectContainer text={message} onTyping={onTyping} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
