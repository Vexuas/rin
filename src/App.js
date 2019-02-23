import React, { Component } from "react";
import ShowFeed from "./components/ShowFeed";
import "./App.css";

const shows = [
  {
    id: 1,
    title: "That Time I Got Reincarnated as a Slime",
    air_day: 1,
    air_hour: 23,
    air_minute: 0,
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/548785635784130570/slime.jpg"
  },
  {
    id: 2,
    title: "The Rising of the Shield Hero",
    air_day: 2,
    air_hour: 21,
    air_minute: 0,
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/548785611314561036/shield.jpg"
  }
];

class App extends Component {
  render() {
    return (
      <div className="Rin">
        <header className="RinHeader">
          <span>Hello header!</span>
        </header>
        <div className="content--center">
          <main className="RinContent">
            <ShowFeed shows={shows} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
