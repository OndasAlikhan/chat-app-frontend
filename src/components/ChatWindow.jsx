import React, { Component } from 'react';
import { GiftedChat } from 'react-web-gifted-chat';
import './css/ChatWindow.css'
import io from 'socket.io-client';
const socket = io('http://localhost:3001');
class ChatWindow extends Component {

    state = {
        messages: []
    };

    componentDidMount() {
        this.setState({
            messages: [
                {
                    id: 1,
                    text: "yes hello",
                    createdAt: new Date(),
                    user: {
                        id: 2,
                        name: "React",
                        avatar: ""
                    }
                },
                {
                    id: 2,
                    text: 'what',
                    createdAt: new Date(),
                    user: {
                        id: 1,
                        name: "Me",
                        avatar: ""

                    }
                }
            ]
        })



    }

    onSend(messages) {
        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));

        socket.emit('message sent', messages);
        console.log(messages);
    }

    render() {
        return (
            <div className="chat-window-container">
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        id: 1
                    }}
                />
            </div>
        );
    }
}

export default ChatWindow;