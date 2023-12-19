import React, { useState } from "react";
import { postUserLogin } from "../../api/user/userloginapi";
import { useNavigate } from "react-router-dom";
import {
  IdForm,
  LoginButton,
  LoginContent,
  LoginError,
  LoginBt,
  LoginForm,
  LoginLabel,
  LoginLogo,
  LoginWrapper,
  PasswordForm,
  SigninButton,
} from "../../styles/diarystyles/login/loginstyle";

const Login = () => {
  const navigate = useNavigate();
  const [uid, setuId] = useState("");
  const [upw, setuPw] = useState("");
  const [errorMg, setErrorMg] = useState("");

  const handleChangeId = e => {
    setuId(e.target.value);
  };

  const handleChangePw = e => {
    setuPw(e.target.value);
  };

  const usersPassword = pw => {
    const passwordRegex = /^(?=.*[!@#$%^&*()])(?=.{4,8}$)/;
    return passwordRegex.test(pw);
  };

  const handleClickLogin = () => {
    if (uid === "") {
      setErrorMg("아이디는 필수 입력 사항입니다.");
      return false;
    }
    if (upw === "") {
      setErrorMg("비밀번호는 필수 입력 사항입니다.");
      return false;
    }

    // 비밀번호 조건
    // if (usersPassword(pw) === false) {
    //   setErrorMg("비밀번호는 특수문자 포함, 4~8자여야 합니다.");
    //   return false;
    // }

    // 서버로 전달
    postUserLogin({ uid, upw }, successFN, failFN);
  };

  const successFN = () => {
    console.log("로그인 성공!");
    navigate("/");
  };

  const failFN = () => {
    console.log("서버 에러");
    // 메인페이지 이동 위해 우선 navigate 넣어둠
    navigate("/");
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
                value={uid}
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
                value={upw}
                onChange={e => {
                  handleChangePw(e);
                }}
              ></input>
            </PasswordForm>
          </div>
        </LoginForm>
        <LoginError>{errorMg}</LoginError>
        <LoginBt>
          <LoginButton
            onClick={() => {
              handleClickLogin();
            }}
          >
            로그인
          </LoginButton>
          <SigninButton>회원가입</SigninButton>
        </LoginBt>
      </LoginContent>
    </LoginWrapper>
  );
};

export default Login;
