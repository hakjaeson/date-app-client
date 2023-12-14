import styled from "@emotion/styled";

export const ProfileWrap = styled.div`
  position: relative;
`;

export const ProfileHeader = styled.header`
  position: relative;
  display: block;
  margin-top: 50px;
  margin-left: 10px;
`;

export const ProfileMain = styled.main`
  position: relative;
  display: block;
  background-color: yellowgreen;
`;

export const ProfileImg = styled.div`
  position: relative;
  margin-top: 10px;
  display: flex;
  justify-content: center;

  .profile-img {
    position: relative;
    width: 300px;
    height: 300px;
    img {
      border-radius: 70%;
    }
  }
  .profile-img-partner {
    position: absolute;
    left: 200px;
    top: 200px;
    width: 100px;
    height: 100px;
    img {
      border-radius: 70%;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
    }
  }
`;

export const ProfileInfo = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 40px;
`;

export const ProfileTitle = styled.span`
  background-color: #d2ceff;
  border: 2.5px solid #000;
  border-radius: 10px;
  padding: 5px 20px;
  margin-left: auto;
  font-size: 1.2rem;
`;

export const ProfileDetail = styled.ul`
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
`;

export const ProfileModifyBt = styled.div`
  position: relative;
  padding-top: 100px;
  button {
    background-color: #d2ceff;
    border: 2.5px solid #000;
    border-radius: 40px;
    padding: 20px 150px;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
