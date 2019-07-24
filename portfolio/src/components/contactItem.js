import React, { Component } from 'react'

class ContactItem extends Component {
  render() {
    return (
      <div className="contactItem">
        <div>

          <a href={this.props.linkLabel} target="_blank" rel="noopener noreferrer">{this.props.name} </a>

        </div>
      </div>
    )
  }
}

export default ContactItem
