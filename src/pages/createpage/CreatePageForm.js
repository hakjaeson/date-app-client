import styled from "@emotion/styled";
import React from "react";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";

const CreatePageFormTag = styled.form`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
`;

const ImageInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 50;
  left: 50;
  width: 80%;
  height: 70%;
  border-radius: 20px;
`;

const ImageButton = styled.div`
  background-color: rgba(120, 120, 120, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 70%;
  color: grey;

  border: 1px solid #ccc;
  border-radius: 20px;
`;

const FormContents = styled.div`
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50%;
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
  border: none;
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

const CreatePageForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = data => {
    console.log(data);
  };
  return (
    <CreatePageFormTag>
      <ImageContainer>
        <ImageButton>
          <ImageInput type="file" />
          <FontAwesomeIcon
            icon={faPlus}
            style={{ width: 30, height: 30, color: "#fff" }}
          />
          사진을 추가 해주세요.
        </ImageButton>
      </ImageContainer>
      <FormContents onSubmit={handleSubmit(onValid)}>
        <FormButton>완료</FormButton>
        <FormTop>
          <FormEmoji {...register("emoji")} placeholder="기분" />
          <FormTitle
            {...register("title", {
              required: "제목을 입력해주세요.",
              minLength: 20,
            })}
            placeholder="제목"
          />
          <span>{errors?.title?.message}</span>
        </FormTop>
        <FormHashTag {...register("hashtag")} placeholder="#해시태그" />
        <FormContentInput
          {...register("content", {
            required: "내용을 입력해주세요.",
            minLength: 200,
          })}
          placeholder="내용"
        />
      </FormContents>
    </CreatePageFormTag>
  );
};

export default CreatePageForm;
