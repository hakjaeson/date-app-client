import React from "react";

const EmptyContent = () => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + `/images/empty_contents.png`} />
    </div>
  );
};

export default EmptyContent;
