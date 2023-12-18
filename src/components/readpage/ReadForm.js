import React from "react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import {
  FormEmoji,
  LlEmoji,
  ReadBottom,
  ReadContent,
  ReadContentbox,
  ReadDate,
  ReadEmoji,
  ReadHashTag,
  ReadImage,
  ReadMid,
  ReadTop,
  UlEmoji,
} from "../../styles/diarystyles/readpage/readpagestyle";

const PageMainForm = styled.form`
  position: relative;
  width: 100%;
  height: 80%;
  overflow-y: scroll;
`;

const ReadTitleInput = styled.input`
  background-color: #d2ceff;
  width: 100%;
  height: 10%;
  display: flex;
  padding-left: 25px;
  align-items: center;
  font-size: 25px;
  border-top: 2.5px solid #000;
  border-bottom: 2.5px solid #000;
`;

const ReadMidInput = styled.textarea`
  display: flex;
  width: 100%;
  height: 200px;
  font-size: 1.7rem;
  line-height: 1.6;
  letter-spacing: 0.5px;
  resize: none;
  padding: 5px;
  word-break: break-all;
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

const ReadForm = ({
  data,
  isOpen,
  EMOJI,
  setIsOpen,
  setEmojiName,
  emojiName,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const onValid = data => {
    console.log(data);
    // postCreatePage(data);
  };
  const onInValid = data => {
    alert(`${data?.title?.message}\n${data?.content?.message}`);
  };

  const handleClick = event => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <PageMainForm onSubmit={handleSubmit(onValid, onInValid)}>
      <ReadTitleInput
        {...register("title", {
          required: "제목은 필수사항입니다.",
        })}
        defaultValue={data?.title}
      />
      <ReadImage src="https://picsum.photos/300/300" />
      <ReadContentbox>
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
                        setIsOpen(!isOpen);
                        setEmojiName(emoji);
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
              src={`${process.env.PUBLIC_URL}/images/${emojiName}.jpeg`}
              alt={emojiName}
              onClick={handleClick}
            />
            <ReadDate>{`${year}/${month}/${date}/${daystr[day]}`}</ReadDate>
          </ReadTop>
          <ReadMidInput
            {...register("content", {
              required: "내용은 필수사항입니다.",
            })}
            defaultValue={data?.contents}
          />
          <ReadBottom>
            {data?.hashContents.map(item => (
              <ReadHashTag key={item}>{`#${item}`}</ReadHashTag>
            ))}
          </ReadBottom>
        </ReadContent>
      </ReadContentbox>
    </PageMainForm>
  );
};

export default ReadForm;
