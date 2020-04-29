import { createStore, applyMiddleware } from 'redux'
import notesReducer from './notes/notes-reducer'
import { logger } from 'redux-logger'
import {persistStore} from 'redux-persist'

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(notesReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

 export default {store,persistor}