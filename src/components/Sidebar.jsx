import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import ChatItem from "./ChatItem";
import FolderList from "./FolderList";

const Sidebar = ({ onSelectChat }) => {
  const [search, setSearch] = useState("");

  // Dummy chat data
  const chats = [
    { id: 1, title: "Plan a 3-day trip", snippet: "A 3-day Bose the g", timestamp: "10:30 AM" },
    { id: 2, title: "Team Meeting", snippet: "Don't forget our meeting.", timestamp: "9:15 AM" },
    { id: 3, title: "Family Chat", snippet: "Dinner at 7?", timestamp: "Yesterday" }
  ];

  // Filter chats based on the search input
  const filteredChats = chats.filter(chat =>
    chat.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="sidebar">
      {/* Top Header with Search */}
      <div className="sidebar-header" style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
        <h2>My Chats</h2>
        <input 
          type="text" 
          placeholder="Search chats..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginTop: "0.5rem", padding: "0.5rem", width: "100%", borderRadius:"5px", border: "1px solid #ccc" }}
        />
      </div>

      {/* Collapsible Folders List */}
      <FolderList />

      {/* Chat List */}
      <div className="chat-list" style={{ flex: 1, overflowY: "auto", padding:"1rem" }}>
        {filteredChats.map(chat => (
          <ChatItem key={chat.id} chat={chat} onSelect={() => onSelectChat(chat)} />
        ))}
      </div>

      {/* New Chat Button */}
      <div className="sidebar-footer" style={{ padding:"1rem", borderTop:"1px solid #ddd" }}>
        <button 
          className="new-chat-button" 
          style={{
            backgroundColor: "green", 
            color: "#fff", 
            border: "none", 
            borderRadius:"5px", 
            width: "100%", 
            padding:"0.75rem", 
            display:"flex", 
            alignItems:"center", 
            justifyContent:"center", 
            cursor:"pointer"
          }}
          onClick={() => onSelectChat(null)}
          title="Start a new chat"
        >
          <FiPlus style={{ marginRight:"0.5rem" }} /> New Chat
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 