import React from 'react';
import Wrapper from './styles';
import { footerLinks } from "../../utils/constants";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <Wrapper>
      <div className="footerLinks">
        {footerLinks.map((link) => {
          const { url, text, id } = link;
          return (
            <div key={id}>
              {id === 4 ? <a href='mailto:belyazidi56@gmail.com'>{text}</a>
                :
                <Link to={url}>{text}</Link>
              }
            </div>
          );
        })}
      </div>
      <div className='underline'>
      </div>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> RabatWear </span>
        - All Rights Reserved
      </h5>
    </Wrapper>
  );
};

export default Footer;
