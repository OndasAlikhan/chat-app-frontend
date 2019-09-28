import React, { Component } from 'react';
import Dialog from './Dialog';
import './css/DialogList.css'
import axios from 'axios';
class DialogList extends Component {

    state = {
        listOfDialogs: []
    }

    componentDidMount() {
        this.setState({ listOfDialogs: this.getDialogsFromApi() });
    }

    getDialogsFromApi = () => {
        let dialogsDummyInfo = [
            { id: 1, title: "Some other user", lastMessage: "Last received or sent message to him", isMuted: false, icon: "icon-ref", lastMessageTime: "14:00", unreadMessages: 3 },
            { id: 2, title: "Some group chat", lastMessage: "This is the last message sent to this group", isMuted: false, icon: "icon-red", lastMessageTime: "15:00", unreadMessages: 23 },
            { id: 3, title: "And another user", lastMessage: "Last message here", isMuted: true, icon: "icon-ref", lastMessageTime: "12:30", unreadMessages: 0 }
        ]
        return dialogsDummyInfo;
    }

    render() {
        return (
            <div className="dialog-list-container">
                {this.state.listOfDialogs.map(c =>
                    <Dialog
                        id={c.id}
                        key={c.id}
                        title={c.title}
                        lastMessage={c.lastMessage}
                        isMuted={c.isMuted}
                        icon={c.icon}
                        lastMessageTime={c.lastMessageTime}
                        unreadMessages={c.unreadMessages}
                    />)}
            </div>
        );
    }
}

export default DialogList;