import meImage from "../assets/me/me.png";
import experienceImage from "../assets/images/experience.png";
import educationImage from "../assets/images/education.png";
import arrowImage from "../assets/images/arrow.png";

export const SectionAbout = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container about-pic-container">
          <img
            src={meImage}
            alt="Alan Gwynn profile picture"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={experienceImage}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                5+ years <br />
                Software Engineer
              </p>
            </div>
            <div className="details-container">
              <img src={educationImage} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>
                Bachelors Degree Computer Engineering
                <br />
                Universidad Americana
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Software Engineer with 5+ years of experience developing web and
              mobile applications using technologies such as Angular, React,
              Flutter, Node.js, and .NET. Experienced in designing and
              implementing scalable solutions, APIs, and microservices, while
              also contributing to AWS cloud infrastructure, CI/CD pipelines,
              and DevOps practices. Skilled in collaborating across all stages
              of the software development lifecycle, from requirements analysis
              and solution design to implementation, deployment, and
              maintenance. Passionate about continuous learning, software
              quality, and leveraging modern technologies to build efficient,
              reliable, and maintainable systems.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowImage}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (location.href = "#experience")}
      />
    </section>
  );
};
