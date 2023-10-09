import React from 'react'
import './ChatPage.css'

export const MsgYou = ({ message }) => {
    return (
        <div className="chat__conversation-board__message-container reversed">

            {/* IMAGEN DE USUARIO */}
            <div className="chat__conversation-board__message__person">
                <div className="chat__conversation-board__message__person__avatar">
                    <img src="https://randomuser.me/api/portraits/men/9.jpg" alt="Dennis Mikle" />
                </div>
                <span className="chat__conversation-board__message__person__nickname">Dennis Mikle</span>
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
