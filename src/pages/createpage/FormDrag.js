import styled from "@emotion/styled";
import React, { useState } from "react";

const FormContents = styled.div`
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: ${props => (props.height ? props.height : "450px")};
  overflow: auto;
  gap: 10px;

  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  border-radius: 50px 50px 0 0;
`;

const FormButton = styled.button`
  position: absolute;
  top: 8%;
  right: 10%;
  width: 15%;
  height: 8%;
  background-color: #fff;

  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  border-radius: 10px;
`;

const FormTop = styled.div`
  margin-top: 20%;
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
  text-align: center;
`;

const FormTitle = styled.input`
  width: 70%;
  height: 20px;

  outline: none;
`;

const FormHashTag = styled.input`
  width: 60%;
  height: 20px;
  border: none;
  outline: none;
`;

const FormContentInput = styled.input`
  width: 90%;
  height: 100%;

  border: none;
  outline: none;
`;
const FormDrag = ({ register, errors }) => {
  const [height, setHeight] = useState("50%");

  return (
    <FormContents height={height}>
      <FormButton type="submit">완료</FormButton>
      <FormTop>
        <FormEmoji {...register("emoji")} placeholder="기분" />
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
        {...register("content", {
          required: "내용을 입력해주세요.",
        })}
        placeholder="내용"
      />
    </FormContents>
  );
};

export default FormDrag;
