import styled from "@emotion/styled";

export const ProfileWrap = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
`;

export const ProfileHeader = styled.header`
  position: relative;
  display: block;
  margin-top: 55px;
  margin-left: 23px;
`;

export const ProfileMain = styled.main`
  position: relative;
  display: block;
  /* background-color: yellowgreen; */
`;

export const ProfileImg = styled.div`
  position: relative;
  margin-top: 9px;
  display: flex;
  justify-content: center;

  .profile-img {
    position: relative;
    img {
      border-radius: 70%;
      width: 300px;
      height: 300px;
      object-fit: cover;
      object-position: center;
      overflow: hidden;
    }
  }
  .profile-img-partner {
    position: absolute;
    left: 200px;
    top: 200px;

    img {
      border-radius: 70%;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
      width: 100px;
      height: 100px;
      object-fit: cover;
      object-position: center;
      overflow: hidden;
    }
  }
`;

export const ProfileInfo = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  /* justify-content: center; */
  padding-top: 40px;
  label {
    font-size: 17px;
  }
`;

export const ProfileTitle = styled.span`
  background-color: #d2ceff;
  border: 2.5px solid #000;
  border-radius: 16px;
  padding: 11px 27px;
  margin-left: auto;
  font-size: 17px;
`;

export const ProfileDetail = styled.ul`
  margin-top: 27px;
  background-color: hotpink;
  hr {
    background-color: #ffdbab;
    height: 5px;
    border: none;
    width: 366px;
  }
  li {
    padding: 16px 0px;
    font-size: 17px;
  }
`;

export const ProfileModifyBt = styled.div`
  position: relative;
  padding-top: 58px;
  button {
    background-color: #d2ceff;
    border: 2.5px solid #000;
    border-radius: 30px;
    padding: 20px 134px;
    font-size: 20px;
    white-space: nowrap;
    cursor: pointer;
  }
`;
