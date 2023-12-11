import styled from "@emotion/styled";
import React from "react";

const Login = () => {
  const LoginWrapper = styled.div`
    display: block;
    width: 100%;
  `;
  return (
    <LoginWrapper>
      <div>
        <div>
          <img src="https://picsum.photos/300/300"></img>
        </div>
        <div>ID/PASSWORD</div>
        <div>
          <button>로그인</button>
          <button>회원가입</button>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
