import React, { Component } from "react";
import "./index.css";

function getCurrentTime() {
  const currentDate = new Date();
  return currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: getCurrentTime()
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime: getCurrentTime()
      });
    });
  }
  render() {
    return (
      <header className="RinHeader">
        <div className="rinTitles">
          <span id="rinMainTitle">rin</span>
          <span id="rinDescription">Weekly Anime Airing Tracker</span>
        </div>
        <div className="rinTime">
          <span id="rinCurrentTime" title="Current Time">
            {this.state.currentTime}
          </span>
        </div>
      </header>
    );
  }
}
export default Header;
