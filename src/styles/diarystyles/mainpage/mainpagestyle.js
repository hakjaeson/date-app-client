import styled from "@emotion/styled";

export const MainPageWrapper = styled.div`
  margin: 0 auto;
  width: 390px;
  min-height: 100vh;
  font-family: Pretendard-Regular;
  padding-bottom: 80px;
`;

export const Anniversary = styled.div`
  display: flex;
  /* margin-top: 20px; */
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
  background-color: #ffdbab;
  font-weight: 500;
  height: 80px;
  border: 2px solid black;
  font-size: 2rem;
  span {
  }
`;
export const SelectMonth = styled.div`
  display: flex;
  border-radius: 20px;
  float: right;
  border: 2px solid black;
  margin-right: 20px;
  background-color: #ffb5b6;
  padding: 10px 25px;
  font-weight: 700;
  height: 50px;
`;

// Footer(Navigation) area
export const FooterBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 390px;
  height: 80px;
  padding: 10px;
  background-color: #ffdbab;
  border: 0.25rem solid black;
  z-index: 100;
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
