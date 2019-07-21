import React, { Component } from 'react'
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
              <div></div>
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
            <div></div>
            <Nav />

          </nav>



        }
      </header>

    )
  }
}

export default Header
