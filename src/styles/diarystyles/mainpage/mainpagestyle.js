import styled from "@emotion/styled";

export const MainPageWrapper = styled.div`
  font-family: "Dovemayo_gothic";
  margin: 0 auto;
  width: 390px;
  min-height: 100vh;
  padding-bottom: 80px;
`;

export const Anniversary = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffc2c0;
  margin-bottom: 1.5rem;

  height: 65px;
  gap: 1rem;
`;
export const MainPageLogoWrapper = styled.div``;
export const MainPageLogo = styled.img`
  width: 3rem;
  height: 3rem;
`;
export const StartAtWrapper = styled.div`
  span {
    color: white;
    font-size: 2.5rem;
  }
`;

export const SelectMonth = styled.div`
  /* font-family: "LeeSeoyun"; */
  display: flex;
  border-radius: 20px;
  float: right;
  margin-right: 20px;
  background-color: #ffc2c0;
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
  background-color: #ffc2c0;

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
    /* border: 2px solid black; */
    background-color: white;
    border-radius: 50%;
  }
`;
