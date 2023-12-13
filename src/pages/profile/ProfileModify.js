import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ProfileModifyHeader,
  ProfileModifyImg,
  ProfileModifyMain,
  ProfileModifyWrap,
} from "../../styles/diarystyles/profilepage/profilemodifiystyle";

const ProfileModify = props => {
  const [defaultImg, setdefaultImg] = useState("");

  return (
    <ProfileModifyWrap>
      <ProfileModifyHeader>
        <Link to="/profile">
          <img src={`${process.env.PUBLIC_URL}/images/bt_back.svg`} />
        </Link>
      </ProfileModifyHeader>

      <ProfileModifyMain>
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
          <form>
            <label>img url</label>
            <input type="text"></input>
          </form>
        </ProfileModifyImg>

        <div>
          <span>PROFILE</span>
          <form>
            <hr />
            <label>이름 : </label>
            <input type="text"></input>
            <hr />

            <label>생년월일 : </label>
            <input type="date"></input>
            <hr />

            <label>처음 만난 날 : </label>
            <input type="date"></input>
            <hr />

            <div>
              <input type="submit" value="프로필 수정 완료"></input>
            </div>
          </form>
        </div>
      </ProfileModifyMain>
    </ProfileModifyWrap>
  );
};

export default ProfileModify;
