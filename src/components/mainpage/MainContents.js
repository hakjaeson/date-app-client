import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ContentBody,
  ContentData,
  ContentHeader,
  ContentMoreView,
  ContentNameTitle,
  ContentSlide,
  ContentSlideImage,
  HashTag,
  MainPageContent,
  WriteingDate,
} from "../../styles/diarystyles/mainpage/maincontentstyle";

const MainContents = ({ data }) => {
  const swiperRef = useRef();

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

  // hashTag에 따른 필터링
  const [hashFilter, setHashFilter] = useState("");
  const handleHashClick = hash => {
    setHashFilter(hash);
  };
  const filterData = hashFilter
    ? data.hashFilter(item => item.content.include(hashFilter))
    : data;
  console.log(filterData);
  const hashContents = data.hashContent;
  console.log([hashContents]);
  // 날짜에 따른 필터링
  return (
    <div>
      {data.map(item => (
        <MainPageContent key={item.idx}>
          <ContentHeader>
            <div className="profile-image">
              <img src="https://picsum.photos/40/40" alt="" />
            </div>
            {/* Content title */}
            <ContentNameTitle>
              {/* User name */}
              <div>
                <span>{item.nm}</span>
              </div>

              <div>
                <span>{item.title}</span>
              </div>
            </ContentNameTitle>

            {/* Content Date */}
            <WriteingDate>
              <span>
                {item.date.split("-")[2].startsWith("0")
                  ? item.date.split("-")[2].slice(1)
                  : item.date.split("-")[2]}
              </span>
            </WriteingDate>
          </ContentHeader>
          <ContentSlide>
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              onSwiper={swiper => {
                swiperRef.current = swiper;
              }}
              className="content-slide"
            >
              <SwiperSlide>
                <ContentSlideImage>
                  <img
                    src="https://m.betanews.net/imagedb/orig/2021/0105/ab677e71.jpg"
                    alt=""
                  ></img>
                </ContentSlideImage>
              </SwiperSlide>
              <SwiperSlide>
                <ContentSlideImage>
                  <img src="https://picsum.photos/300/200" alt=""></img>
                </ContentSlideImage>
              </SwiperSlide>
            </Swiper>
          </ContentSlide>

          <ContentBody>
            <ContentData>
              <div>
                <img src={EmojiFuc(item.emoji)} alt="" />
              </div>
              <div>
                <span>{item.contents}</span>
              </div>
            </ContentData>
            <ContentMoreView>
              <Link to={`/readpage?id=${item.idx}`}>더보기</Link>
            </ContentMoreView>
            <HashTag>
              {/* {item.mainContents.map((hash, index) => (
                <a
                  key={index}
                  href={`#${hash}`}
                  onClick={() => handleHashClick(hash)}
                >
                  #{hash}{" "}
                </a>
              ))} */}
            </HashTag>
          </ContentBody>
        </MainPageContent>
      ))}
    </div>
  );
};

export default MainContents;
