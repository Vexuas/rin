import React, { Component } from "react";
import ShowCard from "../ShowCard";

import "./ShowFeed.css";

class ShowFeed extends Component {
  render() {
    return (
      <div className="ShowFeed">
        {this.props.shows.map(s => {
          return <ShowCard show={s} key={s.id} />;
        })}
      </div>
    );
  }
}
export default ShowFeed;
