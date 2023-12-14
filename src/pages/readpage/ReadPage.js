import styled from "@emotion/styled";
import React, { useEffect } from "react";
import PrevHeader from "../../components/common/PrevHeader";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 320px;
  max-width: 600px;
  max-height: 844px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Device = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 844px;
`;

const PageMain = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
`;

const ReadTitle = styled.div`
  background-color: #d2ceff;
  height: 10%;
  display: flex;
  padding-left: 25px;
  align-items: center;
  font-size: 25px;
  border-top: 2.5px solid #000;
  border-bottom: 2.5px solid #000;
`;

const ReadImage = styled.img`
  width: 100%;
  height: 40%;
  border-bottom: 2.5px solid #000;
`;

const ReadContentbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  border-bottom: 2.5px solid #000;
`;

const ReadContent = styled.div`
  background-color: saddlebrown;
  width: 360px;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReadTop = styled.div`
  background-color: greenyellow;
  width: 100%;
  height: 25%;
  display: flex;
`;

const ReadEmoji = styled.img`
  width: 50px;
  height: 50px;

  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  border-radius: 50%;
`;

const ReadDate = styled.div`
  background-color: darkorange;
  width: 100%;
`;

const ReadMid = styled.div`
  background-color: greenyellow;
  width: 100%;
  height: 50%;
  display: flex;
`;

const ReadBottom = styled.div`
  background-color: darkblue;
  width: 100%;
  height: 25%;
  display: flex;
`;

const ReadFooter = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: right;
  padding: 10px 10px 0 0;
`;

const ReadPageButton = styled.button`
  width: 70px;
  height: 40px;
  font-size: 1.7rem;
  background-color: #ffdbab;
  border: 2.5 solid #000;
  border-radius: 16px;
  margin-right: 5px;
`;

const ReadPage = () => {
  const emoji = "놀람";

  return (
    <Wrapper>
      <Device>
        <PrevHeader />
        <PageMain>
          <ReadTitle>제목</ReadTitle>
          <ReadImage src="https://picsum.photos/300/300" />
          <ReadContentbox>
            <ReadContent>
              <ReadTop>
                <ReadEmoji
                  type="image"
                  src={`${process.env.PUBLIC_URL}/images/${emoji}.jpeg`}
                  alt={emoji}
                />
                <ReadDate></ReadDate>
              </ReadTop>
              <ReadMid></ReadMid>
              <ReadBottom></ReadBottom>
            </ReadContent>
          </ReadContentbox>
        </PageMain>
        <ReadFooter>
          <ReadPageButton>수정</ReadPageButton>
          <ReadPageButton>삭제</ReadPageButton>
        </ReadFooter>
      </Device>
    </Wrapper>
  );
};

export default ReadPage;
