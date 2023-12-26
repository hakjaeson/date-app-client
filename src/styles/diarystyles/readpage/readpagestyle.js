import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  font-family: "Dovemayo_gothic";
  position: relative;
  width: 100%;
  min-width: 320px;
  max-width: 600px;
  max-height: 844px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Device = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 844px;
`;

export const PageMain = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const ReadImage = styled.img`
  width: 100%;
  height: 40%;
  border-bottom: 2.5px solid #000;
`;

export const ReadContentbox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50%;
`;

export const ReadContent = styled.div`
  width: 360px;
  min-height: 300px;

  display: flex;
  flex-direction: column;
`;

export const ReadTop = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UlEmoji = styled(motion.ul)`
  position: absolute;
  transform: translateY(-50%);
  display: flex;
  top: 0;
  left: 0;
  padding-left: 15px;
`;

export const LlEmoji = styled(motion.li)`
  list-style: none;
  opacity: 0;
`;

export const ReadEmoji = styled.img`
  width: 50px;
  height: 50px;

  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  border-radius: 50%;
`;

export const FormEmoji = styled.input`
  width: 50px;
  height: 50px;

  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  border-radius: 50%;
`;

export const ReadTitle = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;

  padding-left: 15px;
  font-size: 25px;
`;

export const ReadDate = styled.div`
  display: flex;
  justify-content: end;
  font-size: 1.7rem;
`;

export const ReadMid = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.7rem;
  line-height: 1.6;
  letter-spacing: 0.5px;
`;

export const ReadBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: 50px;
  margin-bottom: 50px;
`;

export const ReadHashTag = styled.span`
  background-color: #ffb5b6;
  padding: 10px;
  font-size: 1.7rem;
  border-radius: 16px;
`;

export const ReadFooter = styled.div`
  position: relative;
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: right;
  padding: 10px 10px 0 0;
`;

export const ReadPageButton = styled.button`
  width: 70px;
  height: 40px;
  font-size: 1.7rem;
  background-color: #ffdbab;
  border: 2.5 solid #000;
  border-radius: 16px;
  margin-right: 5px;
`;
