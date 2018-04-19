import React, { Component } from 'react';
import './App.css';
import { AddMessage } from "./containers/AddMessage";
import { MessagesList } from "./containers/MessagesList";
import { Sidebar } from "./containers/Sidebar";
import { Topbar } from "./containers/Topbar";

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <Topbar />
        <section id="main">
          <MessagesList />
        </section>
        <AddMessage />
      </div>
    );
  }
}

export default App;
