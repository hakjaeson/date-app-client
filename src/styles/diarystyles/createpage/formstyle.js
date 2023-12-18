import styled from "@emotion/styled";

export const CreatePageFormTag = styled.form`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
`;

export const ImageInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 50;
  left: 50;
  width: 80%;
  height: 70%;
  border-radius: 20px;
`;

export const ImageButton = styled.div`
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 70%;
  color: grey;

  border: 2.5px solid #000;
  border-radius: 20px;
`;
