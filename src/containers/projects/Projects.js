import React, {useContext} from "react";
import "./Projects.scss";
import ProjectCard from "../../components/achievementCard/AchievementCard";
import {projectSection, workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (projectSection.display) {
    return (
      <div id="projects">
        <Fade bottom duration={1000} distance="20px">
          <div className="achievement-container" id="projectSection">
            <div>
              <h1 className="achievement-heading">Experiences</h1>
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
      </div>
    );
  }
  return null;
}
