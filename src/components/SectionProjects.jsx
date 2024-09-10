import { projects } from "../data/projects";
import { CardProject } from "./CardProject";

export const SectionProjects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}
        </div>
      </div>
      <img
        src="./assets/images/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (location.href = "#contact")}
      />
    </section>
  );
};
