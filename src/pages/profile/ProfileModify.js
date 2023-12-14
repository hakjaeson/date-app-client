import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ProfileModifyHeader,
  ProfileModifyImg,
  ProfileModifyInfo,
  ProfileModifyMain,
  ProfileModifyWrap,
} from "../../styles/diarystyles/profilepage/profilemodifiystyle";

const ProfileModify = ({ list, setList }) => {
  const { pk } = useParams();

  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [anniversary, setAnniversary] = useState("");

  // useEffect(() => {
  //   const data = list[pk];
  // });

  // 프로필 정보 수정
  const handleSumitProfileForm = e => {
    e.preventDefault();
    const item = {
      name: name,
      birth: birth,
      annversary: anniversary,
    };
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

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
            src="https://picsum.photos/300/300"
            alt="myimg"
          />
          <div>
            <img
              className="profileimgpartner"
              src="https://picsum.photos/100/100"
              alt="partnerimg"
            />
          </div>
        </ProfileModifyImg>

        {/* 정보 수정 영역 */}
        <ProfileModifyInfo>
          <form>
            <label>img url</label>
            <input type="text"></input>
            <hr />
            <label>이름 : </label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="이름을 입력하세요"
              onChange={e => {
                handleChangeName(e);
              }}
            ></input>
            <hr />

            <label>생년월일 : </label>
            <input type="date" name="birth"></input>
            <hr />

            <label>처음 만난 날 : </label>
            <input type="date" name="anniversary"></input>
            <hr />
            <button>프로필 수정 완료</button>
          </form>
        </ProfileModifyInfo>
      </ProfileModifyMain>
    </ProfileModifyWrap>
  );
};

export default ProfileModify;
