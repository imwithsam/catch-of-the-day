import React from 'react'

import {formatPrice} from '../helpers'

class Order extends React.Component {
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
