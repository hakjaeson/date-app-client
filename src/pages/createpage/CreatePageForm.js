import React, { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormDrag from "./FormDrag";
import {
  CreatePageFormTag,
  ImageButton,
  ImageContainer,
  ImageInput,
} from "../../styles/diarystyles/createpage/formstyle";
import { postCreatePage } from "../../api/create-page/createPageApi";

const CreatePageForm = () => {
  const EMOJI = ["joy", "sadness", "angry", "surprise", "love"];
  const navigate = useNavigate();
  const [emojiName, setEmojiName] = useState("joy");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = data => {
    //이모지 인덱스값 찾기
    const emojiIdx = EMOJI.indexOf(emojiName);
    //해쉬태그 구분
    const hashTag = data.hashtag.split("#").filter(Boolean);
    // 폼태그 전송
    postCreatePage(data, emojiIdx, hashTag);
    navigate("/");
  };
  const onInValid = data => {
    alert(`${data?.title?.message}\n${data?.content?.message}`);
  };
  return (
    <CreatePageFormTag onSubmit={handleSubmit(onValid, onInValid)}>
      <ImageContainer>
        <ImageButton>
          <ImageInput type="file" {...register("image")} accept="image/*" />
          <FontAwesomeIcon
            icon={faPlus}
            style={{ width: 30, height: 30, color: "#fff" }}
          />
          사진을 추가 해주세요.
        </ImageButton>
      </ImageContainer>
      <FormDrag
        register={register}
        emojiName={emojiName}
        setEmojiName={setEmojiName}
      />
    </CreatePageFormTag>
  );
};

export default CreatePageForm;
