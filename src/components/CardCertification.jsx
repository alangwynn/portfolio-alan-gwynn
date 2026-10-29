import PropTypes from 'prop-types';

export const CardCertification = ({ certification }) => {
  return (
    <div className="carousel-slide">
      <div className="certification-card">
        <div className="certification-image-container">
          <img
            src={certification.image}
            alt={certification.title}
            className="certification-image"
          />
        </div>
        <div className="certification-content">
          <h2 className="experience-sub-title">{certification.title}</h2>
          <p className="paragraph-sub-title">{certification.description}</p>
          <h3 className="certification-label">What the course is about</h3>
          <p className="paragraph-sub-title">{certification.courseAbout}</p>
          <h3 className="certification-label">What I am capable of now</h3>
          <p className="paragraph-sub-title">{certification.capabilities}</p>
        </div>
      </div>
    </div>
  );
};

CardCertification.propTypes = {
  certification: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    courseAbout: PropTypes.string.isRequired,
    capabilities: PropTypes.string.isRequired,
  }).isRequired,
};
