import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({ cardInfo }) {

  return (

      <div className="certificate-card">
        <div className="certificate-image-div">
          <img src={cardInfo.image} alt="PWA" className="card-image"></img>
        </div>
        <div className="certificate-detail-div">
          <h5 className="card-title">{cardInfo.title}</h5>
          <p className="card-date">{cardInfo.date}</p>
          <p className="card-subtitle">{cardInfo.description}</p>
        </div>
        <div className="certificate-card-footer">
          {cardInfo.footer.map((v, i) => {
            return <span class="certificate-tag">{v.name}</span>;
          })}
        </div>
      </div>
  );
}
