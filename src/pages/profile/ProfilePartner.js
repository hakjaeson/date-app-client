import React from "react";
import {
  ProfileDetail,
  ProfileHeader,
  ProfileImg,
  ProfileInfo,
  ProfileMain,
  ProfileTitle,
  ProfileWrap,
} from "../../styles/diarystyles/profilepage/profilepagestyle";
import { Link } from "react-router-dom";

const ProfilePartner = () => {
  return (
    <ProfileWrap>
      <ProfileHeader>
        <Link to="/profile">
          <img src={`${process.env.PUBLIC_URL}/images/bt_back.svg`} />
        </Link>
      </ProfileHeader>

      <ProfileMain>
        <ProfileImg>
          <div className="profile-img">
            <img src="https://picsum.photos/300/300" />
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
        </ProfileInfo>
      </ProfileMain>
    </ProfileWrap>
  );
};

export default ProfilePartner;
