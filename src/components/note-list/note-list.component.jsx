import React from 'react'
import './note-list.styles.scss'
import { connect } from 'react-redux'
import NoteItem from '../note-item/note-item.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const add = <FontAwesomeIcon style={{color:'white'}} icon={faPlus} />;
const style = {
  width: '80px',
  height: '80px',
  borderRadius:'50%',
  fontSize: '50px',
  position: 'fixed',
  bottom: '60px',
  right: '20px',
  color:'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center',
  backgroundColor: 'rgb(40, 69, 236)',
  cursor:'pointer'
}
const NoteList = ({ notes }) => {
  
  const notify = () => {
    toast('Deleted', {
      type: toast.TYPE.ERROR,
      draggablePercent: 60,
      hideProgressBar: true,
      className:'pp'
    });
  };

    console.log(notes)
    return (
      <div className="note-list">
        <ToastContainer autoClose={2000} />
        {!notes.length ? (
          <h1 className="">Click the plus button to add a note</h1>
        ) : null}
        {notes.map((note) => (
          <NoteItem key={uuidv4()} note={note} notify={notify} />
        ))}
        <span style={style}>
          <Link
            className="add"
            to={{
              pathname: `/addnote`,
              state: {
                title: '',
                content: '',
              },
            }}
          >
            {add}
          </Link>
        </span>
      </div>
    );
}

const mapStateToProps = (state) => ({
    notes: state.notes
})

export default connect(mapStateToProps)(NoteList);