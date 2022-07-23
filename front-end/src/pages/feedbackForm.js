import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { action } from '../services/actions';
import './feedbackForm.css';
import Footer from '../components/footer';

class Feedback extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  onInputChange = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  };

  handleClick = async (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    await dispatch(this.state);
    try {
      await fetch("http://localhost:3000/feedback", {
        method: "POST",
        headers: {"Content-Type": "application/JSON", 'Access-Control-Allow-Origin': "no-cors"},
        body: JSON.stringify(this.state) 
      })
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
        <div className="form-container">
          <div className="image"></div>
          <div className="circle-pink"></div>
          <div className="circle-yellow"></div>
          <form>
            <h2>Reach out to us!</h2>
            <input
              id="name"
              className="name"
              type="name"
              value={ this.state.name }
              onChange={ this.onInputChange }
              placeholder="Your name*"
            />
            <input
              id="email"
              className="email"
              type="email"
              value={ this.state.email }
              onChange={ this.onInputChange }
              placeholder="Your e-mail*"
            />
            <input
              id="message"
              className="message"
              type="message"
              value={ this.state.message }
              onChange={ this.onInputChange }
              placeholder="Your message*"
            />
            <button
              type="submit"
              onClick={ this.handleClick }
            >
              Send message
            </button>
          </form>
          <div className="circle-yellow2"></div>
          <div className="circle-pink2"></div>
          <Footer />
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  dispatch: (data) => dispatch(action(data)),
}); 

Feedback.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Feedback);