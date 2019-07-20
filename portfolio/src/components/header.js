import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="header clearfix">

        <nav>
          <ul>
            <li><h4>archive</h4></li>
            <li><h4>bio</h4></li>
            <li><h4>contact</h4></li>
            <li><h4>other</h4></li>
          </ul>
        </nav>
        
      </header>
    )
  }
}

export default Header
