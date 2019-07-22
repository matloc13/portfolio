import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from "./nav"

class Header extends Component {
  state = {
    hamburgerIcon: true
  }
  hamNav = ()=> {
  const hIcon = document.getElementById('hIcon')
  hIcon.classList.toggle('change')
  this.setState({

    hamburgerIcon: !this.state.hamburgerIcon
  })
}
  render() {
    return (
      <header className="header clearfix">
        {
          this.state.hamburgerIcon ?

            <nav className="navBarMain">

              <div id="hIcon" className="hamburgerIcon"
                onClick={this.hamNav}>
                {/* <div className="bar1"></div>
                  <div className="bar2"></div>
                <div className="bar3"></div> */}
                <div className="circle"></div>
                <img src={require("../images/wolf_running_clear.png")} alt="logo of wolf" className="wolf"/>

              </div>

              <div>
                <Link to="/">
                  <img
                    src={require("../images/home.png")}
                    alt="homeButton"
                    className="icon"
                  />
                </Link>
              </div>
            </nav>

          :

          <nav className="navBarMain">
            <div id="hIcon" className="hamburgerIcon"
              onClick={this.hamNav}>
              {/* <div className="bar1"></div>
                  <div className="bar2"></div>
              <div className="bar3"></div> */}
              <div className="circle">
                <img src={require("../images/wolf_running_clear.png")} alt="logo of wolf" className="wolf"/>
              </div>


            </div>
            <div>
              <Link to="/">
                <h1>Matthew Lockdall</h1>
              </Link>
              </div>
            <Nav />

          </nav>



        }
      </header>

    )
  }
}

export default Header
