import React from "react";
import { Badge } from "react-bootstrap";

function ExperienceCard({ data }) {
  return (
    <div className="experience-card">
      <div className="experience-card-glow" aria-hidden="true" />

      <div className="experience-card-header">
        <h3 className="experience-company">{data.company}</h3>
        <span className="experience-duration">{data.duration}</span>
      </div>

      <p className="experience-role">{data.role}</p>

      <div className="experience-impact-metrics">
        {data.impactMetrics.map((metric) => (
          <span key={metric} className="impact-metric-chip">
            {metric}
          </span>
        ))}
      </div>

      <div className="experience-card-body">
        <div className="experience-projects">
          {data.projects.map((project) => (
            <div key={project.name} className="experience-project">
              <h4 className="experience-project-name">{project.name}</h4>
              <p className="experience-project-desc">{project.description}</p>
            </div>
          ))}
        </div>

        <ul className="experience-features">
          {data.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="experience-tech-stack">
          {data.techStack.map((tech) => (
            <Badge key={tech} className="tech-chip">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="experience-challenge-panel">
        <p className="experience-challenge-label">Problem solved</p>
        <p className="experience-challenge">{data.challenge}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
