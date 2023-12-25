import styled from "@emotion/styled";
import React from "react";
import { BtBack } from "../../styles/diarystyles/profilepage/headerstyle";

const HashHeader = ({ onBackClick, hashTag }) => {
  const HeaderWapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 65px;
    background-color: #d2ceff;
  `;
  return (
    <HeaderWapper>
      <div>
        <BtBack
          onClick={onBackClick}
          src={`${process.env.PUBLIC_URL}/images/bt_back.svg`}
        />
      </div>
      <div>
        <span>#{hashTag}</span>
      </div>
    </HeaderWapper>
  );
};

export default HashHeader;
