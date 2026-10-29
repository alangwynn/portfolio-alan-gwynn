import { skillCategories } from '../data/skills';
import { CardSkillCategory } from './CardSkillCategory';

import arrowImage from '../assets/images/arrow.png';

export const SectionSkills = () => {
  return (
    <section id="skills">
      <p className="section__text__p1">Technologies I Use</p>
      <h1 className="title">Skills</h1>
      <div className="skills-container">
        {skillCategories.map((category) => (
          <CardSkillCategory key={category.id} category={category} />
        ))}
      </div>
      <img
        src={arrowImage}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (location.href = '#projects')}
      />
    </section>
  );
};
