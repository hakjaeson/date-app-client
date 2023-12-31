import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";

const ImageArea = styled.div`
  position: relative;
  display: grid;
  grid-row-gap: 10px;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 90px);
  grid-template-rows: 60px repeat(2, 1fr);
  width: 100%;
  height: 100%;
  color: grey;
`;

const ImageInput = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 20px;
  border-radius: 10px;
`;

const ImageButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin-left: 2.5%;
  height: 40px;
  background-color: #ffeeed;

  grid-column: 1 / 5;

  border-radius: 5px;
`;

const ImageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  margin-left: 5%;
  margin-bottom: 20px;
  box-shadow: 0 0 10px #c9c9c9;

  &:nth-of-type(2),
  &:nth-of-type(4) {
    grid-column: 1 / 3;
  }
  &:nth-of-type(3),
  &:nth-of-type(5) {
    grid-column: 3 / 5;
  }
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
`;

const ImageDeleteBtn = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 3px;
  right: 3px;
  font-size: 1.7rem;
`;

const ImageUpload = ({ selectFile, setSelectFile }) => {
  const [previewImg, setPreviewImg] = useState(["", "", "", ""]);
  //   console.log(previewImg);

  const handleChangeFile = e => {
    // 파일을 변수에 담아서 코드 를 수월하게 보려고
    const file = e.target.files[0];
    if (file) {
      // 나의 웹브라우저에서 URL 을 임시로 생성
      const tempUrl = URL.createObjectURL(file);
      // 파일 보관
      setSelectFile([...selectFile, file]);
      // 미리보기 state
      setPreviewImg(previewImg => [tempUrl, ...previewImg].slice(0, 4));
    }
  };

  const imgDelete = (idx, e) => {
    setPreviewImg(previewImg => {
      const updatedPreviewImg = [...previewImg, ""];
      updatedPreviewImg.splice(idx, 1);
      return updatedPreviewImg;
    });
    setSelectFile(selectFile => {
      const updatedSelectFile = [...selectFile];
      updatedSelectFile.splice(idx, 1);
      return updatedSelectFile;
    });
  };

  return (
    <ImageArea>
      <ImageButton>
        <ImageInput
          type="file"
          accept="image/*"
          onChange={e => {
            handleChangeFile(e);
          }}
        />
        <FontAwesomeIcon
          icon={faPlus}
          style={{ width: 20, height: 20, color: "#fff" }}
        />
      </ImageButton>
      {previewImg.map((img, idx) => {
        return (
          <ImageBox key={idx}>
            {img ? (
              <>
                <Image src={img} alt="미리보기" />
                <ImageDeleteBtn
                  onClick={() => {
                    imgDelete(idx);
                  }}
                >
                  ❌
                </ImageDeleteBtn>
              </>
            ) : (
              <div>이미지가 없어요</div>
            )}
          </ImageBox>
        );
      })}
    </ImageArea>
  );
};

export default ImageUpload;
