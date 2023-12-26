import { Link } from "react-router-dom";
import {
  BtBack,
  BtHome,
  HeaderTitle,
  HeaderWapper,
  TopBar,
} from "../../styles/common/headerstyle";

const Header = props => {
  return (
    <HeaderWapper>
      <TopBar>
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
      </TopBar>
    </HeaderWapper>
  );
};

export default Header;
