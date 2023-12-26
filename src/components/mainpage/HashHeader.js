import styled from "@emotion/styled";
import React from "react";
import { BtBack } from "../../styles/diarystyles/profilepage/headerstyle";
import {
  BtBackWrapper,
  HashHeaderWapper,
  HashTagHeader,
} from "../../styles/diarystyles/mainpage/hashcontentstyle";

const HashHeader = ({ onBackClick, hashTag }) => {
  return (
    <HashHeaderWapper>
      <BtBackWrapper>
        <BtBack
          onClick={onBackClick}
          src={`${process.env.PUBLIC_URL}/images/bt_back.svg`}
        />
      </BtBackWrapper>
      <HashTagHeader>
        <span>#{hashTag}</span>
      </HashTagHeader>
    </HashHeaderWapper>
  );
};

export default HashHeader;
