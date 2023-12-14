import React, { useState } from "react";
import {
  ProfileImg,
  ProfileInfo,
  ProfileHeader,
  ProfileMain,
  ProfileWrap,
  ProfileTitle,
  ProfileDetail,
  ProfileModifyBt,
} from "../../styles/diarystyles/profilepage/profilepagestyle";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [profileList, setProfileList] = useState([]);

  const handleClickGetProfile = () => {
    // getProfile(setProfileList);
  };

  return (
    <ProfileWrap>
      <ProfileHeader>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/images/bt_back.svg`} />
        </Link>
      </ProfileHeader>

      <ProfileMain>
        <ProfileImg>
          <div className="profile-img">
            <img src="https://picsum.photos/300/300" />
            <div className="profile-img-partner">
              <img src="https://picsum.photos/100/100" />
            </div>
          </div>
        </ProfileImg>

        <ProfileInfo>
          <ProfileTitle>PROFILE</ProfileTitle>
          <ProfileDetail>
            {/* 목록 출력... map 사용... */}
            <hr />
            <li>이름 : {}</li>
            <hr />
            <li>생년월일 : {}</li>
            <hr />
            <li>상대와 처음 만난 날 : {}</li>
            <hr />
          </ProfileDetail>
          <ProfileModifyBt>
            <Link to="/profile/modify">
              <button>프로필 수정</button>
            </Link>
          </ProfileModifyBt>
        </ProfileInfo>
      </ProfileMain>
    </ProfileWrap>
  );
};

export default ProfilePage;
