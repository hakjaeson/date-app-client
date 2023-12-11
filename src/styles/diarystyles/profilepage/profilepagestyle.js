import styled from "@emotion/styled";

export const ProfilePageWrap = styled.div`
  display: block;
  background-color: #fefdfb;
  height: 100%;
`;
export const Header = styled.header`
  display: block;
  width: 100%;
  height: 78px;
  padding-top: 55px;
`;
export const Main = styled.main`
  display: block;
  justify-content: center;
  width: 100%;
  min-height: 500px;
  /* background-color: yellowgreen; */
`;
export const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  .profile-img-me {
    width: 300px;
    height: 300px;
    border-radius: 70%;
  }
  .profile-img-you {
    position: absolute;
    left: 250px;
    top: 280px;
    width: 100px;
    height: 100px;
    border-radius: 70%;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  }
`;
export const ProfileInfo = styled.div`
  background-color: yellowgreen;
  width: 100%;
  padding-top: 37px;
  ul span {
    background-color: #d2ceff;
    border: 2.5px solid #000;
    border-radius: 10px;
    padding: 5px 20px;
    font-size: 1.2rem;
  }
`;
