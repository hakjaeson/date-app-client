import React from "react";
import {
  ContentHeader,
  ContentNameTitle,
  MainPageContent,
} from "../../styles/diarystyles/mainpage/mainpagestyle";
import { Link } from "react-router-dom";

const MainContents = () => {
  return (
    <MainPageContent>
      <ContentHeader>
        <div>
          <img src="https://picsum.photos/56/56" alt="" />
        </div>
        {/* Content title */}
        <ContentNameTitle>
          {/* User name */}
          <div>
            <span>알콩이</span>
          </div>

          <div>
            <span>부싼 바캉스</span>
          </div>
        </ContentNameTitle>
        {/* Content Date */}
        <div>
          <span>2023-12-07</span>
        </div>
      </ContentHeader>

      <span>Swiper area 작업이 필요함</span>

      <div>
        <div>이모티콘</div>

        <div>
          지난여름 바닷가 너와 나 단둘이 파도에 취해서 노래하며 같은 꿈을 꾸었지
          다시 여기 바닷가 이제는 말하고 싶어 네가 있었기에 내가 더욱 빛나 별이
          되었다고
        </div>

        <div>#부산 #해운대 #달콩이 #광안리</div>

        <div>
          <Link to="/read-page/${no}">더보기</Link>
        </div>
      </div>
    </MainPageContent>
  );
};

export default MainContents;
