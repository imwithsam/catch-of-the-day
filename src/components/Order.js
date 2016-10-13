import React from 'react'

import {formatPrice} from '../helpers'

class Order extends React.Component {
  constructor() {
    super()

    this.renderOrder = this.renderOrder.bind(this)
  }

  renderOrder(key) {
    const fish = this.props.fishes[key]
    const count = this.props.order[key]

    if (!fish || fish.status === 'unavailable') {
      return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer available.</li>
    }

    return (
      <li key={key}>
        <span>{count}lbs {fish.name}</span>
        <span className='price'>{formatPrice(count * fish.price)}</span>
      </li>
    )
  }

  render() {
    const orderIds = Object.keys(this.props.order)
    const total = orderIds.reduce((prevTotal, id) => {
      const fish = this.props.fishes[id]
      const count = this.props.order[id]
      const isAvailable = fish && fish.status === 'available'

      if (isAvailable) {
        return prevTotal + (fish.price * count || 0)
      }

      return prevTotal
    }, 0)

    return (
      <div className='order-wrap'>
        <h2>Your Order</h2>
        <ul className='order'>
          {/* shorthand for orderIds.map(id => this.renderOrder(id)) */}
          {orderIds.map(this.renderOrder)}
          <li className='total'>
            <strong>Total:</strong>
            {formatPrice(total)}
          </li>
        </ul>
      </div>
    )
  }
}

export default Order
