import React from 'react';
import './add-note.styles.scss';
import { addNote, editNote } from '../../redux/notes/note.actions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faArrowAltCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const check = <FontAwesomeIcon style={{ color: 'rgb(40, 69, 236)' }} icon={faCheckCircle} />;
const cross = <FontAwesomeIcon style={{ color: 'black' }} icon={faArrowAltCircleLeft} />;
const dates = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};
class AddNote extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      id: '',
      edited: '',
    };
  }

  componentDidMount() {
    const { title, content, id, edited } = this.props.location.state;
    this.setState({
      title,
      content,
      id,
      edited,
    });
  }
  handleChange = (event) => {
    const date = new Date();
    const { value, name } = event.target;
    this.setState({
      [name]: value,
      edited: `${date.getDate()} ${
        dates[date.getMonth()]
      } ${date.getHours()}:${date.getMinutes()} `,
    });
  };

  handleSubmit = (event) => {
    const notify = () => {
      console.log('notified')
      toast('Done', {
        type: toast.TYPE.SUCCESS,
        draggablePercent: 60,
        hideProgressBar: true,
        className: 'pp',
      });
    };
    event.preventDefault();
    if (this.props.match.path === '/editnote/:noteid') {
      this.props.editNote(this.state);
      console.log('edited');
    } else {
      this.props.addNote(this.state);
    }

    this.setState({
      title: '',
      content: '',
    });
    notify()
  };
  cancel = () => {
    this.setState({
      title: '',
      content: '',
    });
  };

  render() {
    
    return (
      <div>
        <ToastContainer autoClose={2000} />
        <form className="add-note">
          <input
            required
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            className="form-input"
            placeholder="Title : 1-2 words"
          />
          <textarea
            required
            name="content"
            type="text"
            className="form-input2"
            value={this.state.content}
            onChange={this.handleChange}
            placeholder="Content"
          />
          <div className="buttons">
            {this.state.content === '' && this.state.title === '' ? (
              <button className="check" type="submit" value="Submit Form">
                {check}
              </button>
            ) : (
              <button
                onClick={this.handleSubmit}
                className="check"
                type="submit"
                value="Submit Form"
              >
                {check}
              </button>
            )}

            <Link to="/">
              <button className="cancel" onClick={this.cancel}>
                {cross}
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNote: (note) => dispatch(addNote(note)),
  editNote: (note) => dispatch(editNote(note))
});

export default connect(null, mapDispatchToProps)(AddNote);
