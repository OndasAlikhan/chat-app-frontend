import React, { Component } from 'react';
import './css/Dialog.css';
function Dialog(props) {
    return <div className="dialog-container">
        <img className="dialog-icon" />
        <div>
            <span className="dialog-title">{props.title}</span>
            <span className="dialog-time">{props.lastMessageTime}</span>
        </div>

        <div>
            <span className="dialog-lastMessage">{props.lastMessage}</span>
            <span className="dialog-unreadMessages">{props.unreadMessages}</span>
        </div>
    </div>
}

export default Dialog;