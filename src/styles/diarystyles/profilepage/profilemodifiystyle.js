import styled from "@emotion/styled";

export const ProfileForm = styled.form`
  position: relative;
  width: 100%;
`;

export const ProfileDetailForm = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 16px 0px;
  font-size: 17px;
  font-family: Pretendard-Regular;

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
  margin-top: 50px;
  background-color: #ffc2c0;
  border: 2.5px none #000;
  border-radius: 30px;
  padding: 13px 0px;
  font-size: 20px;
  cursor: pointer;
  color: #fff;
`;
