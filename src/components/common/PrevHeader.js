import React from "react";
import styled from "@emotion/styled";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageHeader = styled.div`
  position: relative;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const PrevHeader = () => {
  return (
    <PageHeader>
      <FontAwesomeIcon
        icon={faChevronLeft}
        style={{ width: 20, height: 20, marginLeft: 20 }}
      />
    </PageHeader>
  );
};

export default PrevHeader;
