import React, { useEffect, useState } from 'react'
import './ChatPage.css'
import io from 'socket.io-client'
import axios from 'axios'
import { Msg } from './Msg'
import { MsgYou } from './MsgYou'
import { useLocation } from 'react-router-dom'

export const ChatPage = () => {
    const socket = io("/", { autoConnect: false })

    const { state } = useLocation()

    const [message, setMessage] = useState('')
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    const [messages, setMessages] = useState([])
    const [token, setToken] = useState(state.token)

    const [id, setId] = useState(state.id)

    const sendMessage = async () => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': token
            };

            const { data } = await axios.post('http://localhost:3022/chat/send/6521cbaa5570bfb8b4355c06', { message: message }, { headers: headers })
            
            if (data) {
                socket.emit('sendmessage', {
                    message,
                    to: '6521c80674691b6b12b52b09'
                })

                receivedMessage('mensaje enviado')
                setMessage('')
            }
        } catch (err) {
            console.error(err)
        }
    }

    // const handleForm = (e) => {
    //     setData({
    //         ...data,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const login = async () => {
    //     try {
    //         const { data: log } = await axios.post('http://localhost:3022/user/login', data)

    //         setId(log.logged.id)
    //         setToken(log.token)
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

    const getMessages = async () => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': token
            };

            const { data } = await axios('http://localhost:3022/chat/get_mymsg/6521cbaa5570bfb8b4355c06', { headers: headers })

            if (data) {
                setMessages(data.messages.messages)
                return data
            }
        } catch (err) {
            console.error(err)
        }
    }

    const receivedMessage = async (msg) => {
        try {
            const data = await getMessages()

            if (data) {
                console.log(data.messages.messages);
                setMessages(data.messages.messages)
            }
        } catch (err) {
            console.error(err)
        }
        console.log('recibido')
        console.log(msg)
    }

    useEffect(() => {
        socket.auth = { userId: id }
        socket.connect()

        getMessages()

        socket.on('newmessage', (msg) => receivedMessage(msg))

        return () => {
            socket.off('newmessage')
        }

    }, [])

    return (
        <div className='bodyTest'>
            <div className="--dark-theme" id="chat">
                <div className="chat__conversation-board">

                    {
                        messages.map((m) => (
                            m.from === id ? (
                                <MsgYou
                                    key={m._id}
                                    message={m.message}
                                />
                            ) : (
                                <Msg
                                    key={m._id}
                                    message={m.message}
                                />
                            )
                        ))
                    }

                </div>

                <div className="chat__conversation-panel">
                    <div className="chat__conversation-panel__container">
                        <input value={message} className="chat__conversation-panel__input panel-item" placeholder="Type a message..." onChange={(e) => setMessage(e.target.value)} />
                        <button
                            onClick={(e) => { sendMessage() }}
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