import React, { Component } from 'react'

class MainCard extends Component {
  render(){
    return (
      <div className="site">
        <h3>{this.props.title}</h3>
        <a href={this.props.linkContent} target="_blank" rel="noopener noreferrer" >
          <video className="videoContainer" width="300px" loop autoPlay>
            <source src={this.props.videoSrc} type="video/mp4" />
          </video>
        </a>
      </div>
    )
  }
}

export default MainCard
