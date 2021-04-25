import React, {useContext} from "react";
import "./Projects.css";
import { projectSection } from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ProjectCard from "../../components/projectCard/ProjectCard";
export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!projectSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {projectSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {projectSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {projectSection.projectCards.map((card, i) => {
              return (
                <ProjectCard
                  key={i}
                  isDark={isDark}
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
    </Fade>
  );
}
