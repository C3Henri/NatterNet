import React from 'react';
import { FaSearch, FaPlus, FaRegCommentDots, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ChatList.css';

function ChatList() {
    const chats = ["Chat 1", "Chat 2", "Chat 3"];
    const navigate = useNavigate();
    
    const handleSettingsClick = () => {
        navigate('/settings');
    };  

    return (
        <div className="chatList">
            <div className="chatListHeader">
                <button className="settingsButton" onClick={handleSettingsClick}>
                    <FaCog className="settingsIcon" />
                </button>
                <div className="chatListSearch">
                    <FaSearch className="searchIcon" />
                    <input className="chatListInput" placeholder="Search chats..." />
                </div>
                <button className="addButton">
                    <FaPlus className="addIcon" />
                </button>
            </div>
            <div className="chatItemsContainer">
                {chats.map((chat, index) => (
                    <div key={index} className="chatItem">
                        <FaRegCommentDots className="chatIcon" />
                        <div className="chatName">
                            {chat}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChatList;
