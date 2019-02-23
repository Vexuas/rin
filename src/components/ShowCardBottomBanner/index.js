import React from "react";
import "./ShowCardBottomBanner.css";

const ShowCardBottomBanner = props => {
  return (
    <div className="ShowCardBottomBanner">
      <span>{props.title}</span>
    </div>
  );
};

export default ShowCardBottomBanner;
