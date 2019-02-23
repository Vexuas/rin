import React from "react";
import "./ShowCardTopBanner.css";

const ShowCardTopBanner = props => {
  return (
    <div className="ShowCardTopBanner">
      <span>{props.air_day}</span>
    </div>
  );
};

export default ShowCardTopBanner;
