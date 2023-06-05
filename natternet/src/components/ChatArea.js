import React from 'react';
import './ChatArea.css';

function ChatArea() {
    const messages = ["Olá", "Como vai?", "Tudo bem, e você?"]; // Isso deve ser substituído pela lógica real de carregamento de mensagens

    return (
        <div className="conversation">
            {messages.map(message => (
                <div 
                    key={message.id} 
                    className={`message ${message.sender}`}
                >
                    {message.text}
                </div>
            ))}
        </div>
    );
}

export default ChatArea;
