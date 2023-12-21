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

  // 미리보기 이미지 초기값
  const initPreview = profileData.pic;

  const navigate = useNavigate();

  // 미리보기 이미지
  const [previewImg, setPreviewImg] = useState(initPreview);
  // 파이어베이스 업로드된 이미지
  const [firebaseUploadImg, setFirbaseUploadImg] = useState(null);

  const [pic, setPic] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [startedAt, setStartedAt] = useState("");

  // 상단바 뒤로가기
  const linkValue = `/profile`;

  // 프로필 정보 수정
  const patchUserProfileAction = result => {
    console.log("왜 안되니", result);
    if (result === 1) {
      alert("수정 완료");
      navigate("/profile");
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
    // setBirth(filterDate(profileData.birth));
    // setStartedAt(filterDate(profileData.startedAt));
  }, [profileData]);

  // 2. 사용자 프로필 가져오기
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

  // 이미지 파일 선택 미리보기
  const handleChangeFile = e => {
    // 파일을 변수에 담아서 코드 를 수월하게 보려고
    const file = e.target.files[0];
    if (file) {
      // 나의 웹브라우저에서 URL 을 임시로 생성
      const tempUrl = URL.createObjectURL(file);
      // 미리보기 state
      setPreviewImg(tempUrl);
      // FB 파일 보관
      setFirbaseUploadImg(file);
    }
  };

  // 1. 초기 화면 불러오기
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <ProfileWrapper>
      <ProfileContent>
        {/* 상단 영역 */}
        <ProfileHeader link={linkValue} />

        {/* 메인 영역 */}
        <ProfileMain>
          {/* 사진 영역 */}
          <ProfileVisual>
            {/* 기존 이미지 불러오기 및 업로드하는 이미지 미리보기 */}
            {previewImg ? (
              <ProfilePic src={previewImg} alt="미리보기" />
            ) : (
              <ProfilePic src={profileData.pic} alt="기존이미지" />
            )}
          </ProfileVisual>

          {/* 정보 수정 영역 */}
          <ProfileForm>
            <ProfileDetail>
              <ProfileDetailForm>
                <label>사진 : </label>
                <input
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  onChange={e => {
                    handleChangeFile(e);
                  }}
                />
                {/* <input
                  type="text"
                  name="pic"
                  defaultValue={profileData.pic}
                  value={pic}
                  placeholder="이미지 경로를 입력하세요."
                  onChange={e => {
                    handleChangePic(e);
                  }}
                ></input> */}
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
