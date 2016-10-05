import React from 'react'

import {getFunName} from '../helpers'

class StorePicker extends React.Component {
  goToStore(e) {
    e.preventDefault()
    this.context.router.transitionTo(`/store/${this.storeInput.value}`)
  }
  render() {
    return (
      <form className='store-selector' onSubmit={(e) => this.goToStore(e)}>
        <h2>Please enter a store</h2>
        <input type='text' required placeholder='Store Name' defaultValue={getFunName()} ref={(input) => this.storeInput = input}/>
        <button type='submit'>Visit Store →</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker
