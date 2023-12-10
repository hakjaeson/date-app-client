import React from "react";
import {
  NavigationBar,
  NavigationList,
} from "../../styles/diarystyles/mainpage/mainpagestyle";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    //Navigation Bar area
    <NavigationBar>
      <NavigationList>
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
      </NavigationList>
    </NavigationBar>
  );
};

export default Navigation;
