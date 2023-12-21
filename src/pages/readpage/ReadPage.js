import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import PrevHeader from "../../components/common/PrevHeader";
import {
  getReadPage,
  deleteReadPage,
  updateReadPage,
} from "../../api/read-page/readPageApi";
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
import { useForm } from "react-hook-form";

const ReadPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const diaryId = searchParams.get("id");
  const navigate = useNavigate();
  const EMOJI = ["joy", "sadness", "angry", "surprise", "love"];
  const [isOpen, setIsOpen] = useState(false);
  const [emojiNum, setEmojiNum] = useState();
  const [updateEmojiNum, setUpdateEmojiNum] = useState();
  const [data, setData] = useState(null);
  const [edit, setEdit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getReadPage(setData, diaryId, setEmojiNum);
  }, []);

  const onValid = data => {
    // console.log(data, diaryId, updateEmojiNum);
    const hashTag = data.hashTag.split("#").filter(Boolean);
    updateReadPage(data, diaryId, updateEmojiNum, hashTag);

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  const onInValid = data => {
    alert(`${data?.title?.message}\n${data?.content?.message}`);
  };

  const ClickEdit = () => {
    setEdit(!edit);
  };

  const ClickDelete = () => {
    const check = confirm("정말로 삭제하시겠습니까?");

    if (check) {
      deleteReadPage(diaryId);
      //서버 업데이트 시간 주기
      setTimeout(() => {
        navigate("/");
      }, 1000);
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
            setUpdateEmojiNum={setUpdateEmojiNum}
            setIsOpen={setIsOpen}
            register={register}
          />
        ) : (
          data && (
            <PageMain>
              <ReadImage src="https://picsum.photos/300/300" />
              <ReadContentbox>
                <ReadContent>
                  <ReadTop>
                    <ReadEmoji
                      type="image"
                      src={`${process.env.PUBLIC_URL}/images/${EMOJI[emojiNum]}.jpeg`}
                      alt={EMOJI[emojiNum]}
                    />
                    <ReadTitle>{data?.title}</ReadTitle>
                  </ReadTop>
                  <ReadDate>{data?.createdAt}</ReadDate>
                  <ReadMid>{data?.contents}</ReadMid>
                  <ReadBottom>
                    {data?.hashContents.map((item, idx) => (
                      <ReadHashTag key={idx}>{`#${item}`}</ReadHashTag>
                    ))}
                  </ReadBottom>
                </ReadContent>
              </ReadContentbox>
            </PageMain>
          )
        )}
        <ReadFooter>
          {edit ? (
            <ReadPageButton onClick={handleSubmit(onValid, onInValid)}>
              완료
            </ReadPageButton>
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
