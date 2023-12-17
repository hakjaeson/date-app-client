import React, { useEffect, useState } from "react";
import {
  ProfileContent,
  ProfileDetail,
  ProfileInfo,
  ProfileMain,
  ProfileModifyBt,
  ProfilePic,
  ProfilePicPartner,
  ProfileTitle,
  ProfileVisual,
  ProfileWrapper,
} from "../../styles/diarystyles/profilepage/profilepagestyle";
import { Link } from "react-router-dom";
import { getUserProfile } from "../../api/user/userprofileapi";
import Header from "../../components/profile/ProfileHeader";
import ProfileHeader from "../../components/profile/ProfileHeader";

// 사용자 정보 데이터 형식
const initialProfie = {
  nm: "",
  pic: "",
  birth: "",
  startedAt: "",
  partnerPic: "",
};

const ProfilePage = () => {
  // 처음 사용자 프로필 정보
  const [profileData, setProfileData] = useState(initialProfie);

  // 처음 사용자 프로필 가져오기
  const getUserInfo = () => {
    getUserProfile(setProfileData);
  };

  // 1. 화면 초기 불러오기
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <ProfileWrapper>
      <ProfileContent>
        {/* 상단 영역 */}
        <ProfileHeader />

        {/* 메인 영역 */}
        <ProfileMain>
          <ProfileVisual>
            {/* 사진 영역 */}
            <ProfilePic src={profileData.pic} />
            <ProfilePicPartner>
              <Link to="/profile/partner">
                <img src={profileData.partnerPic} />
              </Link>
            </ProfilePicPartner>
          </ProfileVisual>

          {/* 정보 영역 */}
          <ProfileInfo>
            <ProfileTitle>
              <span>PROFILE</span>
            </ProfileTitle>
            <ProfileDetail>
              <hr />
              <li>이름 : {profileData.nm}</li>
              <hr />
              <li>생년월일 : {profileData.birth}</li>
              <hr />
              <li>함께한 날 : {profileData.startedAt}</li>
              <hr />
            </ProfileDetail>
          </ProfileInfo>

          <ProfileModifyBt>
            <Link to="/profile/modify">
              <button>프로필 수정</button>
            </Link>
          </ProfileModifyBt>
        </ProfileMain>
      </ProfileContent>
    </ProfileWrapper>
  );
};

export default ProfilePage;
