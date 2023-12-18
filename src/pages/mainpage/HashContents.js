import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef } from "react";
import {
  ContentBody,
  ContentData,
  ContentHeader,
  ContentMoreView,
  ContentNameTitle,
  ContentSlide,
  ContentSlideImage,
  HashTag,
  HashTagBt,
  MainPageContent,
  WriteingDate,
} from "../../styles/diarystyles/mainpage/maincontentstyle";

const HashContents = ({ data }) => {
  const swiperRef = useRef();
  const { hash } = useParams();
  // console.log("maincontent :", data);

  // 데이터 emoji 값에 따라 이모지(기분) 그림 출력
  const EmojiFuc = emoji => {
    let result;
    if (emoji == 1) {
      result = "images/기쁨.jpeg";
    } else if (emoji == 2) {
      result = "images/슬픔.jpeg";
    } else if (emoji == 3) {
      result = "images/화남.jpeg";
    } else if (emoji == 4) {
      result = "images/놀람.jpeg";
    } else if (emoji == 5) {
      result = "images/사랑.jpeg";
    } else {
      console.log("not-found-emoji");
    }
    return result;
  };
  let hashNavigator = useNavigate();
  const handleHashClick = hash => {
    hashNavigator(`/hash/${hash}`);
  };
  return (
    <>
      <p>해시페이지 입니다.</p>
    </>
    // <div>
    //   {data.map(item => (
    //     <MainPageContent key={item.idx}>
    //       <ContentHeader>
    //         <div className="profile-image">
    //           <img src="https://picsum.photos/40/40" alt="" />
    //         </div>
    //         {/* Content title */}
    //         <ContentNameTitle>
    //           {/* User name */}
    //           <div>
    //             <span>{item.nm}</span>
    //           </div>

    //           <div>
    //             <span>{item.title}</span>
    //           </div>
    //         </ContentNameTitle>

    //         {/* Content Date */}
    //         <WriteingDate>
    //           <span>
    //             {item.date.split("-")[2].startsWith("0")
    //               ? item.date.split("-")[2].slice(1)
    //               : item.date.split("-")[2]}
    //             일
    //           </span>
    //         </WriteingDate>
    //       </ContentHeader>
    //       <ContentSlide>
    //         <Swiper
    //           slidesPerView={1}
    //           spaceBetween={0}
    //           onSwiper={swiper => {
    //             swiperRef.current = swiper;
    //           }}
    //           className="content-slide"
    //         >
    //           <SwiperSlide>
    //             <ContentSlideImage>
    //               <img
    //                 src="https://m.betanews.net/imagedb/orig/2021/0105/ab677e71.jpg"
    //                 alt=""
    //               ></img>
    //             </ContentSlideImage>
    //           </SwiperSlide>
    //           <SwiperSlide>
    //             <ContentSlideImage>
    //               <img src="https://picsum.photos/300/200" alt=""></img>
    //             </ContentSlideImage>
    //           </SwiperSlide>
    //         </Swiper>
    //       </ContentSlide>

    //       <ContentBody>
    //         <ContentData>
    //           <div>
    //             <img src={EmojiFuc(item.emoji)} alt="" />
    //           </div>
    //           <div>
    //             <span>{item.contents}</span>
    //           </div>
    //         </ContentData>
    //         <ContentMoreView>
    //           <Link to={`/readpage?id=${item.idx}`}>더보기</Link>
    //         </ContentMoreView>
    //         <HashTag>
    //           {/* 해시태그 출력 */}
    //           {item.hashContents.map((hash, index) => (
    //             <HashTagBt key={index} onClick={() => handleHashClick(hash)}>
    //               #{hash}
    //             </HashTagBt>
    //           ))}
    //         </HashTag>
    //       </ContentBody>
    //     </MainPageContent>
    //   ))}
    // </div>
  );
};

export default HashContents;
