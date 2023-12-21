import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const PageHeader = styled.div`
  position: relative;
  background-color: #d2ceff;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const PrevBtn = styled.img`
  margin-left: 15px;
`;

const PrevHeader = () => {
  const navigate = useNavigate();
  return (
    <PageHeader>
      <PrevBtn
        src={`${process.env.PUBLIC_URL}/images/bt_prev.svg`}
        onClick={() => {
          navigate("/");
        }}
      />
    </PageHeader>
  );
};

export default PrevHeader;
