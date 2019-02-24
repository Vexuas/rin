import React, { Component } from "react";
import ShowCard from "../ShowCard";
import { getDateWithDayOfTheWeek } from "../ShowCardTimer";
import { differenceInSeconds } from "date-fns";

import "./ShowFeed.css";

/**
 * Sorts the shows using differenceinSeconds as the base
 *
 * @param {Array} shows //Array of show objects
 */
function sortShowsByClosestToToday(shows) {
  const now = new Date();
  shows.sort((a, b) => {
    return (
      differenceInSeconds(
        getDateWithDayOfTheWeek(a.air_day, a.air_hour, a.air_minute),
        now
      ) -
      differenceInSeconds(
        getDateWithDayOfTheWeek(b.air_day, b.air_hour, b.air_minute),
        now
      )
    );
  });
  return shows;
}
class ShowFeed extends Component {
  render() {
    return (
      <div className="ShowFeed">
        {sortShowsByClosestToToday(this.props.shows).map(s => {
          return <ShowCard show={s} key={s.id} />;
        })}
      </div>
    );
  }
}
export default ShowFeed;
