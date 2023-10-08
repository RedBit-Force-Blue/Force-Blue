import React, { useEffect, useState } from 'react'
import './ChatPage.css'
import io from 'socket.io-client'
import axios from 'axios'

export const ChatPage = () => {
    const socket = io(`/`, { autoConnect: false })

    const [message, setMessage] = useState('')

    const sendMessage = (e) => {


        socket.emit('send-message', {
            message,
            to: 'nombre de usuario'
        })
    }

    useEffect(() => {
        socket.auth = 'nombre de usuario'

        socket.connect()

        socket.on('connect_error', (err) => {
            if (err.message === 'invalid username') console.log('ERROR')
        })

        

        socket.on('new-message', ({ message, from }) => {
            console.log(message, from)
        })

        return () => {
            socket.off()
        }
    }, [])

    return (
        <div className='bodyTest'>
            <div className="--dark-theme" id="chat">
                <div className="chat__conversation-board">

                    {/* USUARIO 1 */}
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad quis sapiente. Incidunt hic dolorum beatae earum, consequatur quod sapiente, laborum ducimus voluptatum nisi voluptas, veritatis nobis sint doloremque laudantium.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad quis sapiente. Incidunt hic dolorum beatae earum, consequatur quod sapiente, laborum ducimus voluptatum nisi voluptas, veritatis nobis sint doloremque laudantium.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad quis sapiente. Incidunt hic dolorum beatae earum, consequatur quod sapiente, laborum ducimus voluptatum nisi voluptas, veritatis nobis sint doloremque laudantium.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad quis sapiente. Incidunt hic dolorum beatae earum, consequatur quod sapiente, laborum ducimus voluptatum nisi voluptas, veritatis nobis sint doloremque laudantium.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad quis sapiente. Incidunt hic dolorum beatae earum, consequatur quod sapiente, laborum ducimus voluptatum nisi voluptas, veritatis nobis sint doloremque laudantium.

                                </span>
                            </div>
                        </div>


                    </div>

                    {/* USUARIO 2 */}
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
                                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias eveniet consectetur fugiat ut, numquam magnam tempore quia a deserunt cum facilis doloremque dolorem obcaecati voluptatibus, nihil placeat veniam omnis. Amet!</span>
                            </div>
                        </div>

                    </div>

                    {/* USUARIO 2 */}
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
                                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias eveniet consectetur fugiat ut, numquam magnam tempore quia a deserunt cum facilis doloremque dolorem obcaecati voluptatibus, nihil placeat veniam omnis. Amet!</span>
                            </div>
                        </div>

                    </div>

                    {/* USUARIO 2 */}
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
                                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias eveniet consectetur fugiat ut, numquam magnam tempore quia a deserunt cum facilis doloremque dolorem obcaecati voluptatibus, nihil placeat veniam omnis. Amet!</span>
                            </div>
                        </div>

                    </div>

                    {/* USUARIO 2 */}
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
                                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias eveniet consectetur fugiat ut, numquam magnam tempore quia a deserunt cum facilis doloremque dolorem obcaecati voluptatibus, nihil placeat veniam omnis. Amet!</span>
                            </div>
                        </div>

                    </div>

                    {/* USUARIO 1 */}
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad quis sapiente. Incidunt hic dolorum beatae earum, consequatur quod sapiente, laborum ducimus voluptatum nisi voluptas, veritatis nobis sint doloremque laudantium.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad quis sapiente. Incidunt hic dolorum beatae earum, consequatur quod sapiente, laborum ducimus voluptatum nisi voluptas, veritatis nobis sint doloremque laudantium.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad quis sapiente. Incidunt hic dolorum beatae earum, consequatur quod sapiente, laborum ducimus voluptatum nisi voluptas, veritatis nobis sint doloremque laudantium.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad quis sapiente. Incidunt hic dolorum beatae earum, consequatur quod sapiente, laborum ducimus voluptatum nisi voluptas, veritatis nobis sint doloremque laudantium.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad quis sapiente. Incidunt hic dolorum beatae earum, consequatur quod sapiente, laborum ducimus voluptatum nisi voluptas, veritatis nobis sint doloremque laudantium.

                                </span>
                            </div>
                        </div>


                    </div>

                </div>

                <div className="chat__conversation-panel">
                    <div className="chat__conversation-panel__container">
                        <input className="chat__conversation-panel__input panel-item" placeholder="Type a message..." />
                        <button 
                        onClick={(e) => {sendMessage(e); setMessage('hola')}}
                        className="chat__conversation-panel__button panel-item btn-icon send-message-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-reactid="1036">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}