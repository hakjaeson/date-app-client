import styled from "@emotion/styled";

export const LoginWrapper = styled.div`
  display: block;
  width: 100%;
  padding-top: 50px;
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
  margin-bottom: 70px;
  img {
    width: 250px;
    height: 250px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 47px;
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

export const LoginFooter = styled.footer`
  display: block;
`;

export const LoginButton = styled.button`
  display: block;
  width: 350px;
  height: 65px;
  font-size: 20px;
  background-color: #d2ceff;
  border: 2.5px solid #000;
  border-radius: 30px;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const SigninButton = styled.button`
  display: block;
  width: 350px;
  height: 65px;
  font-size: 20px;
  background-color: #d2ceff;
  border: 2.5px solid #000;
  border-radius: 30px;
  cursor: pointer;
`;
