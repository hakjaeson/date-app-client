import { Link } from "react-router-dom";
import {
  BtBack,
  BtHome,
  Header,
  HeaderTitle,
  HeaderWapper,
} from "../../styles/diarystyles/profilepage/headerstyle";

const ProfileHeader = props => {
  return (
    <HeaderWapper>
      <Header>
        {/* 이전 페이지 버튼 */}
        <Link to={props.link}>
          <BtBack src={`${process.env.PUBLIC_URL}/images/bt_back.svg`} />
        </Link>
        {/* 각 페이지 타이틀 */}
        <HeaderTitle>{props.children}</HeaderTitle>
        {/* 홈 버튼 */}
        <Link to="/mainpage">
          <BtHome src={`${process.env.PUBLIC_URL}/images/bt_home.svg`} />
        </Link>
      </Header>
    </HeaderWapper>
  );
};

export default ProfileHeader;
