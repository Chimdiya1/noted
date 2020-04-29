import React from 'react';
import './note-item.styles.scss';
import { deleteNote } from '../../redux/notes/note.actions';
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'


const edit = <FontAwesomeIcon icon={faEdit} />;
const trash = <FontAwesomeIcon icon={faTrash} />;
const NoteItem = ({ note, deleteNote,notify}) => {

  return (
    <div className="note-item">

      <div className="note-preview">{note.content}</div>
      <div className="about">
        <div className="info">
          <p className="title">{note.title.slice(0, 20).toUpperCase()}</p>
          <p className="edited">Last edited: {note.edited}</p>
        </div>
        <div className="actions">
          <span className="edit">
            <Link
              to={{
                pathname: `/editnote/${note.id}`,
                state: {
                  title: note.title,
                  content: note.content,
                  id: note.id,
                  edited: note.edited,
                },
              }}
            >
              {edit}
            </Link>
          </span>
          <span className="delete" onClick={() => {
            deleteNote(note)
            notify()
          }}>
            {trash}
          </span>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteNote: (note) => dispatch(deleteNote(note)),
});

export default connect(null, mapDispatchToProps)(NoteItem);
