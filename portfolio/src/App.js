import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header'
import FirstPage from './components/firstpage'
import Archive from './components/archive'
import Bio from './components/bio'
import Contact from './components/contact'
import Footer from './components/footer'
import './css/App.css'

class App extends Component {
  render() {
  return (
    <Router>
      <div className="App wrapper">
        <Header />
        <Switch>
          <Route path="/" exact
            component={FirstPage}
          />

          <Route path="/public"
            component={Archive}
          />

          <Route path="/bio"
            component={Bio}
          />

          <Route path="/contact"
            component={Contact}
          />


        </Switch>
        <Footer />
      </div>
    </Router>
  )
}
}

export default App
