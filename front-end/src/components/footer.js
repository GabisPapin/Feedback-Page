import React from 'react';
import { RiLinkedinFill , RiFacebookLine } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';
import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <RiLinkedinFill />
        <RiFacebookLine />
        <AiOutlineTwitter />
        <FaPinterestP />
      </footer>
    );
  }
};

export default Footer;