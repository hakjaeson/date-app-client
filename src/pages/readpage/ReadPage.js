import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import PrevHeader from "../../components/common/PrevHeader";
import { getReadPage, deleteReadPage } from "../../api/read-page/readPageApi";
import {
  Device,
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
  const navigate = useNavigate();
  const EMOJI = ["joy", "sadness", "angry", "surprise", "love"];
  const [isOpen, setIsOpen] = useState(false);
  const [emojiName, setEmojiName] = useState();
  const [data, setData] = useState(null);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    getReadPage(setData, diaryId, setEmojiName);
  }, []);
  const ClickEdit = () => {
    setEdit(!edit);
  };

  const ClickSave = () => {
    setEdit(!edit);
  };

  const ClickDelete = () => {
    const check = confirm("정말로 삭제하시겠습니까?");

    if (check) {
      deleteReadPage(diaryId);
      navigate("/");
    }
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
          />
        ) : (
          data && (
            <PageMain>
              <ReadTitle>{data?.title}</ReadTitle>
              <ReadImage src="https://picsum.photos/300/300" />
              <ReadContentbox>
                <ReadContent>
                  <ReadTop>
                    <ReadEmoji
                      type="image"
                      src={`${process.env.PUBLIC_URL}/images/${EMOJI[emojiName]}.jpeg`}
                      alt={EMOJI[emojiName]}
                    />
                    <ReadDate>{data?.createdAt}</ReadDate>
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
          )
        )}
        <ReadFooter>
          {edit ? (
            <ReadPageButton onClick={ClickSave}>완료</ReadPageButton>
          ) : (
            <>
              <ReadPageButton onClick={ClickEdit}>수정</ReadPageButton>
              <ReadPageButton onClick={ClickDelete}>삭제</ReadPageButton>
            </>
          )}
        </ReadFooter>
      </Device>
    </Wrapper>
  );
};

export default ReadPage;
