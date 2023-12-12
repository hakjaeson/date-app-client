import React from "react";
import { Link } from "react-router-dom";
import {
  FooterBar,
  FooterList,
} from "../../styles/diarystyles/mainpage/mainpagestyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faUser } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    //Navigation Bar area
    <FooterBar>
      <FooterList>
        <li>
          <Link to="/calendar">
            <FontAwesomeIcon
              icon={faCalendarDays}
              style={{ width: 25, height: 25 }}
            />
          </Link>
        </li>

        <li>
          <img src={process.env.PUBLIC_URL + "/images/icon_plus.svg"} alt="" />
        </li>

        <li>
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} style={{ width: 30, height: 30 }} />
          </Link>
        </li>
      </FooterList>
    </FooterBar>
  );
};

export default Footer;
