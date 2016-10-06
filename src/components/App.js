import React from 'react'

import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'

class App extends React.Component {
  constructor() {
      super()

      // arbitrary methods are automatically bound only when using React.createClass
      this.loadSamples = this.loadSamples.bind(this)
      this.addFish = this.addFish.bind(this)

      // equivalent to React.createClass' getInitialState()
      this.state = {
        fishes: {},
        order: {}
      }
  }

  loadSamples() {
    this.setState({fishes: sampleFishes})
  }

  addFish(fish) {
    const fishes = {...this.state.fishes}
    const timestamp = Date.now()

    fishes[`fish-${timestamp}`] = fish

    // shorthand for this.setState({fishes: fishes})
    this.setState({fishes})
  }

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market'/>
          <ul>
            {
              Object.keys(this.state.fishes)
                .map(key => <Fish key={key} details={this.state.fishes[key]} />)
            }
          </ul>
        </div>
        <Order/>
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App
