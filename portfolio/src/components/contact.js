import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <section >
        <div className="sectionContact">
          <h3 className="title">
            If you like to find out more, feel free to connect with me on social media.
          </h3>

          <div className="spacer">

          </div>

          <div className="contactItem">
            <a href="https://github.com/matloc13">github</a>
            <p>"https://github.com/matloc13"</p>
          </div>
          <div className="contactItem">
            <a href="https://www.linkedin.com/in/matthew-lockdall/">linkedin</a>
            <p>"https://www.linkedin.com/in/matthew-lockdall/"</p>
          </div>
          <div className="contactItem">
            <a href="mailto:mlockdall26@gmail.com">email</a>
            <p>get at me directly"</p>
          </div>
          <div className="spacer">

          </div>
        </div>
      </section>
    )
  }
}

export default Contact
