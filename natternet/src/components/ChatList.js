import React from 'react';
import { FaSearch, FaPlus, FaRegCommentDots } from 'react-icons/fa';
import './ChatList.css';

function ChatList() {
    const chats = ["Chat 1", "Chat 2", "Chat 3"]; // Isso deve ser substituído pela lógica real de carregamento de chat

    return (
        <div className="chatList">
            <div className="chatListHeader">
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
