import React from 'react'
import { ChatItem } from "react-chat-elements";

export const ComponentChatItem = ({chatAvatar, chatTitle, chatSubtitle}) => {
    return (
        <ChatItem
            avatar="https://avatars.githubusercontent.com/u/80540635?v=4"
            title="Kursat"
            subtitle="Ok. See you !"
            date={new Date()}
            unread={0}
        />
    )
}
