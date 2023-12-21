import React, { useState } from "react";
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
import ImageUpload from "../../components/createpage/ImageUpload";

import moment from "moment/moment";
import {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "../../DB/firebase";
import { deleteObject } from "firebase/storage";

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
  const [imgList, setImgList] = useState([]);
  const [imgUrlList, setImgUrlList] = useState([]);

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

      // postCreatePage(data, imgUrl, emojiIdx, hashTag);

      //서버 업데이트 시간 주기
      setTimeout(() => {
        // navigate("/");
      }, 1000);
    }
  };
  const onInValid = data => {
    alert(`${data?.title?.message}\n${data?.content?.message}`);
  };

  const upload = async () => {
    if (!selectFile) {
      // 이미지 선택하지 않다면 안내창 출력
      alert("이미지를 선택해주세요.");
      return;
    }
    console.log(selectFile);
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
        setImgUrl([url, ...imgUrl]);
        console.log(imgUrl);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // 4. 삭제하기
  const deleteImg = async idx => {
    // 누구를 지울지 파이어베이스의 fullPath 를 알아야 합니다.
    // 다행이도 보관해 둠.
    try {
      const who = imgList[idx];
      const desertRef = ref(storage, who);
      await deleteObject(desertRef);
      console.log("삭제성공");
      // 현재 삭제된 이미지를 목록에서 빼라(화면 갱신하려고)
      const tempList = imgList.filter((item, index) => index != idx);
      setImgList(tempList);
      // 현재 삭제된 이미지를 목록에서 빼라(화면 갱신하려고)
      const tempUrlList = imgUrlList.filter((item, index) => index != idx);
      setImgUrlList(tempUrlList);
    } catch (error) {
      console.log(error);
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
