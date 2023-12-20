import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ProfileDetailForm,
  ProfileForm,
  ProfileSummitBt,
} from "../../styles/diarystyles/profilepage/profilemodifiystyle";
import {
  getUserProfile,
  patchUserProfile,
} from "../../api/user/userprofileapi";
import {
  ProfileContent,
  ProfileDetail,
  ProfileMain,
  ProfilePic,
  ProfileVisual,
  ProfileWrapper,
} from "../../styles/diarystyles/profilepage/profilepagestyle";
import ProfileHeader from "../../components/profile/ProfileHeader";

// 사용자 정보 데이터 형식
const initialProfie = {
  pic: "",
  nm: "",
  birth: "",
  startedAt: "",
};

const ProfileModify = () => {
  // 처음 사용자 프로필 정보 초기값에 담기
  const [profileData, setProfileData] = useState(initialProfie);

  const navigate = useNavigate();

  const [pic, setPic] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [startedAt, setStartedAt] = useState("");

  // 프로필 정보 수정
  const patchUserProfileAction = result => {
    if (result === 1) {
      alert("수정 완료");
      navigate(-1);
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
      pic: pic,
      nm: name,
      birth: birth,
      startedAt: startedAt,
    };
    if (name === "") {
      alert("이름은 필수 항목입니다.");
      return;
    }

    patchUserProfile(item, patchUserProfileAction);
  };

  const handleChangePic = e => {
    setPic(e.target.value);
  };
  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeBirth = e => {
    setBirth(e.target.value);
  };
  const handleChangeStartedAt = e => {
    setStartedAt(e.target.value);
  };

  useEffect(() => {
    setPic(profileData.pic);
    setName(profileData.nm);
    setBirth(profileData.birth);
    setStartedAt(profileData.startedAt);
  }, [profileData]);

  // 2. 사용자 프로필 가져오기
  const getUserInfo = () => {
    getUserProfile(setProfileData);
  };

  // 1. 초기 화면 불러오기
  useEffect(() => {
    getUserInfo();
  }, []);

  const linkValue = `/profile`;

  return (
    <ProfileWrapper>
      <ProfileContent>
        {/* 상단 영역 */}
        <ProfileHeader link={linkValue} />

        {/* 메인 영역 */}
        <ProfileMain>
          {/* 사진 영역 */}
          <ProfileVisual>
            <ProfilePic src={profileData.pic} />
          </ProfileVisual>

          {/* 정보 수정 영역 */}
          <ProfileForm>
            <ProfileDetail>
              <ProfileDetailForm>
                <label>사진 : </label>
                <input
                  type="text"
                  name="pic"
                  defaultValue={profileData.pic}
                  value={pic}
                  placeholder="이미지 경로를 입력하세요."
                  onChange={e => {
                    handleChangePic(e);
                  }}
                ></input>
              </ProfileDetailForm>

              <ProfileDetailForm>
                <label>이름 : </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={profileData.nm}
                  placeholder="이름을 입력하세요."
                  value={name}
                  onChange={e => {
                    handleChangeName(e);
                  }}
                ></input>
              </ProfileDetailForm>

              <ProfileDetailForm>
                <label>생년월일 : </label>
                <input
                  type="date"
                  name="birth"
                  defaultValue={profileData.birth}
                  value={birth}
                  onChange={e => {
                    handleChangeBirth(e);
                  }}
                ></input>
              </ProfileDetailForm>

              <ProfileDetailForm>
                <label>함께한 날 : </label>
                <input
                  type="date"
                  name="startedAt"
                  defaultValue={profileData.startedAt}
                  value={startedAt}
                  onChange={e => {
                    handleChangeStartedAt(e);
                  }}
                ></input>
              </ProfileDetailForm>
            </ProfileDetail>

            <ProfileSummitBt>
              <button
                type="button"
                onClick={e => {
                  handleSumitProfileForm(e);
                }}
              >
                프로필 수정 완료
              </button>
            </ProfileSummitBt>
          </ProfileForm>
        </ProfileMain>
      </ProfileContent>
    </ProfileWrapper>
  );
};

export default ProfileModify;
