import React from 'react';
import NoteList from './components/note-list/note-list.component';
import AddNote from './components/add-note/add-note.component';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  const notify = () => {
    console.log('notified');
    toast('Done', {
      type: toast.TYPE.SUCCESS,
      draggablePercent: 60,
      hideProgressBar: true,
      className: 'pp',
    });
  };



function App() {
  
  return (
    <div className="App">
      <h1 className="app-name">Notedd</h1>
      <ToastContainer autoClose={2000} />
      <Switch>
        <Route exact path="/" component={NoteList} />
        <Route
          exact
          path="/addNote"
          render={(props) => <AddNote {...props} notify={notify} />}
        />
        <Route
          exact
          path="/editnote/:noteid"
          render={(props) => <AddNote {...props} notify={notify} />}
        />
        <Route component={NoteList} />
      </Switch>
    </div>
  );
}

export default App;
