import React, { useEffect, useState } from "react";
import {
  ProfileContent,
  ProfileDetail,
  ProfileInfo,
  ProfileMain,
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
  partnerPic: "",
  partnerNm: "",
  partnerBirth: "",
};

const ProfilePartner = () => {
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
          {/* 사진 영역 */}
          <ProfileVisual>
            <ProfilePic src={profileData.partnerPic} />
            <ProfilePicPartner>
              <Link to="/profile/partner">
                <img src={profileData.pic} />
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
              <li>이름 : {profileData.partnerNm}</li>
              <hr />
              <li>생년월일 : {profileData.partnerBirth}</li>
              <hr />
              <li>함께한 날 : {profileData.startedAt}</li>
              <hr />
            </ProfileDetail>
          </ProfileInfo>
        </ProfileMain>
      </ProfileContent>
    </ProfileWrapper>
  );
};

export default ProfilePartner;
