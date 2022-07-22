import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { action } from '../services/actions';

class Feedback extends React.Component {
  rende() {
    return (
      <div>
        <form>
          <h2>Reach out to us!</h2>
          <input
            id="name"
            type="name"
            placeholder="Your name*"
          />
          <input
            id="email"
            type="email"
            placeholder="Your e-mail*"
          />
          <input
            id="message"
            type="message"
            placeholder="Your message*"
          />
          <button
            type="submit"
          >
            Send message
          </button>
        </form>
      </div>
    );
  }
};

export default Feedback;