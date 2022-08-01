import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import {IoLogoTwitter} from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/jogoh-michael-257778222" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Michaeljogoh" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/MJogoh" target="_blank">
        <IoLogoTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
