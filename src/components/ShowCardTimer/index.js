import React, { Component } from "react";
import { addDays, differenceInSeconds } from "date-fns";

/**
 * Tries to find what date it will be for a particular day of the week.
 * Does this by using today's Date object as an anchor to figure out what date
 * the particular day of the week will fall on.
 *
 *
 * @param {number} day
 * @param {number} hour
 * @param {number} minute
 */
export function getDateWithDayOfTheWeek(day, hour, minute) {
  let now = new Date();
  let result;

  // If current time is past the release time, we calculate for next week's airing.
  if (now.getDay() > day) {
    result = addDays(now, day - now.getDay() + 7);
  } else {
    if (now.getHours() > hour) {
      result = addDays(now, day - now.getDay() + 7);
    } else {
      if (now.getMinutes() > minute) {
        result = result = addDays(now, day - now.getDay());
      } else {
        result = addDays(now, day - now.getDay());
      }
    }
  }

  result.setHours(hour);
  result.setMinutes(minute);
  result.setSeconds(0);

  return result;
}
function convertSecondsToTimer(seconds) {
  let temp, hours, minutes;
  let output = "";

  temp = convertSecondsToHours(seconds);
  seconds = temp.seconds;
  hours = temp.result;

  temp = convertSecondsToMinutes(seconds);
  seconds = temp.seconds;
  minutes = temp.result;

  if (hours) {
    output = `${output} ${paddedTime(hours)}:`;
  }
  output = `${output}${paddedTime(minutes)}:${paddedTime(seconds)}`;

  return output;
}

function paddedTime(t) {
  if (t < 10) {
    return `0${t}`;
  } else {
    return `${t}`;
  }
}

function convertSecondsToDays(seconds) {
  return convertSecondsToInterval(seconds, 60 * 60 * 24);
}

function convertSecondsToHours(seconds) {
  return convertSecondsToInterval(seconds, 60 * 60);
}

function convertSecondsToMinutes(seconds) {
  return convertSecondsToInterval(seconds, 60);
}

function convertSecondsToInterval(seconds, interval) {
  seconds = parseInt(seconds, 10);
  const result = Math.floor(seconds / interval);

  if (result) {
    seconds = seconds - result * interval;
  }

  return { seconds: seconds, result: result };
}
function calculateDistance(date) {
  const now = new Date();

  let result = differenceInSeconds(date, now);

  return convertSecondsToTimer(result);
}

class ShowCardTimer extends Component {
  constructor(props) {
    super(props);

    const airDate = getDateWithDayOfTheWeek(
      props.air_day,
      props.air_hour,
      props.air_minute
    );

    this.state = {
      flicker: false,
      airDate: airDate,
      currentDistance: calculateDistance(airDate),
      currentInterval: null
    };

    this.countdownTimer = this.countdownTimer.bind(this);
  }
  componentDidMount() {
    const interval = setInterval(() => {
      this.countdownTimer(this.state.airDate);
    }, 1000);
    this.setState({
      currentInterval: interval
    });
  }
  countdownTimer(date) {
    this.setState({
      currentDistance: calculateDistance(date)
    });
  }

  render() {
    return <span>{this.state.currentDistance}</span>;
  }
}

export default ShowCardTimer;
