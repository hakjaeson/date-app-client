import styled from "@emotion/styled";

export const ProfilePageWrap = styled.div`
  position: relative;
  display: block;
  background-color: #fefdfb;
  height: 100%;
  width: 100%;
`;
export const ProfileHeader = styled.header`
  position: relative;
  display: block;
  width: 100%;
  height: 78px;
  padding-top: 55px;
  span {
    background-color: #ffdbab;
    border: 2.5px solid #000;
    border-radius: 70px;
    padding: 8px 10px;
    cursor: pointer;
  }
`;
export const ProfileMain = styled.main`
  position: relative;
  display: block;
  justify-content: center;
  width: 100%;
  min-height: 500px;
  /* background-color: yellowgreen; */
`;
export const ProfileImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  .profile-img-couple {
    position: relative;
    width: 300px;
    height: 300px;
    img {
      border-radius: 70%;
    }
  }
  .profile-img-you {
    position: absolute;
    left: 200px;
    top: 200px;
    width: 100px;
    height: 100px;
    border-radius: 70%;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  }
`;
export const ProfileInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 37px;
  span {
    background-color: #d2ceff;
    border: 2.5px solid #000;
    border-radius: 10px;
    padding: 5px 20px;
    font-size: 1.2rem;
    justify-content: flex-end;
  }
  .profile-info {
    margin-top: 20px;
    hr {
      background-color: #ffdbab;
      height: 5px;
      border: none;
      width: 350px;
    }
    li {
      padding: 10px;
    }
  }
`;
export const ProfileFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  span {
    background-color: #d2ceff;
    border: 2.5px solid #000;
    border-radius: 20px;
    padding: 10px 150px;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
