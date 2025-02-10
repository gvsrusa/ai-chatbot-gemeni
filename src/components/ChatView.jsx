import React, { useState } from "react";
import ChatInput from "./ChatInput";

const ChatView = ({ chat }) => {
  // Dummy messages for demonstration; in a real app these would come from your backend
  const [messages, setMessages] = useState([
    { id: 1, sender: "AI", content: "Hello, how can I help you today?" },
    { id: 2, sender: "User", content: "I need assistance with my project." }
  ]);

  const handleSendMessage = (message) => {
    // For demo purposes, we just append the message.
    const newMessage = { id: messages.length + 1, sender: "User", content: message };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-view">
      {/* Chat Top Bar */}
      <div className="chat-view-topbar" style={{ padding:"1rem", borderBottom:"1px solid #ddd", display:"flex", alignItems:"center" }}>
        <button 
          style={{ marginRight:"1rem", background:"none", border:"none", cursor:"pointer"}}
          onClick={() => window.history.back()}
        >
          {"<"}
        </button>
        <h2 style={{ margin: 0 }}>{chat ? chat.title : "New Chat"}</h2>
      </div>

      {/* Conversation Messages */}
      <div className="chat-messages">
        {messages.map(msg => (
          <div key={msg.id} style={{
            marginBottom:"1rem", 
            textAlign: msg.sender === "User" ? "right" : "left"
          }}>
            <div style={{
              display:"inline-block", 
              background: msg.sender === "User" ? "#dcf8c6" : "#fff", 
              padding:"0.5rem 1rem", 
              borderRadius:"15px"
            }}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
};

export default ChatView; 