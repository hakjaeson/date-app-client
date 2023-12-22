import React, { useEffect, useRef, useState } from "react";
import {
  FormButton,
  FormContentInput,
  FormContents,
  FormEmoji,
  FormHashTag,
  FormHashTagBox,
  FormImgButton,
  FormTitle,
  FormTop,
  Line,
  LineArea,
  LlEmoji,
  UlEmoji,
} from "../../styles/diarystyles/createpage/formdragstyle";

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

const FormDrag = ({ register, emojiName, setEmojiName, imgSave }) => {
  const EMOJI = ["joy", "sadness", "angry", "surprise", "love"];
  const [boxHeight, setBoxHeight] = useState(300);
  const [hashTagResize, setHashTagResize] = useState(250);
  const [resizing, setResizing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
        {/* <FormEmojiValue
          {...register("emoji")}
          Value={EMOJI.indexOf(emojiName)}
        /> */}
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
          {...register("hashtag", {
            required:
              "해쉬태그는 필수사항입니다. 띄어쓰기 없이 작성해주세요. ex)#남친#여친",
            validate: value => {
              // 띄어쓰기가 있는지 확인
              if (value && /\s/.test(value)) {
                return "띄어쓰기는 허용되지 않습니다.";
              }
              return true;
            },
          })}
          resizing={hashTagResize}
          placeholder="#해시태그 띄어쓰기 없이 적어주세요. #남친#여친"
          onChange={HashTaghandleChange}
        />
      </FormHashTagBox>
      <FormImgButton onClick={imgSave}>이미지 저장</FormImgButton>
      <FormButton>완료</FormButton>
    </FormContents>
  );
};

export default FormDrag;
