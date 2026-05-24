import React from "react";
import {
  FaCode,
  FaCertificate,
  FaTrophy,
  FaSwimmer,
  FaSpa,
} from "react-icons/fa";

const iconMap = {
  code: FaCode,
  certificate: FaCertificate,
  trophy: FaTrophy,
  swim: FaSwimmer,
  yoga: FaSpa,
};

function AchievementCard({ data }) {
  const Icon = iconMap[data.icon] || FaTrophy;

  return (
    <div className="achievement-card" style={{ "--accent": data.accent }}>
      <div className="achievement-icon-wrap">
        <Icon className="achievement-icon" aria-hidden="true" />
      </div>
      <div className="achievement-content">
        <h3 className="achievement-title">{data.title}</h3>
        <p className="achievement-description">{data.description}</p>
      </div>
    </div>
  );
}

export default AchievementCard;
