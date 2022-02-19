import React from 'react'
import reactDom from 'react-dom'
import App from './App'
import store from './redux/store'

reactDom.render(<App/>, document.getElementById('root'))
// You can either the store.subscribe in index.js or in Count component.
// If you put it here, then when there is any change to the state inside of store, we will re-render the entire App.
// Don't worry, the react DOM diff algorithm will compared all the components and only re-render the changed components. Therefore the computation is not too heavy.
store.subscribe(
    ()=>{reactDom.render(<App/>, document.getElementById('root'))}
)
