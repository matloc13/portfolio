import React, { Component } from 'react'
import ContactItem from '../components/contactItem'

class Contact extends Component {
  render() {
    return (
      <section className="contactWrapper">
        <div className="sectionContact">

          <h2 className="title">
            If you like to find out more, feel free to connect with me on social media.
          </h2>

          <div className="spacer"></div>
          <ContactItem
            linkLabel="https://github.com/matloc13"
            name="github"
          />

          <ContactItem
            linkLabel="https://www.linkedin.com/in/matthew-lockdall/"
            name="linkedin"
          />

          <ContactItem
            linkLabel="mailto:mlockdall26@gmail.com"
            name="email"

          />

          <div className="spacer"></div>
        </div>
      </section>
    )
  }
}

export default Contact
