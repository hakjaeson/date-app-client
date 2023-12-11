import styled from "@emotion/styled";

export const MainPageWrapper = styled.div`
  display: block;
  /* background-color: skyblue; */
  height: 100%;
`;

export const Anniversary = styled.div`
  /* float: right; */
  display: block;
  /* background: gold; */
`;

export const MainPageContent = styled.div`
  display: block;
  /* background: red; */
  border: 2px solid black;
  margin-top: 50px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 30px 30px 0px 0px;
`;
export const ContentHeader = styled.div`
  position: relative;
  display: flex;
  border-radius: 30px;
  background-color: #d2ceff;
  img {
    border-radius: 28px;
  }
`;

export const ContentNameTitle = styled.div`
  /* display: flex; */
`;
export const WriteingDate = styled.div`
  position: relative;
  right: 0;
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

export const SelctNotice = styled.div`
  text-align: center;
  background-color: ivory;
`;

// Content Slide
export const ContentSlide = styled.div`
  border: 1px solid blue;
`;
export const SlidePrevBt = styled.button``;
export const SlideNextBt = styled.button``;

export const ContentSlideImage = styled.div`
  border: 1px solid black;
  img {
    width: 100%;
  }
`;

export const ContentBody = styled.div`
  background-color: white;
  border-radius: 0 0 20px 20px;
`;
export const ContentData = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
  line-height: 1.5rem;
  // 줄 끊는거 필요함 ... 요거
  img {
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
export const ContentMoreView = styled.div``;
