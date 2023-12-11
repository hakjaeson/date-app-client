import styled from "@emotion/styled";

export const MainPageWrapper = styled.div`
  display: block;
  /* background-color: skyblue; */
  height: 100%;
  font-family: Pretendard-Regular;
`;

export const Anniversary = styled.div`
  text-align: center;
  span {
    display: block;
    border-radius: 20px;
    float: right;
    border: 2px solid black;
    margin-right: 20px;
    background-color: #ffb5b6;
    padding: 10px 25px;
    font-weight: 700;
  }
`;

export const MainPageContent = styled.div`
  border: 2px solid black;
  margin-top: 70px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 30px;
`;
export const ContentHeader = styled.div`
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 30px 30px 0 0;
  background-color: #d2ceff;

  img {
    border: 1px solid black;
    margin-left: 10px;
    border-radius: 28px;
    margin-right: 10px;
  }
`;

export const ContentNameTitle = styled.div`
  line-height: 1.5rem;
  margin-right: auto;
`;
export const WriteingDate = styled.div`
  margin-right: 10px;
  position: relative;
  border: 1px solid black;
  width: 3rem;
  height: 3rem;
  padding: 5px;
  line-height: 1.5rem;
  border-radius: 50%;
  background-color: white;
  text-align: center;
  span {
    font-weight: 700;
  }
`;

export const FooterBar = styled.div`
  position: fixed;
  width: 90%;
  padding: 10px;
  background-color: green;
  height: 100px;
  bottom: 0;
`;
export const FooterList = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    img {
      border-radius: 25px;
    }
  }
`;

export const SelectMonth = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
  background-color: #ffdbab;
  font-weight: 500;
  height: 50px;
  border: 2px solid black;
  font-size: 2rem;
  span {
  }
`;

// Content Slide
export const ContentSlide = styled.div`
  /* border: 1px solid blue; */
`;
export const SlidePrevBt = styled.button`
  background: url(../../images/icon_arrow.svg) no-repeat center;
  transform: rotateY(180deg);
  position: absolute;
  left: 10%;
  top: 37.5%;
  z-index: 2;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  border: none;
`;
export const SlideNextBt = styled.button`
  background-color: transparent;
  position: absolute;
  right: -2.25%;
  top: 37.5%;
  z-index: 2;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
`;

export const ContentSlideImage = styled.div`
  border: 1px solid black;
  img {
    width: 100%;
  }
`;

export const ContentBody = styled.div`
  background-color: white;
  border-radius: 0 0 30px 30px;
`;
export const ContentData = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
  line-height: 1.5rem;
  // 줄 끊는거 필요함 ... 요거
  img {
    border: 1px solid black;
    border-radius: 28px;
    margin-right: 10px;
  }
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
export const ContentMoreView = styled.div`
  float: right;
  margin-right: 1rem;
  margin-top: -1rem;
  color: #c9c9c9;
`;
export const HashTag = styled.div`
  margin-left: 2rem;
  padding-bottom: 5px;
`;
