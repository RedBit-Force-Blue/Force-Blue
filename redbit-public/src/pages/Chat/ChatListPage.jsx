import React from 'react'
import { ChatItem } from "react-chat-elements";
import './ChatListPage.css'

export const ChatListPage = () => {
    return (

        <div className='m-9'>

            <ChatItem
                className='m-sm-4'
                avatar="https://avatars.githubusercontent.com/u/41473129?v=4"
                alt="kursat_avatar"
                title="Emre"
                date={new Date()}
                muted={true}
                showMute={true}
                showVideoCall={true}
                unread={2}
                onClick={() => console.log('clicked')}
            />
            

            <ChatItem
                avatar="https://avatars.githubusercontent.com/u/80540635?v=4"
                title="Kursat"
                subtitle="Ok. See you !"
                date={new Date()}
                unread={1}
            />

            <ChatItem
                avatar="https://avatars.githubusercontent.com/u/80540635?v=4"
                title="Kursat"
                subtitle="Ok. See you !"
                date={new Date()}
                unread={1}
            />

            <ChatItem
                avatar="https://avatars.githubusercontent.com/u/80540635?v=4"
                title="Kursat"
                subtitle="Ok. See you !"
                date={new Date()}
                unread={1}
            />

            <ChatItem
                avatar="https://avatars.githubusercontent.com/u/41473129?v=4"
                alt="kursat_avatar"
                title="Emre"
                subtitle="What are you doing ?"
                date={new Date()}
                unread={2}
                statusColor={false}
            />

            <ChatItem
                avatar="https://avatars.githubusercontent.com/u/80540635?v=4"
                title="Kursat"
                subtitle="Ok. See you !"
                date={new Date()}
                unread={1}
            />

            <ChatItem
                avatar="https://avatars.githubusercontent.com/u/80540635?v=4"
                title="Kursat"
                subtitle="Ok. See you !"
                date={new Date()}
                unread={1}
            />

            <ChatItem
                avatar="https://avatars.githubusercontent.com/u/80540635?v=4"
                title="Kursat"
                subtitle="Ok. See you !"
                date={new Date()}
                unread={1}
            />

        </div>

    )
}
