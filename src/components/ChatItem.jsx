import React from "react";

const ChatItem = ({ chat, onSelect }) => {
  return (
    <div 
      className="chat-item"
      onClick={onSelect}
      style={{
        padding:"0.75rem", 
        borderBottom:"1px solid #eee", 
        cursor:"pointer"
      }}
    >
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <span style={{ fontWeight:"bold" }}>{chat.title}</span>
        <span style={{ fontSize:"0.8rem", color:"#888" }}>{chat.timestamp}</span>
      </div>
      <div style={{ fontSize:"0.9rem", color:"#555", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>
        {chat.snippet}
      </div>
    </div>
  );
};

export default ChatItem; 