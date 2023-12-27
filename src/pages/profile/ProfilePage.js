import React, { useEffect, useState } from "react";
import {
  ProfileBt,
  ProfileContent,
  ProfileDetail,
  ProfileInfo,
  ProfileLogoutBt,
  ProfileMain,
  ProfileModifyBt,
  ProfilePic,
  ProfilePicPartner,
  ProfileVisual,
  ProfileWrapper,
} from "../../styles/diarystyles/profilepage/profilepagestyle";
import { Link, useNavigate } from "react-router-dom";
import { getUserProfile } from "../../api/user/userprofileapi";
import ProfileHeader from "../../components/profile/ProfileHeader";
import axios from "axios";

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
  const navigate = useNavigate();

  // 처음 사용자 프로필 가져오기
  const getUserInfo = () => {
    getUserProfile(setProfileData);
  };

  const handleLogoutClcik = async () => {
    try {
      const res = await axios.get(`/api/user/logout`);
      navigate("/");
      alert("로그아웃이 완료 되었습니다.");
    } catch (error) {
      console.error(error);
      alert("로그아웃 중 오류가 발생되었습니다.");
    }
  };

  // 날짜 필터링
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
        <ProfileHeader link="/main">PROFILE</ProfileHeader>

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
            <ProfileDetail>
              <hr />
              <li>이름 : {profileData.nm}</li>
              <hr />
              <li>생년월일 : {filterDate(profileData.birth)}</li>
              <hr />
              <li>함께한 날 : {filterDate(profileData.startedAt)}</li>
              <hr />
            </ProfileDetail>
          </ProfileInfo>

          <ProfileBt>
            <Link to="/profile/modify">
              <ProfileModifyBt>수정하기</ProfileModifyBt>
            </Link>
            <ProfileLogoutBt onClick={handleLogoutClcik}>
              로그아웃
            </ProfileLogoutBt>
          </ProfileBt>
        </ProfileMain>
      </ProfileContent>
    </ProfileWrapper>
  );
};

export default ProfilePage;
