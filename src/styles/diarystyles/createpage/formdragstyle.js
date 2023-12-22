import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const FormContents = styled.div`
  background-color: #fff;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 100%;
  min-height: 50%;
  height: ${props => props.height}px;
  padding: 0 0 15px 15px;

  border: 2.5px solid #000;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  border-radius: 50px 50px 0 0;
`;

export const LineArea = styled.div`
  width: 60%;
  height: 50px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  width: 50px;
  height: 1px;
  margin-right: 15px;
  background-color: black;
  border-color: black;
`;

export const FormTop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 5%;
`;

export const UlEmoji = styled(motion.ul)`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  margin-top: 7%;
  padding-left: 15px;
`;

export const LlEmoji = styled(motion.li)`
  list-style: none;
  opacity: 0;
`;

export const FormEmoji = styled.input`
  width: 50px;
  height: 50px;

  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  border-radius: 50%;
`;

export const FormTitle = styled.input`
  width: 75%;
  height: 20px;
  margin-left: 15px;
  font-size: 1.7rem;
  border: none;
  outline: none;
`;

export const FormContentInput = styled.textarea`
  width: 100%;
  margin-top: 10px;
  min-height: 110px;
  max-height: 65%;
  height: ${props => props.height - 300}px;
  font-size: 1.7rem;
  resize: none;
  vertical-align: text-top;
  border: none;
  outline: none;
`;

export const FormHashTagBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  color: black;
`;

export const FormHashTag = styled.textarea`
  background-color: #ffb5b6;
  max-width: 350px;
  min-width: 250px;
  max-height: 50px;
  width: ${props => props.resizing}px;
  height: ${props => (props.resizing >= 350 ? "50" : "25")}px;
  resize: none;
  overflow: hidden;
  text-align: center;
  padding-top: 4px;
  font-size: 1.2rem;
  border-radius: 10px;
  border: none;
`;

export const FormImgButton = styled.button`
  position: absolute;
  bottom: 70px;
  right: 100px;
  width: 100px;
  height: 40px;
  font-size: 1.7rem;
  background-color: #ffdbab;
  /* border: 0.1rem solid rgba(0, 0, 0, 0.1); */
  /* box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13); */
  border: 2.5 solid #000;
  border-radius: 16px;
`;

export const FormButton = styled.button`
  position: absolute;
  bottom: 70px;
  right: 20px;
  width: 70px;
  height: 40px;
  font-size: 1.7rem;
  background-color: #ffdbab;
  /* border: 0.1rem solid rgba(0, 0, 0, 0.1); */
  /* box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13); */
  border: 2.5 solid #000;
  border-radius: 16px;
`;
