import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router'

import App from './components/App'
import StorePicker from './components/StorePicker'
import NotFound from './components/NotFound'
import './css/style.css'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern='/' component={App} />
        <Match pattern='/store/:storeid' component={StorePicker} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.getElementById('main'))
