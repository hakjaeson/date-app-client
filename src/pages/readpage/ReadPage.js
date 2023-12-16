import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import PrevHeader from "../../components/common/PrevHeader";
import { getReadPage } from "../../api/read-page/readPageApi";
import { motion } from "framer-motion";

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
  overflow-y: scroll;
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50%;
`;

const ReadContent = styled.div`
  width: 360px;
  min-height: 300px;

  display: flex;
  flex-direction: column;
`;

const ReadTop = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UlEmoji = styled(motion.ul)`
  position: absolute;
  transform: translateY(-50%);
  display: flex;
  top: 0;
  left: 0;
  padding-left: 15px;
`;

const LlEmoji = styled(motion.li)`
  list-style: none;
  opacity: 0;
`;

const ReadEmoji = styled.img`
  width: 50px;
  height: 50px;

  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  border-radius: 50%;
`;

const FormEmoji = styled.input`
  width: 50px;
  height: 50px;

  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  border-radius: 50%;
`;

const ReadDate = styled.div`
  width: 100%;
  line-height: 70px;
  font-size: 1.7rem;
  padding-left: 15px;
`;

const ReadMid = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.7rem;
  line-height: 1.6;
  letter-spacing: 0.5px;
`;

const ReadBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: 50px;
  margin-bottom: 50px;
`;

const ReadHashTag = styled.span`
  background-color: #ffb5b6;
  padding: 10px;
  font-size: 1.7rem;
  border-radius: 16px;
`;

const ReadFooter = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: right;
  padding: 10px 10px 0 0;

  border-top: 2.5px solid #000;
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

const EmojiBoxMotion = {
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  close: {},
};

const EmojiMotion = {
  open: { opacity: 1, transition: { duration: 1 } },
  close: { opacity: 0 },
};

const ReadPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const diaryId = searchParams.get("id");
  const EMOJI = ["기쁨", "슬픔", "화남", "놀람", "사랑"];
  const [isOpen, setIsOpen] = useState(false);
  const [emojiName, setEmojiName] = useState();
  const [data, setData] = useState();
  const [edit, setEdit] = useState(true);

  let today = new Date();
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  let day = today.getDay(); // 요일
  const daystr = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  useEffect(() => {
    getReadPage(setData, diaryId - 1, setEmojiName);
  }, []);

  const ClickEdit = () => {
    setEdit(!edit);
  };

  const ClickSave = () => {
    setEdit(!edit);
  };

  const handleClick = event => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <Wrapper>
      <Device>
        <PrevHeader />
        <PageMain>
          <ReadTitle>{data?.title}</ReadTitle>
          <ReadImage src="https://picsum.photos/300/300" />
          <ReadContentbox>
            {edit ? (
              <ReadContent>
                <ReadTop>
                  <ReadEmoji
                    type="image"
                    src={`${process.env.PUBLIC_URL}/images/${
                      EMOJI?.[parseInt(data?.emoji - 1)]
                    }.jpeg`}
                    alt={EMOJI}
                  />
                  <ReadDate>{`${year}/${month}/${date}/${daystr[day]}`}</ReadDate>
                </ReadTop>
                <ReadMid>{data?.contents}</ReadMid>
                <ReadBottom>
                  {data?.hashContents.map(item => (
                    <ReadHashTag key={item}>{`#${item}`}</ReadHashTag>
                  ))}
                </ReadBottom>
              </ReadContent>
            ) : (
              <ReadContent>
                <ReadTop>
                  {isOpen && (
                    <UlEmoji
                      variants={EmojiBoxMotion}
                      animate={isOpen ? "open" : "closed"}
                    >
                      {EMOJI.map((emoji, id) => {
                        return (
                          <LlEmoji
                            key={id}
                            onClick={() => {
                              setEmojiName(emoji);
                              setIsOpen(!isOpen);
                              // console.log(emoji);
                            }}
                            variants={EmojiMotion}
                          >
                            <FormEmoji
                              type="image"
                              src={`${process.env.PUBLIC_URL}/images/${emoji}.jpeg`}
                              alt={emoji}
                            />
                          </LlEmoji>
                        );
                      })}
                    </UlEmoji>
                  )}
                  <ReadEmoji
                    type="image"
                    src={`${process.env.PUBLIC_URL}/images/${EMOJI[emojiName]}.jpeg`}
                    alt={EMOJI}
                    onClick={handleClick}
                  />
                  <ReadDate>{`${year}/${month}/${date}/${daystr[day]}`}</ReadDate>
                </ReadTop>
                <ReadMid>{data?.contents}</ReadMid>
                <ReadBottom>
                  {data?.hashContents.map(item => (
                    <ReadHashTag key={item}>{`#${item}`}</ReadHashTag>
                  ))}
                </ReadBottom>
              </ReadContent>
            )}
          </ReadContentbox>
        </PageMain>
        <ReadFooter>
          {edit ? (
            <>
              <ReadPageButton onClick={ClickEdit}>수정</ReadPageButton>
              <ReadPageButton>삭제</ReadPageButton>
            </>
          ) : (
            <ReadPageButton onClick={ClickSave}>완료</ReadPageButton>
          )}
        </ReadFooter>
      </Device>
    </Wrapper>
  );
};

export default ReadPage;
