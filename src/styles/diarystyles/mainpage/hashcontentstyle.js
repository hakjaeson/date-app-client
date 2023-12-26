import styled from "@emotion/styled";

export const HashHeaderWapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65px;
  background-color: #ffc2c0;
`;

export const HashTagHeader = styled.div`
  /* display: flex; */
  span {
    font-size: 3rem;
    color: white;
  }
`;

export const BtBackWrapper = styled.div`
  margin-left: 1rem;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  /* 원하는 스타일이 필요한 경우 여기에 추가하세요. 예: margin-right, padding 등 */
`;
