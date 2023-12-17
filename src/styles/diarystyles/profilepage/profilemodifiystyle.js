import styled from "@emotion/styled";

export const ProfileForm = styled.form`
  position: relative;
  width: 100%;
  padding-top: 35px;
`;

export const ProfileDetailForm = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 18px 0px;
  font-size: 17px;
  label {
    padding-right: 5px;
    // background: #d2ceff;
  }
  input {
    flex: 1;
    width: 100%;
    border: none;
    outline: none;
    background: #ffdbab;
  }
`;

export const ProfileSummitBt = styled.div`
  position: relative;
  padding-top: 58px;

  button {
    background-color: #d2ceff;
    border: 2.5px solid #000;
    border-radius: 30px;
    padding: 18px 105px;
    font-size: 20px;
    white-space: nowrap;
    cursor: pointer;
  }
`;
