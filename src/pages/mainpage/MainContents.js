import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  ContentBody,
  ContentData,
  ContentHeader,
  ContentMoreView,
  ContentNameTitle,
  ContentSlide,
  ContentSlideImage,
  MainPageContent,
  SlideNextBt,
  SlidePrevBt,
  WriteingDate,
} from "../../styles/diarystyles/mainpage/mainpagestyle";

const MainContents = () => {
  const swiperRef = useRef();
  return (
    <MainPageContent>
      <ContentHeader>
        <div className="profile-image">
          <img src="https://picsum.photos/56/56" alt="" />
        </div>
        {/* Content title */}
        <ContentNameTitle>
          {/* User name */}
          <div>
            <span>알콩이</span>
          </div>

          <div>
            <span>부싼 바캉스</span>
          </div>
        </ContentNameTitle>

        {/* Content Date */}
        <WriteingDate>
          <span>7</span>
        </WriteingDate>
      </ContentHeader>
      <ContentSlide>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          modules={{ Navigation }}
          navigation={{
            nextEl: "live-slide-wrap .slide-next-bt",
            prevEl: "live-slide-wrap .slide-prev-bt",
          }}
          className="content-slide"
        >
          <SwiperSlide>
            <ContentSlideImage>
              <img src="https://picsum.photos/300/200" alt=""></img>
            </ContentSlideImage>
          </SwiperSlide>
          <SwiperSlide>
            <ContentSlideImage>
              <img src="https://picsum.photos/300/200" alt=""></img>
            </ContentSlideImage>
          </SwiperSlide>
        </Swiper>
        <SlidePrevBt
          className="slide-prev-bt"
          onClick={() => {
            swiperRef.current.slidePrev();
          }}
        >
          <span>이전</span>
        </SlidePrevBt>
        <SlideNextBt
          className="slide-next-bt"
          onClick={() => {
            swiperRef.current.slideNext();
          }}
        >
          다음
        </SlideNextBt>
      </ContentSlide>

      <ContentBody>
        <ContentData>
          <div>
            <img src="https://picsum.photos/56/56" alt="" />
          </div>
          <div>
            <span>
              지난여름 바닷가 너와 나 단둘이 파도에 취해서 노래하며 같은 꿈을
              꾸었지 다시 여기 바닷가 이제는 말하 고 싶어 네가 있었기에 내가
              더욱 빛나 별이 되었다고
            </span>
          </div>
          <ContentMoreView>
            <Link to="/read-page/${no}">더보기</Link>
          </ContentMoreView>
        </ContentData>
        <div className="hash-tag">#부산 #해운대 #달콩이 #광안리</div>
        <div></div>
      </ContentBody>
    </MainPageContent>
  );
};

export default MainContents;
