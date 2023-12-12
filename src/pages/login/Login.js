import React from "react";
import {
  IdForm,
  LoginButton,
  LoginContent,
  LoginFooter,
  LoginForm,
  LoginLabel,
  LoginLogo,
  LoginWrapper,
  PasswordForm,
  SigninButton,
} from "../../styles/diarystyles/login/loginstyle";

const Login = () => {
  return (
    <LoginWrapper>
      <LoginContent>
        <LoginLogo>
          <img src={`${process.env.PUBLIC_URL}/images/logo.svg`}></img>
        </LoginLogo>
        <LoginForm>
          <div>
            <IdForm>
              <LoginLabel>ID</LoginLabel>
              <input type="text" name="id" />
            </IdForm>
            <PasswordForm>
              <LoginLabel>PASSWORD</LoginLabel>
              <input type="password" name="password"></input>
            </PasswordForm>
          </div>
        </LoginForm>
        <LoginFooter>
          <LoginButton>로그인</LoginButton>
          <SigninButton>회원가입</SigninButton>
        </LoginFooter>
      </LoginContent>
    </LoginWrapper>
  );
};

export default Login;
