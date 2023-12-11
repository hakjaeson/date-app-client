import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import myImage from "./놀람.jpeg";

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
  gap: 10px;

  border: 0.1rem solid rgba(0, 0, 0, 0.1);
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
  background-color: black;
  border-color: black;
`;

const FormTop = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const FormEmoji = styled.input`
  width: 50px;
  height: 50px;

  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  border-radius: 50%;
`;

const FormTitle = styled.input`
  width: 70%;
  height: 20px;
  border: none;
  outline: none;
`;

const FormHashTag = styled.input`
  width: 60%;
  height: 20px;
  border: none;
  outline: none;
`;

const FormContentInput = styled.textarea`
  width: 90%;
  min-height: 40%;
  max-height: 70%;
  height: ${props => props.height - 400}px;
  resize: none;
  vertical-align: text-top;
  border: none;
  outline: none;
`;

const FormButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 15%;
  height: 30px;
  background-color: #fff;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  border-radius: 10px;
`;

const FormDrag = ({ register, errors }) => {
  const [boxHeight, setBoxHeight] = useState("");
  const [resizing, setResizing] = useState(false);
  const lineAreaRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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
  return (
    <FormContents height={boxHeight}>
      <LineArea ref={lineAreaRef}>
        <Line />
      </LineArea>
      <FormTop>
        {isOpen && (
          <ul>
            <li
              onClick={() => {
                return;
              }}
            >
              Item 1
            </li>
            <li
              onClick={() => {
                return;
              }}
            >
              Item 2
            </li>
            <li
              onClick={() => {
                return;
              }}
            >
              Item 3
            </li>
          </ul>
        )}
        <FormEmoji
          type="image"
          src={myImage}
          alt="Image 1"
          onClick={handleClick}
        />
        <FormTitle
          {...register("title", {
            required: "제목을 입력해주세요.",
          })}
          placeholder="제목"
        />
        <span>{errors?.title?.message}</span>
      </FormTop>
      <FormHashTag {...register("hashtag")} placeholder="#해시태그" />
      <FormContentInput
        height={boxHeight}
        {...register("content", {
          required: "내용을 입력해주세요.",
        })}
        placeholder="내용"
      />
      <FormButton>완료</FormButton>
    </FormContents>
  );
};

export default FormDrag;
