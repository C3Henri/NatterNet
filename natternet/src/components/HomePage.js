import React from 'react';
import ChatList from './ChatList';
import ChatArea from './ChatArea';
import './HomePage.css';

function HomePage() {
    return (
        <div className="homePage">
            <ChatList />
            <ChatArea />
        </div>
    );
}

export default HomePage;
