import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 390px;
  height: 844px;
  font-family: Dovemayo_gothic;
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
  /* padding: 0 36px; */
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
  width: 340px;
  padding-top: 50px;
  font-family: Pretendard-Regular;
  letter-spacing: 0.5px;
`;

export const ProfileDetail = styled.div`
  position: relative;
  /* padding-top: 50px; */

  hr {
    background-color: #ffeeed;
    height: 5px;
    border: none;
  }
  li {
    padding: 15px 0px;
    font-size: 17px;
    color: #49454f;
  }
`;

export const ProfileBt = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 155px;
  width: 340px;
  padding-top: 50px;
  button {
    background-color: #ffc2c0;
    border: 2.5px none #000;
    border-radius: 30px;
    width: 340px;
    padding: 13px 0px;
    font-size: 20px;
    cursor: pointer;
    color: #fff;
  }
`;

export const ProfileModifyBt = styled.button`
  position: relative;
  letter-spacing: 2px;
`;

export const ProfileLogoutBt = styled.button`
  position: relative;
  letter-spacing: 2px;
`;
