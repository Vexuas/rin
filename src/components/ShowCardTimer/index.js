import React, { Component } from "react";
import { addDays, distanceInWordsToNow } from "date-fns";

/**
 * Tries to find what date it will be for a particular day of the week.
 * Does this by using today's Date object as an anchor to figure out what date
 * the particular day of the week will fall on.
 *
 * @param {number} day
 * @param {number} hour
 * @param {number} minute
 */
function getDateWithDayOfTheWeek(day, hour, minute) {
  let now = new Date();
  let result;

  if (now.getDay() > day) {
    result = addDays(now, day - now.getDay() + 7);
  } else {
    result = addDays(now, day - now.getDay());
  }

  result.setHours(hour);
  result.setMinutes(minute);
  result.setSeconds(0);

  return result;
}

class ShowCardTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flicker: false,
      distance: distanceInWordsToNow(
        getDateWithDayOfTheWeek(
          props.air_day,
          props.air_hour,
          props.air_minute
        ),
        { includeSeconds: true, addSuffix: true }
      )
    };
  }

  render() {
    return <span>{this.state.distance}</span>;
  }
}

export default ShowCardTimer;
