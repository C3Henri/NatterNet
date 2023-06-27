import React from 'react';
import './ChatArea.css';
import { FaPaperPlane } from 'react-icons/fa';
import backgroundImg from './background.jpg'; // substitua isso pelo caminho para a sua imagem de fundo

const ChatArea = () => {
    const messages = [
        { text: "Olá!", sender: "other" },
        { text: "Oi! Como você está?", sender: "me" },
        { text: "Estou bem, e você?", sender: "other" },
        { text: "Estou ótimo, obrigado!", sender: "me" },
    ]; // Isso deve ser substituído pela lógica real de carregamento de mensagens

    return (
        <div className="chatArea" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="inputArea">
                <input value="Que otimo" placeholder="Type a message..." />
                <button className="sendButton">
                    <FaPaperPlane className="sendIcon" />
                </button>
            </div>
        </div>
    );
}

export default ChatArea;
