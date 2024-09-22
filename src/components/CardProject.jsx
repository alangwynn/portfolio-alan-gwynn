/* eslint-disable react/prop-types */

export const CardProject = ({ project }) => {
  const openPage = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="details-container color-container">
      <div className="article-container">
        <img src={project.srcImage} alt={project.alt} className="project-img" />
      </div>
      <h2 className="experience-sub-title project-title">{project.title}</h2>
      <p className="paragraph-sub-title">{project.description}</p>
      <p className="paragraph-sub-title"><b>Tech Stack: </b>{project.techStack}</p>
      <div className="btn-container">
        {project.linkGithub && (
          <button
            className="btn btn-color-2 project-btn"
            onClick={() => openPage(project.linkGithub)}
          >
            Github
          </button>
        )}
        {project.linkDemo && (
          <button
            className="btn btn-color-2 project-btn"
            onClick={() => openPage(project.linkDemo)}
          >
            Live Demo
          </button>
        )}
      </div>
    </div>
  );
};
