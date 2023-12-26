import styled from "@emotion/styled";

export const MainPageContent = styled.div`
  border: 0.5px solid #e9e9e9;
  margin: 8rem 1rem 2rem 1rem;
  /* margin-top: 80px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px; */
  border-radius: 30px;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
`;
export const ContentHeader = styled.div`
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 30px 30px 0 0;
  background-color: #ffeeed;

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
    font-family: "SOYOMapleBoldTTF";
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
export const WriteingDate = styled.div`
  font-family: "SOYOMapleBoldTTF";
  margin-right: 10px;
  position: relative;
  /* border: 1px solid black; */
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
export const ContentSlide = styled.div``;

export const ContentSlideImage = styled.div`
  /* border: 1px solid black; */
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
  img {
    width: 48px;
    height: 48px;
    border: 1px solid black;
    border-radius: 28px;
    margin-right: 10px;
  }
  span {
    font-family: "SeoulNamsanM";
    font-size: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
export const ContentMoreView = styled.div`
  font-family: "SeoulNamsanM";
  float: right;
  margin-right: 1rem;
  margin-top: -1rem;
  color: #c9c9c9;
`;

// hashTag CSS
export const HashTag = styled.div`
  font-family: "SeoulHangangM";
  margin-left: 2rem;
  padding-bottom: 5px;
`;

export const HashTagBt = styled.button`
  margin-right: 0.5rem;
  background-color: transparent;
  border: none;
  font-size: 1.3rem;
`;
