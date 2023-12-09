import styled from "@emotion/styled";

export const MainPageWrapper = styled.div`
  display: block;
  background-color: skyblue;
  height: 100%;
`;

export const Anniversary = styled.div`
  /* float: right; */
  display: block;
  background: gold;
`;

export const MainPageContent = styled.div`
  display: block;
  background: bisque;
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const ContentHeader = styled.div`
  display: flex;
  background-color: yellowgreen;
  img {
    border-radius: 28px;
  }
`;
export const ContentNameTitle = styled.div`
  display: flex;
`;

export const NavigationBar = styled.div`
  position: fixed;
  width: 90%;
  padding: 10px;
  background-color: green;
  height: 100px;
  bottom: 0;
`;
export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    img {
      border-radius: 25px;
    }
  }
`;
