import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  ProfileModifyHeader,
  ProfileModifyImg,
  ProfileModifyInfo,
  ProfileModifyMain,
  ProfileModifyWrap,
} from "../../styles/diarystyles/profilepage/profilemodifiystyle";
import {
  getUserProfile,
  patchUserProfile,
} from "../../api/user/userprofileapi";

// 사용자 정보 데이터 형식
const initialProfie = {
  nm: "",
  pic: "",
  birth: "",
  startedAt: "",
  partnerPic: "",
};

const ProfileModify = () => {
  // 처음 사용자 프로필 정보 초기값에 담기
  const [profileData, setProfileData] = useState(initialProfie);
  const Navigate = useNavigate();

  const [pic, setPic] = useState("");

  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [anniversary, setAnnversary] = useState("");

  // 프로필 정보 수정
  const patchUserProfileAction = result => {
    if (result === 1) {
      alert("수정 완료");
      Navigate(-1);
      return;
    }
    if (result === 0) {
      alert("수정에 실패했습니다.");
      return;
    }
    if (result === -500) {
      alert("서버가 불안정합니다. 잠시 후 시도해주세요.");
      return;
    }
  };

  // 입력 값 보내기
  const handleSumitProfileForm = () => {
    const item = {
      nm: name,
      pic: pic,
      birth: birth,
      startedAt: anniversary,
    };
    patchUserProfile(item, patchUserProfileAction);
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeBirth = e => {
    setBirth(e.target.value);
  };

  useEffect(() => {
    console.log(profileData);
    setName(profileData.nm);
    setBirth(profileData.birth);
  }, [profileData]);

  // 처음 사용자 프로필 가져오기
  const getUserInfo = () => {
    getUserProfile(setProfileData);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <ProfileModifyWrap>
      {/* 상단 영역 */}
      <ProfileModifyHeader>
        <Link to="/profile">
          <img src={`${process.env.PUBLIC_URL}/images/bt_back.svg`} />
        </Link>
      </ProfileModifyHeader>

      {/* 메인 영역 */}
      <ProfileModifyMain>
        {/* 이미지 영역 */}
        <ProfileModifyImg>
          <img
            className="profileimg"
            // src={"https://picsum.photos/300/300"}
            src={profileData.pic}
            alt="myimg"
          />
          <div>
            <img
              className="profileimgpartner"
              // src="https://picsum.photos/100/100"
              src={profileData.partnerPic}
              alt="partnerimg"
            />
          </div>
        </ProfileModifyImg>

        {/* 정보 수정 영역 */}
        <ProfileModifyInfo>
          <form>
            {/* <label>img url</label>
            <input type="text"></input> */}
            <hr />
            <label>이름 : </label>
            <input
              type="text"
              name="name"
              defaultValue={profileData.nm}
              placeholder="이름을 입력하세요"
              value={name}
              onChange={e => {
                handleChangeName(e);
              }}
            ></input>
            <hr />

            <label>생년월일 : </label>
            <input
              type="date"
              name="birth"
              value={birth}
              onChange={e => {
                handleChangeBirth(e);
              }}
            ></input>
            <hr />

            <label>처음 만난 날 : </label>
            <input
              type="date"
              name="anniversary"
              value={profileData.startedAt}
            ></input>
            <hr />
            <button
              type="button"
              onClick={() => {
                handleSumitProfileForm();
              }}
            >
              프로필 수정 완료
            </button>
          </form>
        </ProfileModifyInfo>
      </ProfileModifyMain>
    </ProfileModifyWrap>
  );
};

export default ProfileModify;
