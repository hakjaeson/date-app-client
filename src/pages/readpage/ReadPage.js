import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import PrevHeader from "../../components/common/PrevHeader";
import { getReadPage, getTest } from "../../api/read-page/readPageApi";
import {
  Device,
  FormEmoji,
  LlEmoji,
  PageMain,
  ReadBottom,
  ReadContent,
  ReadContentbox,
  ReadDate,
  ReadEmoji,
  ReadFooter,
  ReadHashTag,
  ReadImage,
  ReadMid,
  ReadPageButton,
  ReadTitle,
  ReadTop,
  UlEmoji,
  Wrapper,
} from "../../styles/diarystyles/readpage/readpagestyle";
import ReadForm from "../../components/readpage/ReadForm";

const ReadPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const diaryId = searchParams.get("id");
  const EMOJI = ["기쁨", "슬픔", "화남", "놀람", "사랑"];
  const [isOpen, setIsOpen] = useState(false);
  const [emojiName, setEmojiName] = useState();
  const [data, setData] = useState();
  const [edit, setEdit] = useState(false);

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
    setEmojiName(EMOJI?.[parseInt(data?.emoji - 1)]);
  };

  const ClickSave = () => {
    setEdit(!edit);
  };

  return (
    <Wrapper>
      <Device>
        <PrevHeader />
        {edit ? (
          <ReadForm
            data={data}
            isOpen={isOpen}
            EMOJI={EMOJI}
            setIsOpen={setIsOpen}
            setEmojiName={setEmojiName}
            emojiName={emojiName}
          />
        ) : (
          <PageMain>
            <ReadTitle>{data?.title}</ReadTitle>
            <ReadImage src="https://picsum.photos/300/300" />
            <ReadContentbox>
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
            </ReadContentbox>
          </PageMain>
        )}
        <ReadFooter>
          {edit ? (
            <ReadPageButton onClick={ClickSave}>완료</ReadPageButton>
          ) : (
            <>
              <ReadPageButton onClick={ClickEdit}>수정</ReadPageButton>
              <ReadPageButton>삭제</ReadPageButton>
            </>
          )}
        </ReadFooter>
      </Device>
    </Wrapper>
  );
};

export default ReadPage;
