import styled from "@emotion/styled";

export const ProfileModifyWrap = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const ProfileModifyHeader = styled.header`
  position: relative;
`;

export const ProfileModifyMain = styled.main`
  position: relative;
`;

export const ProfileModifyImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  .profileimg {
    position: relative;
    border-radius: 70%;
  }
  .profileimgpartner {
    position: absolute;
    border-radius: 70%;
    top: 200px;
    left: 245px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
    filter: brightness(30%);
  }
`;

export const ProfileModifyInfo = styled.div`
  position: relative;
  display: flex;
`;
