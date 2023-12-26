import styled from "@emotion/styled";

export const MonthDropDown = styled.div`
  position: relative;
  display: block;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NowMonthBt = styled.button`
  background-color: transparent;
  color: black;
  font-size: 1.5rem;
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
  top: 70px;
  left: 30px;
  transform: translate(-50%, -6.5%);
  line-height: 2;
  background-color: white;
  border: 0.1rem solid #c9c9c9;
  width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  padding: 0 2rem;
  z-index: 1;
  font-size: 1.5rem;
`;
export const YearDropDown = styled.div`
  position: absolute;
  top: -0.5%;
  right: -0.5%;
  background: #ffb5b6;
  border: 0.1rem solid #c9c9c9;
  height: 5rem;
  width: 200px;
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
`;
export const MonthArrayWrapper = styled.div`
  padding-top: 5rem;
`;

// Prev, Next month button
export const MonthPrevBt = styled.button`
  border: none;
  background: transparent;
  margin-right: 1rem;
  img {
    transform: rotate(90deg);
  }
`;
export const MonthNextBt = styled.button`
  border: none;
  background: transparent;
  margin-left: 10px;
  img {
    transform: rotate(270deg);
  }
`;
