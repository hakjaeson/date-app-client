import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import moment from "moment/moment";
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
import { ImageContainer } from "../../styles/diarystyles/createpage/formstyle";

const PageMainForm = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  overflow-y: scroll;
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
  background-color: #ffb5b6;
  padding: 10px;
  font-size: 1.7rem;
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
  setSaved,
  setIsOpen,
  register,
}) => {
  const [emojiNum, setEmojiNum] = useState(data.emoji);
  const [selectFile, setSelectFile] = useState([]);

  const path = "images/";

  useEffect(() => {
    setUpdateEmojiNum(data.emoji);
  });

  const handleClick = event => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  // const upload = async () => {
  //   if (selectFile.length == 0) {
  //     // 이미지 선택하지 않다면 안내창 출력
  //     alert("이미지를 선택해주세요.");
  //     return;
  //   }
  //   // 중복되지 않는 파일명을 생성한다.

  //   for (let i = 0; i < selectFile.length; i++) {
  //     const tempName = moment().format("YYYYMMDDhhmmss");
  //     const fileName = `${path}${tempName}_${selectFile[i].name}`;
  //     try {
  //       const imageRef = ref(storage, fileName);
  //       const fbRes = await uploadBytes(imageRef, selectFile[i]);
  //       console.log("업로드 성공", fbRes);

  //       // 백엔드에서 이미지 주소를 주세요. 요청
  //       // 파이어베이스 이미지 url 을 파악
  //       const url = await getDownloadURL(fbRes.ref);
  //       setImgUrl(imgUrl => {
  //         const updatedImgUrl = [url, ...imgUrl];
  //         return updatedImgUrl;
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };
  const imgSave = e => {
    e.preventDefault();
    // upload();
    setSaved(true);
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
              src={`${process.env.PUBLIC_URL}/images/${EMOJI[emojiNum]}.jpeg`}
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
              {...register("hashTag", {
                required: "해쉬태그는 필수사항입니다.",
              })}
              defaultValue={data?.hashContents}
            />
          </ReadBottom>
        </ReadContent>
      </ReadContentbox>
    </PageMainForm>
  );
};

export default ReadForm;
