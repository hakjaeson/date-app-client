import React, { useState } from "react";
import {
  IdForm,
  LoginButton,
  LoginContent,
  LoginError,
  LoginFooter,
  LoginForm,
  LoginLabel,
  LoginLogo,
  LoginWrapper,
  PasswordForm,
  SigninButton,
} from "../../styles/diarystyles/login/loginstyle";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [errorMg, setErrorMg] = useState("");
  const handleChangeId = e => {
    setId(e.target.value);
  };
  const handleChangePw = e => {
    setPw(e.target.value);
  };
  const handleClickLogin = () => {
    if (id === "") {
      setErrorMg("올바른 아이디를 입력하세요.");
      return false;
    }
    if (pw === "") {
      setErrorMg("올바른 비밀번호를 입력하세요.");
      return false;
    }
    if (pw.length >= 9) {
      setErrorMg("비밀번호는 8글자 이하로 입력하세요.");
    }
    console.log("화면이동");
  };
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
              <input
                type="text"
                name="id"
                value={id}
                onChange={e => {
                  handleChangeId(e);
                }}
              />
            </IdForm>
            <PasswordForm>
              <LoginLabel>PASSWORD</LoginLabel>
              <input
                type="password"
                name="password"
                value={pw}
                onChange={e => {
                  handleChangePw(e);
                }}
              ></input>
            </PasswordForm>
          </div>
        </LoginForm>
        <LoginError>{errorMg}</LoginError>
        <LoginFooter>
          <LoginButton
            onClick={() => {
              handleClickLogin();
            }}
          >
            로그인
          </LoginButton>
          <SigninButton>회원가입</SigninButton>
        </LoginFooter>
      </LoginContent>
    </LoginWrapper>
  );
};

export default Login;
