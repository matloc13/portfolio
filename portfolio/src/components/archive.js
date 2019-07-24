import React, { Component } from 'react'
import MainCard from '../components/maincard'

class Archive extends Component {
  render() {
    return (
      <section className=" siteContainer">
        <MainCard
          title="Book-Shelf"
          videoSrc={require('../images/Screen Recording 2019-07-23 at 10.59.59 PM.mov')}
          linkContent="https://matloc13.github.io/Bookshelf-api-calls/"
        />
        <MainCard
          title="touring-interurban"
          videoSrc={require('../images/Screen Recording 2019-07-23 at 11.02.08 PM.mov')}
          linkContent="https://touring-interurban.herokuapp.com/"
        />
      </section>


    )
  }
}

export default Archive
