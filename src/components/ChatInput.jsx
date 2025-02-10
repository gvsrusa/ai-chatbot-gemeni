import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");
  const charLimit = 1000;

  const handleSend = () => {
    if (text.trim() !== "") {
      onSend(text);
      setText("");
    }
  };

  return (
    <div className="chat-input" style={{ padding:"1rem", borderTop:"1px solid #ddd" }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your prompt here..."
        rows="2"
        style={{ width:"100%", padding:"0.75rem", borderRadius:"5px", border:"1px solid #ccc", resize:"none" }}
      />
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"0.5rem" }}>
        <small>{text.length}/{charLimit}</small>
        <div style={{ display:"flex", alignItems:"center" }}>
          {/* Formatting icons or additional options can be inserted here */}
          <button 
            onClick={handleSend}
            style={{ 
              backgroundColor:"blue", 
              color:"#fff", 
              border:"none", 
              borderRadius:"5px", 
              padding:"0.5rem 1rem", 
              display:"flex", 
              alignItems:"center", 
              cursor:"pointer"
            }}
            title="Send Message"
          >
            Send <FiSend style={{ marginLeft:"0.5rem" }} />
          </button>
        </div>
      </div>
      <div style={{ marginTop:"0.5rem", fontSize:"0.8rem", color:"#888" }}>
        ChatGPT can make mistakes...
      </div>
    </div>
  );
};

export default ChatInput; 