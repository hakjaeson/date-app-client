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
          <Link to="/createpage">
            <img
              src={process.env.PUBLIC_URL + "/images/icon_plus.svg"}
              alt=""
            />
          </Link>
        </li>

        <li>
          <Link to="/profile/{idx}">
            <FontAwesomeIcon icon={faUser} style={{ width: 30, height: 30 }} />
          </Link>
        </li>
      </FooterList>
    </FooterBar>
  );
};

export default Footer;
