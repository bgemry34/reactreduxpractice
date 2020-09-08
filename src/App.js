import React, { Component } from 'react'
import {Provider} from 'react-redux'

import Postform from './Components/Postform'
import Posts from './Components/Posts'

import store from './redux/store' 

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Postform />
          <Posts />
        </div>
      </Provider>
    )
  }
}

export default App
