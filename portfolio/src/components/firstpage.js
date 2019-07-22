import React, { Component } from 'react'


class FirstPage extends Component {
  render() {
    return (
      <main>
        <div className="landingDiv">
          <div className="portrait">
            <img src={require('../images/happyTime.04 AM.jpg')} alt="portrait"/>
          </div>
        </div>
        <h1>Matthew Lockdall</h1>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, alias. Deserunt ea eveniet totam temporibus, corporis suscipit optio quos sed, quo dolorum beatae porro dolores, consequatur sint ipsa praesentium. Nobis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, repellendus distinctio molestias beatae alias porro. Sapiente voluptatibus facere soluta excepturi natus dolorem quibusdam est, veniam iusto minima, deleniti, praesentium nostrum!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus inventore, quaerat vel, quis incidunt accusamus nobis facere minima. Odio omnis nobis hic praesentium, fugiat architecto? Soluta impedit praesentium quaerat ullam.
          </p>
        </article>
      </main>
    )
  }
}

export default FirstPage
