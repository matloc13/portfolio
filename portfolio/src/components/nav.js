import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav className="infoNav">
        <ul>

          <li>
            <Link to="/public"><h4>archive</h4></Link>
          </li>

          <li>
            <Link to="/bio"><h4>bio</h4></Link>
          </li>

          <li>
            <Link to="/contact"><h4>contact</h4></Link>
          </li>

        </ul>
      </nav>
    )
  }
}

export default Nav
