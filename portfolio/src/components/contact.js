import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <section >
        <div className="sectionContact">
          <h2 className="title">
            If you like to find out more, feel free to connect with me on social media.
          </h2>

          <div className="spacer">

          </div>

          <div className="contactItem">
            <div>
              <a href="https://github.com/matloc13" target="_blank">github</a>
              <p>"https://github.com/matloc13"</p>
            </div>
          </div>
          <div className="contactItem">
            <div>
              <a href="https://www.linkedin.com/in/matthew-lockdall/" target="_blank">linkedin</a>
              <p>"https://www.linkedin.com/in/matthew-lockdall/"</p>
            </div>
          </div>
          <div className="contactItem">
            <div>
              <a href="mailto:mlockdall26@gmail.com">email</a>
              <p>get at me directly"</p>
            </div>
          </div>
          <div className="spacer">

          </div>
        </div>
      </section>
    )
  }
}

export default Contact
