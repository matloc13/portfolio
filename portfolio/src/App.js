import React, { Component } from 'react';
import Header from './components/header'
import FirstPage from './components/firstpage'
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App wrapper">
      <Header />
      <FirstPage />
    </div>
  );
}
}

export default App;
