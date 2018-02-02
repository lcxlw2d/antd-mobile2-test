import { combineReducers } from 'redux'
import { REQUEST_HOME, INVALIDATE_HOME, RECEIVE_HOME} from '../constants/ActionTypes'

const initialState = {
  onReady: false,
  didInvalidate: false,
  items: []
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_HOME:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_HOME:
      return {
        ...state,
        onReady: false,
        didInvalidate: false
      } 
    case RECEIVE_HOME:
      return {
        ...state,
        onReady: true,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

// const homePageRequest = (state = { }, action) => {
//   switch (action.type) {
//     case INVALIDATE_HOME:
//     case RECEIVE_HOME:
//     case REQUEST_HOME:
//       return {
//         ...state,
//         homedata: posts(state, action)
//       }
//     default:
//       return state
//   }
// }

export default combineReducers({
  posts
})
