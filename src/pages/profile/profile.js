import React from "react";
import {
  ProfileImg,
  ProfileInfo,
  ProfilePageWrap,
  ProfileFooter,
  ProfileHeader,
  ProfileMain,
} from "../../styles/diarystyles/profilepage/profilepagestyle";

const Profile = () => {
  return (
    <ProfilePageWrap>
      <ProfileHeader>
        <span>
          <a href="">
            <img src={`${process.env.PUBLIC_URL}/images/icon_arrow.svg`} />
          </a>
        </span>
      </ProfileHeader>
      <ProfileMain>
        <ProfileImg>
          <div className="profile-img-couple">
            <img src="https://picsum.photos/300/300" />
            <div className="profile-img-you">
              <img src="https://picsum.photos/100/100" />
            </div>
          </div>
        </ProfileImg>
        <ProfileInfo>
          <div>
            <span>PROFILE</span>
            <ul className="profile-info">
              <hr />
              <li>이름 : 국연수</li>
              <hr />
              <li>생년월일 : 2000-02-14</li>
              <hr />
              <li>상대와 처음 만난 날 : 2020-05.17</li>
              <hr />
            </ul>
          </div>
        </ProfileInfo>
        <ProfileFooter>
          <span>
            <a href="#">프로필 수정</a>
          </span>
        </ProfileFooter>
      </ProfileMain>
    </ProfilePageWrap>
  );
};

export default Profile;
