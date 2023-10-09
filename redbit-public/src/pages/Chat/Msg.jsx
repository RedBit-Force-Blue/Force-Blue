import React from 'react'
import './ChatPage.css'

export const Msg = ({ message }) => {
    return (
        <div className="chat__conversation-board__message-container">
            {/* IMAGEN DE USUARIO */}
            <div className="chat__conversation-board__message__person">
                <div className="chat__conversation-board__message__person__avatar">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Usuario" />
                </div>
                <span className="chat__conversation-board__message__person__nickname">Monika Figi</span>
            </div>

            {/* MENSAJE DE USUARIO */}
            <div className="chat__conversation-board__message__context">
                <div className="chat__conversation-board__message__bubble">
                    <span>
                        {message}
                    </span>
                </div>
            </div>
        </div>
    )
}
