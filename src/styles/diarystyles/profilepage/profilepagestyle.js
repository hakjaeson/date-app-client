import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 390px;
  height: 844px;
  font-family: Pretendard-Regular;
`;

export const ProfileContent = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProfileMain = styled.main`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 23px;
  width: 100%;
`;

export const ProfileVisual = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

export const ProfilePic = styled.img`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 70%;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
`;

export const ProfilePicPartner = styled.div`
  position: absolute;
  left: 200px;
  top: 200px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 70%;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const ProfileInfo = styled.div`
  position: relative;
  width: 100%;
  padding-top: 37px;
`;

export const ProfileDetail = styled.div`
  position: relative;
  hr {
    background-color: #ffdbab;
    height: 5px;
    border: none;
  }
  li {
    padding: 16px 0px;
    font-size: 17px;
    color: #49454f;
  }
`;

export const ProfileModifyBt = styled.div`
  position: relative;
  padding-top: 58px;
  button {
    background-color: #d2ceff;
    border: 2.5px none #000;
    border-radius: 30px;
    padding: 18px 125px;
    font-size: 20px;
    white-space: nowrap;
    cursor: pointer;
    color: #fff;
  }
`;
