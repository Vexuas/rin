import React from "react";
import "./ShowCardTopBanner.css";
import ShowCardTimer from "../ShowCardTimer";

const ShowCardTopBanner = props => {
  return (
    <div className="ShowCardTopBanner">
      <ShowCardTimer
        air_day={props.air_day}
        air_hour={props.air_hour}
        air_minute={props.air_minute}
      />
    </div>
  );
};

export default ShowCardTopBanner;
