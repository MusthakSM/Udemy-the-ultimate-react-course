import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro name="S. Musthak Ahamed" />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="Musthak_E19_247.jpg" alt="avatar" className="avatar" />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>
        As a third-year Computer Engineering undergraduate, I am passionate
        about software development with a keen interest in machine learning and
        artificial intelligence. My academic journey has provided me with a
        strong foundation in these domains, allowing me to develop practical
        skills and knowledge. I aim to apply my expertise and deepen my
        understanding of these fields while collaborating with skilled
        professionals on impactful projects.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="lightblue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="👶" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);