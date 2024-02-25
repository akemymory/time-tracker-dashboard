import React from "react";
import Card from "./components/Card";
import UserReport from "./components/UserReport";
import exerciseIcon from "./images/icon-exercise.svg";
import playIcon from "./images/icon-play.svg";
import selfCareIcon from "./images/icon-self-care.svg";
import socialIcon from "./images/icon-social.svg";
import studyIcon from "./images/icon-study.svg";
import workIcon from "./images/icon-work.svg";
import "./App.css";

const categoryInfo = {
  exercise: {
    color: "hsl(145, 58%, 55%)",
    icon: exerciseIcon,
  },
  play: { color: "hsl(195, 74%, 62%)", icon: playIcon },
  "self-care": { color: "hsl(43, 84%, 65%)", icon: selfCareIcon },
  social: { color: "hsl(264, 64%, 52%)", icon: socialIcon },
  study: { color: "hsl(348, 100%, 68%)", icon: studyIcon },
  work: { color: "hsl(15, 100%, 70%)", icon: workIcon },
};

const userName = "Jeremy Robson";

function App() {
  return (
    <div className="App">
      <div className="dashboard">
        <div className="user-report">
          <UserReport name={userName} />
        </div>
        <div className="log">
          <Card
            key="exercise"
            title="Exercise"
            currentHours={10}
            color={categoryInfo.exercise.color}
            icon={categoryInfo.exercise.icon}
          />
          <Card
            key="play"
            title="Play"
            currentHours={8}
            color={categoryInfo.play.color}
            icon={categoryInfo.play.icon}
          />
          <Card
            key="self-care"
            title="Self-care"
            currentHours={6}
            color={categoryInfo["self-care"].color}
            icon={categoryInfo["self-care"].icon}
          />
          <Card
            key="social"
            title="Social"
            currentHours={4}
            color={categoryInfo.social.color}
            icon={categoryInfo.social.icon}
          />
          <Card
            key="study"
            title="Study"
            currentHours={8}
            color={categoryInfo.study.color}
            icon={categoryInfo.study.icon}
          />
          <Card
            key="work"
            title="Work"
            currentHours={10}
            color={categoryInfo.work.color}
            icon={categoryInfo.work.icon}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
