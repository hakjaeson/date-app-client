import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
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
} from "../../styles/diarystyles/mainpage/mainpagestyle";

const MainContents = () => {
  const swiperRef = useRef();
  return (
    <div>
      <MainPageContent>
        <ContentHeader>
          <div className="profile-image">
            <img src="https://picsum.photos/40/40" alt="" />
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
              nextEl: ".slide-next-bt",
              prevEl: ".slide-prev-bt",
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
          {/* <SlidePrevBt
          className="slide-prev-bt"
          onClick={() => {
            swiperRef.current.slidePrev();
          }}
        >
          <FontAwesomeIcon icon={["fas", "coffee"]} />
        </SlidePrevBt>
        <SlideNextBt
          className="slide-next-bt"
          onClick={() => {
            swiperRef.current.slideNext();
          }}
        >다음</SlideNextBt> */}
        </ContentSlide>

        <ContentBody>
          <ContentData>
            <div>
              <img src="https://picsum.photos/40/40" alt="" />
            </div>
            <div>
              <span>
                지난여름 바닷가 너와 나 단둘이 파도에 취해서 노래하며 같은 꿈을
                꾸었지 다시 여기 바닷가 이제는 말하 고 싶어 네가 있었기에 내가
                더욱 빛나 별이 되었다고
              </span>
            </div>
          </ContentData>
          <ContentMoreView>
            <Link to="/read-page/${no}">더보기</Link>
          </ContentMoreView>
          {/* HashTag */}
          <HashTag>#부산 #해운대 #달콩이 #광안리</HashTag>
        </ContentBody>
      </MainPageContent>
      <MainPageContent>
        <ContentHeader>
          <div className="profile-image">
            <img src="https://picsum.photos/40/40" alt="" />
          </div>
          {/* Content title */}
          <ContentNameTitle>
            {/* User name */}
            <div>
              <span>달콩이</span>
            </div>

            <div>
              <span>3초만에 화해한 날</span>
            </div>
          </ContentNameTitle>

          {/* Content Date */}
          <WriteingDate>
            <span>5</span>
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
                <img src="https://picsum.photos/300/200" alt=""></img>
              </ContentSlideImage>
            </SwiperSlide>
            <SwiperSlide>
              <ContentSlideImage>
                <img src="https://picsum.photos/300/200" alt=""></img>
              </ContentSlideImage>
            </SwiperSlide>
          </Swiper>
          {/* <SlidePrevBt
          className="slide-prev-bt"
          onClick={() => {
            swiperRef.current.slidePrev();
          }}
        >
          <FontAwesomeIcon icon={["fas", "coffee"]} />
        </SlidePrevBt>
        <SlideNextBt
          className="slide-next-bt"
          onClick={() => {
            swiperRef.current.slideNext();
          }}
        >다음</SlideNextBt> */}
        </ContentSlide>

        <ContentBody>
          <ContentData>
            <div>
              <img src="https://picsum.photos/40/40" alt="" />
            </div>
            <div>
              <span>
                한적한 산골 마을에서는 아침 햇살이 천천히 일어나면서 마을을
                깨우고, 창 밖으로 퍼지는 조용한 새의 지저귐이 마을을 가득
                채운다. 새소리와 바람소리만이 가득한 이 작은 마을은 자연과
                어우러져 안락한 풍경을 만들어낸다. 마을 주변의 작은 숲 속에서는
                나뭇잎들이 바람에 흩날리면서 산뜻한 향기를 퍼뜨린다. 시간이 멈춘
                듯한 이곳에서는 강물 소리가 경치를 더욱 아름답게 만든다. 실버
                스트림처럼 흐르는 강물은 마을을 둘러싸며 고요한 평화를 선사한다.
                이 작은 마을은 도심의 소음과 바쁜 일상을 잊게 해주며, 순수하고
                자연스러운 삶의 아름다움을 느낄 수 있는 곳이다. 마을 사람들은
                서로를 알고 지지하며, 자연과 조화를 이루며 평화로운 삶을 산다.
              </span>
            </div>
          </ContentData>
          <ContentMoreView>
            <Link to="/read-page/${no}">더보기</Link>
          </ContentMoreView>
          {/* HashTag */}
          <HashTag>#부산 #해운대 #달콩이 #광안리</HashTag>
        </ContentBody>
      </MainPageContent>
    </div>
  );
};

export default MainContents;
