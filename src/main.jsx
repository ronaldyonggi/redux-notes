import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

// import noteService from './services/notes.jsx'
import noteReducer from './reducers/noteReducer.jsx'
import filterReducer from './reducers/filterReducer.jsx'

import { createNote } from './reducers/noteReducer.jsx'
import { filterChange } from './reducers/filterReducer.jsx'

// const reducer = combineReducers({
//   notes: noteReducer,
//   filter: filterReducer
// })

// const store = createStore(reducer)

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer
  }
})

// store.subscribe(() => console.log(store.getState()))
// store.dispatch(filterChange('IMPORTANT'))
// store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
