import styled from "@emotion/styled";

export const MonthDropDown = styled.div`
  position: relative;
  display: block;
  z-index: 10;
`;
export const NowMonthBt = styled.button`
  background-color: transparent;
  color: black;
  padding: 16px;
  font-size: 2.5rem;
  font-weight: 700;
  border: none;
  letter-spacing: 0.2rem;
  cursor: pointer;
  &:hover {
  }
  &:focus {
  }
`;
export const DropDownYearMonth = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  left: 50px;
  transform: translate(-50%, -6.5%);
  line-height: 2;
  background-color: white;
  border: 0.2rem solid black;
  width: 300px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  padding: 0 2rem;
  z-index: 1;
`;
export const YearDropDown = styled.div`
  position: absolute;
  top: -0.5%;
  right: -0.5%;
  background: #ffdbab;
  border: 0.2rem solid black;
  height: 5rem;
  width: 300px;
  border-radius: 2rem 2rem 0 0;
  z-index: 2;
`;

export const NowYearBt = styled.button`
  padding: 0.5rem;
  float: right;
  margin-right: 0.5rem;
  margin-top: 1rem;
  border-radius: 2rem;
  background: white;
  font-size: 1rem;
  span {
    margin-right: 0.5rem;
  }
`;

export const YearDropDownContent = styled.div`
  display: block;
  position: absolute;
  right: 0;
  top: 50px;
  background-color: #f6f6f6;
  min-width: 100px;
  height: 150px;
  overflow: scroll;
  text-align: center;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 1rem;
  font-size: 1.5rem;
`;
export const MonthArray = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    background-color: #ececed;
  }
  // 체크이미지 만드는 것인데 보류
  // &:hover::before {
  //   content: "";
  //   position: absolute;
  //   width: 50px;
  //   height: 50px;
  //   background-image: url(${props => props.checkIcon});
  // }
`;
export const MonthArrayWrapper = styled.div`
  padding-top: 7rem;
`;

export const MonthPrevBt = styled.button`
  border: none;
  background: transparent;
  img {
    transform: rotate(90deg);
  }
`;
export const MonthNextBt = styled.button`
  border: none;
  background: transparent;
  img {
    transform: rotate(270deg);
  }
`;
