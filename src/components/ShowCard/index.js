import React, { Component } from "react";
import "./ShowCard.css";
import ShowCardTopBanner from "../ShowCardTopBanner";
import ShowCardBottomBanner from "../ShowCardBottomBanner";

class ShowCard extends Component {
  render() {
    const show = this.props.show;
    const styles = {
      backgroundImage: `url(${show.img_src})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };

    return (
      <article className="ShowCard" style={styles}>
        <ShowCardTopBanner
          air_day={show.air_day}
          air_hour={show.air_time}
          air_minute={show.air_minute}
        />
        <ShowCardBottomBanner title={show.title} />
      </article>
    );
  }
}
export default ShowCard;
