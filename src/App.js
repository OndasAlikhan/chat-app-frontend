import React, { Component } from 'react';
import logo from './logo.svg';
import ChatWindow from './components/ChatWindow';
import DialogList from './components/DialogList';
import WrappedRegistrationForm from './components/RegisterForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container" >
        <DialogList />
        <ChatWindow />
        <WrappedRegistrationForm />
      </div>
    );
  }
}

export default App;
