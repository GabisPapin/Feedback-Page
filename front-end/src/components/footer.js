import React from 'react';
import { RiLinkedinFill , RiFacebookLine } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';
import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="circle"></div>
        <div className="container-icons">
          <RiLinkedinFill />
          <RiFacebookLine />
          <AiOutlineTwitter />
          <FaPinterestP />
        </div>
      </footer>
    );
  }
};

export default Footer;