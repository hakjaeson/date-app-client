import React from "react";
import { NotFoundPage } from "../../styles/diarystyles/notfound/notfoundstyle";

const NotFound = () => {
  return (
    <NotFoundPage>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/not-found.png"} alt="" />
      </div>
    </NotFoundPage>
  );
};

export default NotFound;
