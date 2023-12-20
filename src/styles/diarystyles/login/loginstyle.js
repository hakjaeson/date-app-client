import styled from "@emotion/styled";

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Pretendard-Regular;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const LoginLogo = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  margin-bottom: 55px;
  img {
    width: 230px;
    height: 230px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 25px;
`;

export const IdForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  margin-bottom: 15px;
  input {
    width: 235px;
    font-size: 15px;
    border: 2.5px solid #000;
    border-radius: 16px;
    padding-left: 20px;
  }
`;

export const PasswordForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  input {
    width: 235px;
    font-size: 15px;
    border: 2.5px solid #000;
    border-radius: 16px;
    padding-left: 20px;
  }
`;

export const LoginLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 50px;
  font-size: 15px;
  background-color: #ffdbab;
  border: 2.5px solid #000;
  border-radius: 16px;
`;

export const LoginError = styled.p`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #ff4244;
  margin-bottom: 40px;
`;

export const LoginBt = styled.footer`
  display: block;
`;

export const LoginButton = styled.button`
  display: block;
  width: 320px;
  height: 50px;
  font-size: 20px;
  background-color: #d2ceff;
  border: 2.5px solid #000;
  border-radius: 30px;
  margin-bottom: 15px;
  letter-spacing: 4px;
  cursor: pointer;
`;

export const SigninButton = styled.button`
  display: block;
  width: 320px;
  height: 50px;
  font-size: 20px;
  background-color: #d2ceff;
  border: 2.5px solid #000;
  border-radius: 30px;
  letter-spacing: 2px;
  cursor: pointer;
`;
