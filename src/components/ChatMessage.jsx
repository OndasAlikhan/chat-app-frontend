import React, { Component } from 'react';

class ChatMessage extends Component {

    state = {

    }

    componentDidMount() {
        //here we should define "me" variable
    }

    renderMessage = () => {
        if (this.props.user == this.props.me)
            return <div className="me-chat-message">

            </div>
        else
            return <div className="user-chat-message">

            </div>
    }

    render() {
        return (
            <div>
                {this.renderMessage}
            </div>
        )
    }
}

export default ChatMessage;