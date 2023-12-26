import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

// 자동 화면 전환시 키프레임 조절 (부드러운 전환 효과)
const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Dovemayo_gothic;
  // 화면 전환 부드러운 애니메이션 적용
  animation: ${fadeInOut} 0.7s ease-in-out;
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
  width: 340px;
  margin-bottom: 15px;
  input {
    width: 235px;
    font-size: 15px;
    border: 2px solid #000;
    border-radius: 16px;
    padding-left: 20px;
  }
`;

export const PasswordForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;
  input {
    width: 235px;
    font-size: 15px;
    border: 2px solid #000;
    border-radius: 16px;
    padding-left: 20px;
  }
`;

export const LoginLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95px;
  height: 43px;
  font-size: 13px;
  letter-spacing: 1px;
  background-color: #ffeeed;
  border-radius: 16px;
`;

export const LoginError = styled.p`
  display: block;
  width: 100%;
  text-align: center;
  font-family: Pretendard-Regular;
  font-size: 14px;
  color: #ff4244;
  margin-bottom: 37px;
`;

export const LoginBt = styled.footer`
  display: block;
`;

export const LoginButton = styled.button`
  display: block;
  width: 340px;
  height: 50px;
  font-size: 20px;
  color: #fff;
  background-color: #ffc2c0;
  border: none;
  border-radius: 30px;
  margin-bottom: 15px;
  letter-spacing: 4px;
  cursor: pointer;
`;

export const SigninButton = styled.button`
  display: block;
  width: 340px;
  height: 50px;
  font-size: 20px;
  color: #fff;
  background-color: #ffc2c0;
  border: none;
  border-radius: 30px;
  letter-spacing: 2px;
  cursor: pointer;
`;
