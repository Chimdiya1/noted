import React from 'react';
import NoteList from './components/note-list/note-list.component';
import AddNote from './components/add-note/add-note.component';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1 className="app-name">Noted</h1>
      <Switch>
        <Route exact path="/" component={NoteList} />
        <Route exact path="/addNote" component={AddNote} />
        <Route exact path="/editnote/:noteid" component={AddNote} />
      </Switch>
    </div>
  );
}

export default App;
