import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header'
import FirstPage from './components/firstpage'
import Archive from "./components/archive"
import Contact from './components/contact'
import Footer from './components/footer'
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App wrapper">
      <Header />
      <FirstPage />
      <Archive />
      <Contact />
      <Footer />
    </div>
  );
}
}

export default App;
