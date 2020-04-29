import NotesActionTypes from './note.types';

export const addNote = (note) => ({
    type: NotesActionTypes.ADD_NOTE,
    payload: note
});

export const deleteNote = (note) => ({
  type: NotesActionTypes.DELETE_NOTE,
  payload: note,
});

export const editNote = (note) => ({
  type: NotesActionTypes.EDIT_NOTE,
  payload: note,
});