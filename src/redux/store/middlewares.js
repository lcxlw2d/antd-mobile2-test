import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

export default applyMiddleware(
  // you can apply you middleware here
  thunkMiddleware,
  loggerMiddleware
)
