import { experiences } from "../data/experience";
import { CardExperience } from "./CardExperience";

import arrowImage from '../assets/images/arrow.png';

export const SectionExperience = () => {
  experiences
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {experiences.map((experience) => (
            <CardExperience key={experience.id} experience={experience}  />  
          ))}
        </div>
      </div>
      <img
        src={arrowImage}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (location.href = "#projects")}
      />
    </section>
  );
};
