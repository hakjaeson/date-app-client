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

import moment from "moment/moment";
import {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "../../DB/firebase";

const CreatePageForm = () => {
  const [selectFile, setSelectFile] = useState(null);

  const [fbImgUrl, setFbImgUrl] = useState("");
  const path = "images/";

  const initPreview = "";
  const [previewImg, setPreviewImg] = useState(initPreview);

  const handleChangeFile = e => {
    // 파일을 변수에 담아서 코드 를 수월하게 보려고
    const file = e.target.files[0];
    if (file) {
      // 나의 웹브라우저에서 URL 을 임시로 생성
      const tempUrl = URL.createObjectURL(file);
      // 미리보기 state
      setPreviewImg(tempUrl);
      // 파일 보관
      setSelectFile(file);
    }
  };

  const upload = () => {
    if (!selectFile) {
      // 이미지 선택하지 않다면 안내창 출력
      alert("이미지를 선택해주세요.");
      return;
    }
    // 중복되지 않는 파일명을 생성한다.
    const tempName = moment().format("YYYYMMDDhhmmss");
    const fileName = `${path}${tempName}_${selectFile.name}`;
    // 실제 업로드는 복잡하므로 함수를 만들어서 파일이름을 전달한다.
    uploadImage(fileName);
  };
  // 실제 이미지 업로드를 실행 함수
  const uploadImage = async _fileName => {
    try {
      const imageRef = ref(storage, _fileName);
      const fbRes = await uploadBytes(imageRef, selectFile);
      console.log("업로드 성공", fbRes);

      // 백엔드에서 이미지 주소를 주세요. 요청
      // 파이어베이스 이미지 url 을 파악
      const url = await getDownloadURL(fbRes.ref);
      setFbImgUrl(url);
    } catch (error) {
      console.log(error);
    }
  };

  const EMOJI = ["joy", "sadness", "angry", "surprise", "love"];
  const navigate = useNavigate();
  const [emojiName, setEmojiName] = useState("joy");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = data => {
    upload();
    //이모지 인덱스값 찾기
    const emojiIdx = EMOJI.indexOf(emojiName);
    //해쉬태그 구분
    const hashTag = data.hashtag.split("#").filter(Boolean);
    // 폼태그 전송
    postCreatePage(data, emojiIdx, hashTag);
    //서버 업데이트 시간 주기
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  const onInValid = data => {
    alert(`${data?.title?.message}\n${data?.content?.message}`);
  };
  return (
    <CreatePageFormTag onSubmit={handleSubmit(onValid, onInValid)}>
      <ImageContainer>
        <ImageButton>
          <ImageInput
            type="file"
            {...register("image")}
            accept="image/*"
            onChange={handleChangeFile}
          />
          <FontAwesomeIcon
            icon={faPlus}
            style={{ width: 30, height: 30, color: "#fff" }}
          />
          사진을 추가 해주세요.
        </ImageButton>
      </ImageContainer>
      <button
        onClick={e => {
          e.preventDefault();
          upload();
        }}
      >
        확정
      </button>
      <FormDrag
        register={register}
        emojiName={emojiName}
        setEmojiName={setEmojiName}
      />
    </CreatePageFormTag>
  );
};

export default CreatePageForm;
