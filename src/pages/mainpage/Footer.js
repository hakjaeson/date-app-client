import React from "react";
import { Link } from "react-router-dom";
import {
  FooterBar,
  FooterList,
} from "../../styles/diarystyles/mainpage/mainpagestyle";

const Footer = () => {
  return (
    //Navigation Bar area
    <FooterBar>
      <FooterList>
        <li>
          <Link to="/calendar">
            <img src="https://picsum.photos/56/56" />
          </Link>
        </li>
        <li>추가임</li>
        <li>
          <Link to="/profile">
            <img src="https://picsum.photos/56/56" />
          </Link>
        </li>
      </FooterList>
    </FooterBar>
  );
};

export default Footer;
