import React from "react";
import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BtBack,
  BtHome,
  Header,
} from "../../styles/diarystyles/profilepage/headerstyle";

const HeaderWapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65px;
  background-color: #d2ceff;
`;

const PrevHeader = ({ edit, setEdit }) => {
  const navigate = useNavigate();
  return (
    <HeaderWapper>
      <Header>
        <BtBack
          src={`${process.env.PUBLIC_URL}/images/bt_back.svg`}
          onClick={() => {
            if (edit) {
              setEdit(!edit);
            } else {
              navigate("/");
            }
          }}
        />
        <BtHome
          src={`${process.env.PUBLIC_URL}/images/bt_home.svg`}
          onClick={() => {
            navigate("/");
          }}
        />
      </Header>
    </HeaderWapper>
  );
};

export default PrevHeader;
