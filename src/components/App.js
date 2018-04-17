import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Home from './home';
import './../css/basic.css';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      
        <Navbar />
        <div id="content">
          <h1>Welcome</h1>
          <p id="intro">Welcome to the official website of Jay Skript and the Domsters. Here, you can <a href="about.html">learn more about the band</a>, view <a href="photos.html">photos of the band</a>, find out about <a href="live.html">tour dates</a> and <a href="contact.html">get in touch with the band</a>.</p>
        </div>
      </div>
    );
  }
}

export default App;
