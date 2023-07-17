import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './SettingsPage.css';

function SettingsPage() {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);

    const handleBackClick = () => {
        navigate('/home');
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const renderOptionContent = () => {
        switch(selectedOption) {
            case 'profile':
                return (
                    <div className="contentForm">
                        <div className="inputGroup">
                            <label>Nome:</label>
                            <input type="text" className="inputField" />
                        </div>
                        <div className="inputGroup">
                            <label>Email:</label>
                            <input type="email" className="inputField" />
                        </div>
                        <div className="inputGroup">
                            <label>Senha:</label>
                            <input type="password" className="inputField" />
                        </div>
                    </div>
                );
            case 'chat':
                return (
                    <div className="contentForm">
                        <div className="inputGroup">
                            <label>Método de salvar:</label>
                            <select className="inputField">
                                <option>Servidor</option>
                                <option>Peer to peer</option>
                            </select>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="introMessage">
                        Selecione uma opção ao lado e personalize como desejar para melhorar ainda mais sua experiência :)
                    </div>
                );
        }
    };

    return (
        <div className="settingsPage">
            <div className="settingsHeader">
                <button className="backButton" onClick={handleBackClick}>
                    <FaArrowLeft className="backIcon" />
                </button>
                <h2>Configurações</h2>
            </div>
            <div className="settingsBody">
                <div className="settingsOptions">
                    <button 
                        className={`settingsItem ${selectedOption === 'profile' ? 'selected' : ''}`} 
                        onClick={() => handleOptionClick('profile')}>
                        Meu Perfil
                    </button>
                    <button 
                        className={`settingsItem ${selectedOption === 'chat' ? 'selected' : ''}`} 
                        onClick={() => handleOptionClick('chat')}>
                        Personalização de chat
                    </button>
                </div>
                <div className="settingsContent">
                    {renderOptionContent()}
                </div>
            </div>
        </div>
    );
}

export default SettingsPage;
