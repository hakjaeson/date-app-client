import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

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
  padding: 0 0 15px 15px;

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

const UlEmoji = styled(motion.ul)`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  margin-top: 7%;
  padding-left: 15px;
`;

const LlEmoji = styled(motion.li)`
  list-style: none;
  opacity: 0;
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
  min-height: 110px;
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
  max-width: 350px;
  min-width: 60px;
  max-height: 50px;
  width: ${props => (props.resizing == 60 ? 60 : props.resizing)}px;
  height: ${({ width }) => (width === "350px" ? "50px" : "25px")};
  resize: none;
  overflow: hidden;
  text-align: center;
  padding-top: 4px;
  font-size: 1.2rem;
  border-radius: 10px;
  border: none;
`;

const FormButton = styled.button`
  position: absolute;
  bottom: 40px;
  right: 20px;
  width: 70px;
  height: 40px;
  font-size: 1.7rem;
  background-color: #ffdbab;
  /* border: 0.1rem solid rgba(0, 0, 0, 0.1); */
  /* box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13); */
  border: 2.5 solid #000;
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

const FormDrag = ({ register, errors }) => {
  const EMOJI = ["기쁨", "슬픔", "화남", "놀람", "사랑"];
  const [boxHeight, setBoxHeight] = useState(300);
  const [hashTagResize, setHashTagResize] = useState(60);
  const [resizing, setResizing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [emojiName, setEmojiName] = useState("놀람");
  const lineAreaRef = useRef(null);

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
    setIsOpen(!isOpen);
  };

  const HashTaghandleChange = event => {
    event.preventDefault();
    let hash = event.target.value;

    setHashTagResize(60 + hash.length * 10);
  };
  return (
    <FormContents height={boxHeight}>
      <LineArea ref={lineAreaRef}>
        <Line />
      </LineArea>
      <FormTop>
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
        <FormHashTag
          {...register("hashtag")}
          resizing={hashTagResize}
          placeholder="#해시태그"
          onChange={HashTaghandleChange}
        />
      </FormHashTagBox>
      <FormButton>저장</FormButton>
    </FormContents>
  );
};

export default FormDrag;
