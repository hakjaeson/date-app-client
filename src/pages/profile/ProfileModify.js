import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ImgAddBt,
  ProfileDetailForm,
  ProfileForm,
  ProfileModifyDetail,
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
import moment from "moment/moment";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../DB/firebase";
import ProfileHeader from "../../components/profile/ProfileHeader";

// 사용자 정보 데이터 형식
const initialProfile = {
  pic: "",
  nm: "",
  birth: "",
  startedAt: "",
};

const ProfileModify = () => {
  // 처음 사용자 프로필 정보 초기값에 담기
  const [profileData, setProfileData] = useState(initialProfile);

  // const [pic, setPic] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [startedAt, setStartedAt] = useState("");

  const navigate = useNavigate();

  // 날짜 필터링
  const filterDate = result => {
    let filterData = result.split(" ")[0];
    return filterData;
  };

  // petch 시 돌아오는 값에 대한 결과(프로필 정보 수정)
  const patchUserProfileAction = result => {
    if (result === 1) {
      alert("수정에 성공했습니다.");
      navigate("/profile");
      return;
    }
    if (result === 0) {
      alert("수정에 실패했습니다. 다시 시도해주세요.");
      return;
    }
    if (result === -500) {
      alert("서버가 불안정합니다. 잠시 후 시도해주세요.");
      return;
    }
  };

  // onChange할 타겟 설정
  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeBirth = e => {
    setBirth(e.target.value);
  };
  const handleChangeStartedAt = e => {
    setStartedAt(e.target.value);
  };

  // 변화를 감지하고 업데이트
  useEffect(() => {
    setName(profileData.nm);
    setBirth(filterDate(profileData.birth));
    setStartedAt(filterDate(profileData.startedAt));
  }, [profileData]);

  // 2. 사용자 프로필 가져오기
  const getUserInfo = () => {
    getUserProfile(setProfileData);
  };

  const [previewImg, setPreviewImg] = useState();

  // 파이어베이스 업로드 될 이미지
  const [selectFile, setSelectFile] = useState(null);

  // 이미지 파일이 선택되는 이벤트가 일어나면 : 미리보기 실행
  const handleChangeFile = e => {
    const file = e.target.files[0];
    if (file) {
      // 나의 웹브라우저에서 URL을 임시로 생성
      const tempUrl = URL.createObjectURL(file);
      // 미리보기 state
      setPreviewImg(tempUrl);

      // FB 파일 보관
      setSelectFile(file);
    }
  };

  // 파이어베이스에 업로드 및 정보 관리
  const [FbImgUrl, setFbImgUrl] = useState();

  // 입력 값 보내기
  const handleSubmitProfileForm = () => {
    if (name === "") {
      alert("이름은 필수 항목입니다.");
      return;
    }

    // 실제 업로드
    const tempFileName = upload();
    // 2. 담긴 이름을 FB 의 이름으로 사용한다.
    uploadImage(tempFileName);
  };

  const patchProfile = _url => {
    const item = {
      pic: _url,
      nm: name,
      birth: birth,
      startedAt: startedAt,
    };
    patchUserProfile(item, patchUserProfileAction);
  };

  // 중복되지 않는 임시 파일명 생성
  const upload = () => {
    if (!selectFile) {
      // 이미지 선택하지 않다면 안내창 출력
      alert("이미지는 필수 항목입니다.");
      return;
    }
    // 중복되지 않는 파일명을 생성
    const tempName = moment().format("YYYYMMDDhhmmss");
    const fileName = `profile/${tempName}_${selectFile.name}`;
    // 1. 이름을 리턴했다.
    return fileName;
  };

  // 실제 이미지 업로드를 실행하는 함수
  const uploadImage = async _fileName => {
    // 3. 시도한다.
    try {
      //https://firebase.google.com/docs/storage/web/upload-files?hl=ko
      const imageRef = ref(storage, _fileName);
      const fbRes = await uploadBytes(imageRef, selectFile);

      // 백엔드에서 이미지 주소를 주세요. 요청
      // 파이어베이스 이미지 url 을 파악
      const url = await getDownloadURL(fbRes.ref);
      setFbImgUrl(url);
      // 4. 실제 데이터 받아서 백엔드 전달
      patchProfile(url);
    } catch (error) {
      console.log(error);
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
        <ProfileHeader link="/profile">PROFILE MODIFY</ProfileHeader>

        {/* 메인 영역 */}
        <ProfileMain>
          {/* 사진 영역 */}
          <ProfileVisual>
            {/* 기존 이미지 불러오기 및 업로드하는 이미지 미리보기 */}
            {previewImg ? (
              <ProfilePic src={previewImg} alt="미리보기" />
            ) : (
              <ProfilePic src={profileData.pic} alt="기존 이미지" />
            )}
          </ProfileVisual>

          {/* 정보 수정 영역 */}
          <ProfileForm>
            <ProfileModifyDetail>
              <ProfileDetailForm>
                <label htmlFor="inputprofilepic">
                  <ImgAddBt
                    type="button"
                    onClick={() => {
                      document.getElementById("inputprofilepic").click();
                    }}
                    className="imgaddbt"
                  >
                    +
                  </ImgAddBt>
                </label>
                <input
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  onChange={e => {
                    handleChangeFile(e);
                  }}
                  id="inputprofilepic"
                  style={{ display: "none" }}
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
            </ProfileModifyDetail>

            <ProfileSummitBt
              type="button"
              onClick={e => {
                handleSubmitProfileForm(e);
              }}
            >
              수정완료
            </ProfileSummitBt>
          </ProfileForm>
        </ProfileMain>
      </ProfileContent>
    </ProfileWrapper>
  );
};

export default ProfileModify;
