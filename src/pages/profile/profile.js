import React from "react";
import {
  Header,
  Main,
  ProfileImg,
  ProfileInfo,
  ProfilePageWrap,
} from "../../styles/diarystyles/profilepage/profilepagestyle";

const Profile = () => {
  return (
    <ProfilePageWrap>
      <Header>
        <button>
          <a href="">상단 바</a>
        </button>
      </Header>
      <Main>
        <ProfileImg>
          <img className="profile-img-me" src="https://picsum.photos/300/300" />
          <img
            className="profile-img-you"
            src="https://picsum.photos/100/100"
          />
        </ProfileImg>
        <ProfileInfo>
          <ul>
            <span>PROFILE</span>
            <li>이름</li>
            <li>생년월일</li>
            <li>상대와 처음 만난 날</li>
            <button>
              <a href="#">프로필 수정</a>
            </button>
          </ul>
        </ProfileInfo>
      </Main>
    </ProfilePageWrap>
  );
};

export default Profile;
