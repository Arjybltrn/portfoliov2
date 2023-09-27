import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import '../css/Footer.css'

function Footer(props) {
    return (
        <footer>
        <ul className='footer'>
          <li>
            <a href="https://github.com/Arjybltrn" target="_blank" rel="noopener noreferrer">
              <FaGithub className="footer-icon" size={25} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/arjaybeltran" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="footer-icon" size={25} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/arjaybeltran" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="footer-icon" size={25} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/arjaybeltran" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="footer-icon" size={25} />
            </a>
          </li>
        </ul>
      </footer>
    )
}

export default Footer;