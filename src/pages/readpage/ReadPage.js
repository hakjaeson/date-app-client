import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

import { storage, ref } from "../../DB/firebase";
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
  UlEmoji,
  Wrapper,
} from "../../styles/diarystyles/readpage/readpagestyle";
import ReadForm from "../../components/readpage/ReadForm";
import { useForm } from "react-hook-form";

const ReadPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const diaryId = searchParams.get("id");
  const navigate = useNavigate();
  const EMOJI = ["joy", "sadness", "angry", "surprise", "love"];
  const [isOpen, setIsOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [emojiNum, setEmojiNum] = useState();
  const [updateEmojiNum, setUpdateEmojiNum] = useState();
  const [data, setData] = useState(null);
  const [edit, setEdit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const swiperRef = useRef();

  useEffect(() => {
    getReadPage(setData, diaryId, setEmojiNum);
  }, []);

  const onValid = data => {
    // console.log(data, diaryId, updateEmojiNum);

    if (saved === false) {
      alert("이미지 저장을 눌러주세요.");
    } else {
      //해쉬태그 구분
      const hashTag = data.hashtag.split("#").filter(Boolean);
      // 폼태그 전송
      updateReadPage(data, diaryId, updateEmojiNum, hashTag);

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

  const ClickEdit = () => {
    setEdit(!edit);
  };

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
        navigate("/");
      }, 1000);
    }
  };

  return (
    <Wrapper>
      <Device>
        <PrevHeader />
        {edit ? (
          <ReadForm
            data={data}
            isOpen={isOpen}
            EMOJI={EMOJI}
            setUpdateEmojiNum={setUpdateEmojiNum}
            setSaved={setSaved}
            setIsOpen={setIsOpen}
            register={register}
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
                    src={`${process.env.PUBLIC_URL}/images/${EMOJI[emojiNum]}.jpeg`}
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
            <ReadPageButton onClick={handleSubmit(onValid, onInValid)}>
              완료
            </ReadPageButton>
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
