import styled from "@emotion/styled";

export const ProfileForm = styled.form`
  position: relative;
  width: 340px;
`;

export const ProfileModifyDetail = styled.div`
  position: relative;
  padding-top: 20px;
`;

export const ProfileDetailForm = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 16px 0px;
  font-size: 17px;
  font-family: Pretendard-Regular;
  letter-spacing: 0.5px;

  label {
    padding-right: 5px;
    color: #49454f;
  }
  input {
    flex: 1;
    width: 100%;
    border: none;
    outline: none;
    background: #ffeeed;
    color: #49454f;
  }
`;

export const ProfileSummitBt = styled.button`
  position: relative;
  width: 340px;
  margin-top: 85px;
  background-color: #ffc2c0;
  border: 2.5px none #000;
  border-radius: 30px;
  padding: 13px 0px;
  font-size: 20px;
  cursor: pointer;
  color: #fff;
  letter-spacing: 2px;
`;

export const ImgAddBt = styled.button`
  position: absolute;
  top: -320px;
  left: 19px;
  width: 300px;
  height: 300px;
  border: none;
  border-radius: 70%;
  background-color: #ffc2c0;
  /* padding: 13px 0px; */
  font-size: 80px;
  font-family: Dovemayo_gothic;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 2px;
  background-color: rgba(0, 0, 0, 0.3);
`;
