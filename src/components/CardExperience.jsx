/* eslint-disable react/prop-types */

import { ArticleExperience } from "./ArticleExperience";

export const CardExperience = ({experience}) => {
    
  return (
    <div className="details-container">
      <h2 className="experience-sub-title">{experience.jobTitle}</h2>
      <h2 className="experience-sub-title-3">
        {experience.companyAndDate}
      </h2>
      <p className="paragraph-sub-title">
        {experience.description}
      </p>
      <div className="article-container">
        {experience.technologies.map((technology) => (
            <ArticleExperience key={technology.id} technology={technology} />
        ))}
      </div>
    </div>
  );
};
