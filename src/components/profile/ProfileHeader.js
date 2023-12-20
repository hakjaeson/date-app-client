import { Link } from "react-router-dom";
import { ProfileTop } from "../../styles/diarystyles/profilepage/profilepagestyle";

const ProfileHeader = props => {
  return (
    <>
      {/* 상단 영역 */}
      <ProfileTop>
        <Link to={props.link}>
          <img src={`${process.env.PUBLIC_URL}/images/bt_back.svg`} />
        </Link>
      </ProfileTop>
    </>
  );
};

export default ProfileHeader;
