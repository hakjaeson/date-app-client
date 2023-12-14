import styled from "@emotion/styled";

export const MainPageWrapper = styled.div`
  display: block;
  /* background-color: skyblue; */
  height: 100%;
  font-family: Pretendard-Regular;
  padding-bottom: 80px;
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
  line-height: 2rem;
  margin-right: auto;
  span {
    font-size: 1.2rem;
    font-weight: 700;
  }
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

// Content Slide
export const ContentSlide = styled.div`
  /* border: 1px solid blue; */
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
    width: 48px;
    height: 48px;
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

// Footer(Navigation) area
export const FooterBar = styled.div`
  position: fixed;
  width: 100%;
  padding: 10px;
  background-color: #ffdbab;
  height: 80px;
  bottom: 0;
  border: 0.25rem solid black;
  z-index: 10000;
`;
export const FooterList = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    text-align: center;
    border: 2px solid black;
    background-color: transparent;
    border-radius: 50%;
    img {
      width: 25px;
      height: 25px;
    }
  }
  li:nth-of-type(2) {
    background: #ffb5b6;
  }
`;
