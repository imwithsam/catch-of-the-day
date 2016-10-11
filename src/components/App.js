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
      this.addToOrder = this.addToOrder.bind(this)

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
    // copy fish state
    const fishes = {...this.state.fishes}
    const timestamp = Date.now()

    fishes[`fish-${timestamp}`] = fish

    // shorthand for this.setState({fishes: fishes})
    this.setState({fishes})
  }

  addToOrder(key) {
    // copy order state
    const order = {...this.state.order}

    // set to 1 if order[key] is undefined
    order[key] = order[key] + 1 || 1

    // shorthand for this.setState({order: order})
    this.setState({order})
  }

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market'/>
          <ul>
            {
              Object.keys(this.state.fishes)
                .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
            }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App
