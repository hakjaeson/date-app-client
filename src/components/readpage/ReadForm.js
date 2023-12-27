import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import {
  FormEmoji,
  LlEmoji,
  ReadBottom,
  ReadContent,
  ReadContentbox,
  ReadDate,
  ReadEmoji,
  ReadTop,
  UlEmoji,
} from "../../styles/diarystyles/readpage/readpagestyle";
import ImageUpload from "../createpage/ImageUpload";

const PageMainForm = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
`;

const ReadTitleInput = styled.input`
  width: 100%;
  height: 45px;
  display: flex;
  padding-left: 15px;
  align-items: center;
  font-size: 25px;
  border: none;
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

const ReadHashTagInput = styled.input`
  background-color: #ffc2c0;
  padding: 10px;
  font-size: 1.7rem;
  border: none;
  border-radius: 16px;
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
  setUpdateEmojiNum,
  setIsOpen,
  register,
  selectFile,
  setSelectFile,
}) => {
  const [emojiNum, setEmojiNum] = useState(data.emoji);

  const handleClick = event => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <PageMainForm>
      <ImageContainer>
        <ImageUpload selectFile={selectFile} setSelectFile={setSelectFile} />
      </ImageContainer>
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
                        setEmojiNum(id);
                        setUpdateEmojiNum(id);
                      }}
                      variants={EmojiMotion}
                    >
                      <FormEmoji
                        type="image"
                        src={`${process.env.PUBLIC_URL}/images/${emoji}.png`}
                        alt={emoji}
                      />
                    </LlEmoji>
                  );
                })}
              </UlEmoji>
            )}
            <ReadEmoji
              type="image"
              src={`${process.env.PUBLIC_URL}/images/${EMOJI[emojiNum]}.png`}
              alt={emojiNum}
              onClick={handleClick}
            />
            <ReadTitleInput
              {...register("title", {
                required: "제목은 필수사항입니다.",
              })}
              defaultValue={data?.title}
            />
          </ReadTop>
          <ReadDate>{`${data.createdAt}`}</ReadDate>
          <ReadMidInput
            {...register("content", {
              required: "내용은 필수사항입니다.",
            })}
            defaultValue={data?.contents}
          />
          <ReadBottom>
            <ReadHashTagInput
              {...register("hashtag", {
                required:
                  "해쉬태그는 필수사항입니다. 띄어쓰기 없이 작성해주세요. ex)#남친#여친",
                validate: value => {
                  const hashtags = value.split("#").filter(Boolean); // #을 기준으로 문자열을 나눠 배열로 만듭니다.
                  if (hashtags.length < 1) {
                    return "적어도 하나의 해시태그를 입력하세요.";
                  }
                  if (hashtags.some(tag => /\s/.test(tag))) {
                    return "띄어쓰기는 허용되지 않습니다.";
                  }
                  return true;
                },
              })}
              placeholder="#해시태그 띄어쓰기 없이 적어주세요. #남친#여친"
              defaultValue={data?.hashContents.map(item => `#${item}`).join("")}
            />
          </ReadBottom>
        </ReadContent>
      </ReadContentbox>
    </PageMainForm>
  );
};

export default ReadForm;
