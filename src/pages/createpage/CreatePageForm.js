import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormDrag from "./FormDrag";
import {
  CreatePageFormTag,
  ImageContainer,
} from "../../styles/diarystyles/createpage/formstyle";
import { postCreatePage } from "../../api/create-page/createPageApi";
import ImageUpload from "../../components/createpage/ImageUpload";

import moment from "moment/moment";
import {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "../../DB/firebase";

const CreatePageForm = () => {
  const EMOJI = ["joy", "sadness", "angry", "surprise", "love"];
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState([]);
  const [emojiName, setEmojiName] = useState("joy");
  const [saved, setSaved] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectFile, setSelectFile] = useState([]);

  const path = "images/";

  const onValid = data => {
    if (saved === false) {
      alert("이미지 저장을 눌러주세요.");
    } else {
      //이모지 인덱스값 찾기
      const emojiIdx = EMOJI.indexOf(emojiName);
      //해쉬태그 구분
      const hashTag = data.hashtag.split("#").filter(Boolean);
      // 폼태그 전송
      console.log(data, imgUrl, emojiIdx, hashTag);

      postCreatePage(data, imgUrl, emojiIdx, hashTag);

      //서버 업데이트 시간 주기
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };
  const onInValid = data => {
    let title = "";
    let content = "";
    let hashTag = "";
    if (data?.title?.message !== undefined) {
      title = data?.title?.message;
    }
    if (data?.content?.message !== undefined) {
      content = data?.content?.message;
    }
    if (data?.hashtag?.message !== undefined) {
      hashTag = data?.hashtag?.message;
    }
    alert(`${title}\n${content}\n${hashTag}`);
  };

  const upload = async () => {
    if (selectFile.length == 0) {
      // 이미지 선택하지 않다면 안내창 출력
      alert("이미지를 선택해주세요.");
      return;
    }
    // 중복되지 않는 파일명을 생성한다.

    for (let i = 0; i < selectFile.length; i++) {
      const tempName = moment().format("YYYYMMDDhhmmss");
      const fileName = `${path}${tempName}_${selectFile[i].name}`;
      try {
        const imageRef = ref(storage, fileName);
        const fbRes = await uploadBytes(imageRef, selectFile[i]);
        console.log("업로드 성공", fbRes);

        // 백엔드에서 이미지 주소를 주세요. 요청
        // 파이어베이스 이미지 url 을 파악
        const url = await getDownloadURL(fbRes.ref);
        setImgUrl(imgUrl => {
          const updatedImgUrl = [url, ...imgUrl];
          return updatedImgUrl;
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const imgSave = e => {
    e.preventDefault();
    upload();
    setSaved(true);
  };
  return (
    <CreatePageFormTag onSubmit={handleSubmit(onValid, onInValid)}>
      <ImageContainer>
        <ImageUpload selectFile={selectFile} setSelectFile={setSelectFile} />
      </ImageContainer>
      <FormDrag
        register={register}
        emojiName={emojiName}
        setEmojiName={setEmojiName}
        imgSave={imgSave}
      />
    </CreatePageFormTag>
  );
};

export default CreatePageForm;
