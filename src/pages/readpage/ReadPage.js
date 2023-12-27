import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

import moment from "moment/moment";
import {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "../../DB/firebase";
import { deleteObject } from "firebase/storage";

import PrevHeader from "../../components/common/PrevHeader";
import {
  getReadPage,
  deleteReadPage,
  updateReadPage,
} from "../../api/read-page/readPageApi";
import {
  Device,
  PageMain,
  ReadBottom,
  ReadContent,
  ReadContentbox,
  ReadDate,
  ReadEmoji,
  ReadFooter,
  ReadHashTag,
  ReadImage,
  ReadMid,
  ReadPageButton,
  ReadTitle,
  ReadTop,
  Wrapper,
} from "../../styles/diarystyles/readpage/readpagestyle";
import ReadForm from "../../components/readpage/ReadForm";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";

const FormImgButton = styled.button`
  position: absolute;
  top: 10px;
  right: 100px;
  width: 100px;
  height: 40px;
  font-size: 1.7rem;
  background-color: #ffc2c0;
  color: #ffeeed;
  border: none;
  border-radius: 16px;
`;

const ReadPage = () => {
  const EMOJI = ["joy", "sadness", "angry", "surprise", "love"];
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const diaryId = searchParams.get("id");
  const navigate = useNavigate();
  const swiperRef = useRef();
  const [data, setData] = useState(null);
  const [emojiNum, setEmojiNum] = useState();
  const [imgUrl, setImgUrl] = useState([]);
  const [selectFile, setSelectFile] = useState([]);
  const [updateEmojiNum, setUpdateEmojiNum] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isOpen, setIsOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [edit, setEdit] = useState(false);

  const path = "images/";

  useEffect(() => {
    getReadPage(setData, diaryId, setEmojiNum);
  }, []);

  // 삭제버튼시 데이터 삭제 (DB, 파이어베이스)
  const ClickDelete = async () => {
    const check = confirm("정말로 삭제하시겠습니까?");

    if (check) {
      deleteReadPage(diaryId);
      try {
        for (let i = 0; i < data.pics.length; i++) {
          const picName = data.pics[i];
          const desertRef = ref(storage, picName);
          await deleteObject(desertRef);
          console.log("삭제성공");
        }
      } catch (error) {
        console.log(error);
      }
      //서버 업데이트 시간 주기
      setTimeout(() => {
        navigate("/main");
      }, 1000);
    }
  };
  // 수정 클릭시 데이터 삭제 및 재업로드(DB, 파이어베이스)
  const ClickUpdateDelete = async () => {
    try {
      for (let i = 0; i < data.pics.length; i++) {
        const picName = data.pics[i];
        const desertRef = ref(storage, picName);
        await deleteObject(desertRef);
        console.log("삭제성공");
      }
      upload();
    } catch (error) {
      console.log(error);
    }
  };
  const upload = async () => {
    if (selectFile.length == 0) {
      // 이미지 선택하지 않다면 안내창 출력
      alert("이미지를 선택해주세요.");
      return;
    }
    // 중복되지 않는 파일명을 생성한다.

    setSaved(true);
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

  const onValid = data => {
    // console.log(data, diaryId, updateEmojiNum);

    if (saved === false) {
      alert("이미지 저장을 눌러주세요.");
    } else {
      //해쉬태그 구분
      const hashTag = data.hashtag.split("#").filter(Boolean);
      // 폼태그 전송
      updateReadPage(data, diaryId, imgUrl, updateEmojiNum, hashTag);
      //서버 업데이트 시간 주기
      setTimeout(() => {
        navigate("/main");
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

  const ClickEdit = () => {
    setEdit(!edit);
  };
  const imgSave = e => {
    e.preventDefault();
    if (saved) {
      alert("이미지 저장이 되어있습니다.");
      return;
    } else {
      ClickUpdateDelete();
    }
  };

  return (
    <Wrapper>
      <Device>
        <PrevHeader edit={edit} setEdit={setEdit} />
        {edit ? (
          <ReadForm
            data={data}
            diaryId={diaryId}
            isOpen={isOpen}
            EMOJI={EMOJI}
            setUpdateEmojiNum={setUpdateEmojiNum}
            setSaved={setSaved}
            setIsOpen={setIsOpen}
            register={register}
            selectFile={selectFile}
            setSelectFile={setSelectFile}
          />
        ) : data ? (
          <PageMain>
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              modules={[Pagination]}
              onSwiper={swiper => {
                swiperRef.current = swiper;
              }}
              pagination={true}
              className="content-slide"
            >
              {data.pics.map((pics, index) => (
                <SwiperSlide key={index}>
                  <ReadImage src={pics} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
            <ReadContentbox>
              <ReadContent>
                <ReadTop>
                  <ReadEmoji
                    type="image"
                    src={`${process.env.PUBLIC_URL}/images/${EMOJI[emojiNum]}.png`}
                    alt={EMOJI[emojiNum]}
                  />
                  <ReadTitle>{data?.title}</ReadTitle>
                </ReadTop>
                <ReadDate>{data?.createdAt}</ReadDate>
                <ReadMid>{data?.contents}</ReadMid>
                <ReadBottom>
                  {data?.hashContents.map((item, idx) => (
                    <ReadHashTag key={idx}>{`#${item}`}</ReadHashTag>
                  ))}
                </ReadBottom>
              </ReadContent>
            </ReadContentbox>
          </PageMain>
        ) : (
          <h1>데이터받아오는중</h1>
        )}
        <ReadFooter>
          {edit ? (
            <>
              <FormImgButton onClick={imgSave}>이미지 저장</FormImgButton>
              <ReadPageButton onClick={handleSubmit(onValid, onInValid)}>
                완료
              </ReadPageButton>
            </>
          ) : (
            <>
              <ReadPageButton onClick={ClickEdit}>수정</ReadPageButton>
              <ReadPageButton onClick={ClickDelete}>삭제</ReadPageButton>
            </>
          )}
        </ReadFooter>
      </Device>
    </Wrapper>
  );
};

export default ReadPage;
