import NotesActionTypes from './note.types';
import { v4 as uuidv4 } from 'uuid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['notes'],
};
const INITIAL_STATE = {
  notes: [],
};


const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotesActionTypes.ADD_NOTE:
      return {
        ...state,
        notes: [
          {
            ...action.payload,
            id: uuidv4(),
          },
          ...state.notes,
        ],
      };
    case NotesActionTypes.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    case NotesActionTypes.EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id
           ?  {
              id:action.payload.id,
              content: action.payload.content,
              title:action.payload.title,
                edited: action.payload.edited,
              }
              : note
            
        ),
      };
    default:
      return state;
  }
};
export default persistReducer(persistConfig, notesReducer);
