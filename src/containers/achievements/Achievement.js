import React from "react";
import "./Achievement.css";
import { achievements } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Achievement() {

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="achievements">
      <div className="startup-projects-main-div">
        <div className="startup-projects-header">
          <h1>{achievements.title}</h1>
          <p className="subTitle project-subtitle">{achievements.subtitle}</p>
        </div>
        <div className="startup-cards-div">
            {achievements.projects.map(project => {
              return (
                <div>
                  <img src={project.image}></img>
                  <p>{project.title}</p>
                  <p>{project.date}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
    </Fade>
  );
}