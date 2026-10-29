import PropTypes from 'prop-types';

const levelDots = {
  Advanced: 3,
  Intermediate: 2,
  Beginner: 1,
};

export const CardSkillCategory = ({ category }) => {
  return (
    <div className="details-container skill-category-card">
      <h2 className="experience-sub-title">{category.category}</h2>
      <ul className="skill-list">
        {category.skills.map((skill) => (
          <li className="skill-item" key={skill.id}>
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">
              {[1, 2, 3].map((dot) => (
                <span
                  key={dot}
                  className={`skill-dot ${dot <= levelDots[skill.level] ? 'skill-dot--filled' : ''}`}
                />
              ))}
              <span className="skill-level-label">{skill.level}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

CardSkillCategory.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        level: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
