import React, { useEffect, useState } from "react";
import {
  ProfileContent,
  ProfileDetail,
  ProfileInfo,
  ProfileMain,
  ProfilePic,
  ProfilePicPartner,
  ProfileVisual,
  ProfileWrapper,
} from "../../styles/diarystyles/profilepage/profilepagestyle";
import { Link } from "react-router-dom";
import { getUserProfile } from "../../api/user/userprofileapi";
import ProfileHeader from "../../components/profile/ProfileHeader";

// 사용자 정보 데이터 형식
const initialProfie = {
  partnerPic: "",
  pic: "",
  partnerNm: "",
  partnerBirth: "",
  startedAt: "",
};

const ProfilePartner = () => {
  // 처음 사용자 프로필 정보
  const [profileData, setProfileData] = useState(initialProfie);

  // 처음 사용자 프로필 가져오기
  const getUserInfo = () => {
    getUserProfile(setProfileData);
  };

  //YYYY/MM/DD
  const filterDate = result => {
    // console.log(result);
    let filterData = result.split(" ")[0];
    // console.log(filterData);
    return filterData;
  };

  // 1. 화면 초기 불러오기
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <ProfileWrapper>
      <ProfileContent>
        {/* 상단 영역 */}
        <ProfileHeader link="/profile">PARTNER PROFILE</ProfileHeader>

        {/* 메인 영역 */}
        <ProfileMain>
          {/* 사진 영역 */}
          <ProfileVisual>
            <ProfilePic src={profileData.partnerPic} />
            <ProfilePicPartner>
              <Link to="/profile">
                <img src={profileData.pic} />
              </Link>
            </ProfilePicPartner>
          </ProfileVisual>

          {/* 정보 영역 */}
          <ProfileInfo>
            <ProfileDetail>
              <hr />
              <li>이름 : {profileData.partnerNm}</li>
              <hr />
              <li>생년월일 : {filterDate(profileData.partnerBirth)}</li>
              <hr />
              <li>함께한 날 : {filterDate(profileData.startedAt)}</li>
              <hr />
            </ProfileDetail>
          </ProfileInfo>
        </ProfileMain>
      </ProfileContent>
    </ProfileWrapper>
  );
};

export default ProfilePartner;
