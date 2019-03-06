import React, { Component } from "react";
import ShowFeed from "./components/ShowFeed";
import Header from "./components/Header";
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
  },
  {
    id: 3,
    title: "Kemurikusa",
    air_day: 3,
    air_hour: 21,
    air_minute: 30,
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/548857972885815306/kemuri.jpg"
  },
  {
    id: 4,
    title: "Sword Art Online: Alicization",
    air_day: 5,
    air_hour: 23,
    air_minute: 0,
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/549055033824772136/saoalice.jpg"
  },
  {
    id: 5,
    title: "KakeguruiXX",
    air_day: 2,
    air_hour: 1,
    air_minute: 30,
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/549058934179233805/kakeguruixx.jpg"
  },
  {
    id: 6,
    title: "Gotoubun no Hanayome",
    air_day: 5,
    air_hour: 22,
    air_minute: 30,
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/549061764126474261/gotoubun.jpg"
  },
  {
    id: 7,
    title: "Kaguya-sama: Love is War",
    air_day: 6,
    air_hour: 22,
    air_minute: 30,
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/549061068190777344/kaguya.jpg"
  },
  {
    id: 8,
    title: "Dororo",
    air_day: 1,
    air_hour: 21,
    air_minute: 30,
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/549062287361703958/dororo.jpg"
  }
];

class App extends Component {
  render() {
    return (
      <div className="Rin">
        <Header />
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
