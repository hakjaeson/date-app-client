import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";

const FormContents = styled.div`
  background-color: #fff;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 100%;
  min-height: 50%;
  height: ${props => props.height}px;
  padding-left: 15px;

  border: 2.5px solid #000;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  border-radius: 50px 50px 0 0;
`;

const LineArea = styled.div`
  width: 60%;
  height: 50px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  width: 50px;
  height: 1px;
  margin-right: 15px;
  background-color: black;
  border-color: black;
`;

const FormTop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 5%;
`;

const UlEmoji = styled.ul`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  margin-top: 7%;
  padding-left: 15px;
`;

const FormEmoji = styled.input`
  width: 50px;
  height: 50px;

  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  border-radius: 50%;
`;

const FormTitle = styled.input`
  width: 75%;
  height: 20px;
  margin-left: 15px;
  font-size: 1.7rem;
  border: none;
  outline: none;
`;

const FormContentInput = styled.textarea`
  width: 100%;
  margin-top: 10px;
  min-height: 40%;
  max-height: 65%;
  height: ${props => props.height - 250}px;
  font-size: 1.7rem;
  resize: none;
  vertical-align: text-top;
  border: none;
  outline: none;
`;

const FormHashTagBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  color: black;
`;

const FormHashTag = styled.textarea`
  background-color: #ffb5b6;
  width: 15%; /* 가로폭 100%로 설정 */
  resize: both; /* 사용자가 크기를 조절할 수 있도록 설정 */
  overflow: hidden; /* 내용이 넘칠 경우 스크롤바 표시 */
  text-align: center; /* 텍스트를 좌측 정렬로 설정 */
  font-size: 1.2rem;
  border-radius: 15px;
`;

const FormButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 15%;
  height: 30px;
  background-color: #ffdbab;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  border-radius: 10px;
`;

const FormDrag = ({ register, errors }) => {
  const [boxHeight, setBoxHeight] = useState(400);
  const [resizing, setResizing] = useState(false);
  const lineAreaRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const EMOJI = ["기쁨", "슬픔", "화남", "놀람", "사랑"];
  const [emojiName, setEmojiName] = useState("놀람");

  useEffect(() => {
    const handleTouchStart = e => {
      if (e.target === lineAreaRef.current) {
        setResizing(true);
      }
    };

    const handleTouchMove = e => {
      if (resizing) {
        setBoxHeight(window.innerHeight - e.touches[0].clientY);
      }
    };

    const handleTouchEnd = () => {
      setResizing(false);
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [resizing]);

  const handleClick = event => {
    event.preventDefault();
    // 여기에 원하는 동작을 추가하세요
    console.log("Image clicked!");
    setIsOpen(!isOpen);
  };

  const onCLicked = (e, errors) => {
    console.log(errors?.title);
  };
  return (
    <FormContents height={boxHeight}>
      <LineArea ref={lineAreaRef}>
        <Line />
      </LineArea>
      <FormTop>
        {isOpen && (
          <UlEmoji>
            {EMOJI.map((emoji, id) => {
              return (
                <li
                  key={id}
                  onClick={() => {
                    setEmojiName(emoji);
                    setIsOpen(!isOpen);
                    console.log(emoji);
                  }}
                >
                  <FormEmoji
                    type="image"
                    src={`${process.env.PUBLIC_URL}/images/${emoji}.jpeg`}
                    alt={emoji}
                  />
                </li>
              );
            })}
          </UlEmoji>
        )}
        <FormEmoji
          type="image"
          src={`${process.env.PUBLIC_URL}/images/${emojiName}.jpeg`}
          alt="Image 1"
          onClick={handleClick}
        />
        <FormTitle
          {...register("title", {
            required: "제목은 필수사항입니다.",
          })}
          placeholder="제목"
        />
      </FormTop>
      <FormContentInput
        height={boxHeight}
        {...register("content", {
          required: "내용은 필수사항입니다.",
        })}
        placeholder="내용"
      />
      <FormHashTagBox>
        <FormHashTag {...register("hashtag")} placeholder="#해시태그" />
      </FormHashTagBox>
      <FormButton>저장</FormButton>
    </FormContents>
  );
};

export default FormDrag;
