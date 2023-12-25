import styled from "@emotion/styled";

export const MainPageWrapper = styled.div`
  font-family: "Pretendard-Regular";
  margin: 0 auto;
  width: 390px;
  min-height: 100vh;
  padding-bottom: 80px;
`;

export const Anniversary = styled.div`
  background-color: #d2ceff;
  margin-bottom: 15px;
  height: 65px;
`;
export const MainPageLogoWrapper = styled.div`
  padding-top: 1rem;
  text-align: center;
`;
export const StartAtWrapper = styled.div`
  font-family: "OTEnjoystoriesBA";
  position: absolute;
  right: 3rem;
  top: 4rem;
  margin-left: auto;
  font-size: 2rem;
  color: white;
`;

export const MainPageLogo = styled.img`
  width: 5rem;
  height: 5rem;
`;
export const SelectMonth = styled.div`
  font-family: "LeeSeoyun";
  display: flex;
  border-radius: 20px;
  float: right;
  margin-right: 20px;
  background-color: #ffb5b6;
  padding: 10px;
  font-weight: 700;
  height: 50px;
`;

// Footer(Navigation) area
export const FooterBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 390px;
  height: 65px;
  padding: 10px;
  background-color: #d2ceff;
  border: 0.1rem solid black;
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
