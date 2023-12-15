import React, { useEffect, useState } from "react";
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
import { getUserProfile } from "../../api/user/userprofileapi";

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
    <>
      <ProfileWrap>
        <ProfileHeader>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/images/bt_back.svg`} />
          </Link>
        </ProfileHeader>

        <ProfileMain>
          <ProfileImg>
            <div className="profile-img">
              {/* <img src="https://picsum.photos/300/300" /> */}
              <img src={profileData.pic} />

              <div className="profile-img-partner">
                <Link to="/profile/partner">
                  {/* <img src="https://picsum.photos/100/100"></img> */}
                  <img src={profileData.partnerPic} />
                </Link>
              </div>
            </div>
          </ProfileImg>

          <ProfileInfo>
            <div>
              <ProfileTitle>PROFILE</ProfileTitle>
              <ProfileDetail>
                <hr />
                <li>이름 : {profileData.nm}</li>
                <hr />
                <li>생년월일 : {profileData.birth}</li>
                <hr />
                <li>상대와 처음 만난 날 : {profileData.startedAt}</li>
                <hr />
              </ProfileDetail>
              <ProfileModifyBt>
                <Link to="/profile/modify">
                  <button>프로필 수정</button>
                </Link>
              </ProfileModifyBt>
            </div>
          </ProfileInfo>
        </ProfileMain>
      </ProfileWrap>
    </>
  );
};

export default ProfilePage;
