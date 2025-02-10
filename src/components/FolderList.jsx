import React, { useState } from "react";
import { FiChevronDown, FiChevronRight, FiFolder } from "react-icons/fi";

const FolderList = () => {
  const [isOpen, setIsOpen] = useState(true);
  const folders = [
    { id: 1, name: "Work chats", unread: 8 },
    { id: 2, name: "Life chats", unread: 3 },
    { id: 3, name: "Projects chats", unread: 15 },
    { id: 4, name: "Clients chats", unread: 1 }
  ];
  
  return (
    <div className="folder-list" style={{ padding: "1rem", borderBottom:"1px solid #ddd" }}>
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ display:"flex", alignItems:"center", cursor:"pointer" }}
      >
        {isOpen ? <FiChevronDown /> : <FiChevronRight />}
        <span style={{ marginLeft:"0.5rem", fontWeight:"bold" }}>Folders</span>
      </div>
      {isOpen && (
        <ul style={{ listStyle:"none", paddingLeft:"1rem", marginTop:"0.5rem" }}>
          {folders.map(folder => (
            <li key={folder.id} style={{ display:"flex", justifyContent:"space-between", padding:"0.25rem 0" }}>
              <span style={{ display:"flex", alignItems:"center" }}>
                <FiFolder style={{ marginRight:"0.5rem" }}/> {folder.name}
              </span>
              <span style={{ background:"#ddd", borderRadius:"12px", padding:"0 6px", fontSize:"0.8rem" }}>{folder.unread}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FolderList; 