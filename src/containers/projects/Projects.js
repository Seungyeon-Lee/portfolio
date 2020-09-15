import React from "react";
import "./Projects.css";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { projectSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Projects() {
  return (
    <div className="main" id="projects">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1>{projectSection.title}</h1>
          <p className="subTitle achievement-subtitle">{projectSection.subtitle}</p>
        </div>
        <div className="achievement-cards-div">
          {projectSection.projectCards.map(card => {
            return (
              <ProjectCard
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  date : card.date,
                  image: card.image,
                  footer: card.footerLink
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
