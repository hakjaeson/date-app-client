import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import FormDrag from "./FormDrag";
import {
  CreatePageFormTag,
  ImageButton,
  ImageContainer,
  ImageInput,
} from "../../styles/diarystyles/createpage/formstyle";
import { postCreatePage } from "../../api/create-page/createPageApi";

const CreatePageForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = data => {
    console.log(data);
    // postCreatePage(data);
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
      <FormDrag register={register} errors={errors} />
    </CreatePageFormTag>
  );
};

export default CreatePageForm;
