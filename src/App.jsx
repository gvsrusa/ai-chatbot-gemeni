import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatView from "./components/ChatView";

const App = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="app-container">
      <Sidebar onSelectChat={setSelectedChat} />
      <ChatView chat={selectedChat} />
    </div>
  );
};

export default App; 