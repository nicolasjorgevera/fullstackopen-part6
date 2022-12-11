import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import anecdotesReducer from './reducers/anecdoteReducer'
import notificationReucer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'


  const reducer =  combineReducers({
    anecdotes: anecdotesReducer,
    notification: notificationReucer,
    filter: filterReducer
  })

  const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk)))


export default store