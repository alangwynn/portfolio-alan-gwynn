
import profileImage from '../assets/profile/image.png';
import experienceImage from '../assets/images/experience.png';
import educationImage from '../assets/images/education.png';
import arrowImage from '../assets/images/arrow.png';

export const SectionAbout = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={profileImage}
            alt="Profile picture"
            className="about-pic"
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
                3+ years <br />
                Full Stack Development
              </p>
            </div>
            <div className="details-container">
              <img
                src={educationImage}
                alt="Education icon"
                className="icon"
              />
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
              A full-stack developer with over 3 years of experience in the
              development of web and mobile applications. I have extensive
              knowledge of various technologies, such as Flutter, Angular, React
              and NodeJS. With more than 3 years of experience as a software
              engineer, one of the key areas of my expertise is the construction
              of efficient microservices, delivering high quality and scalable
              solutions. I am highly interested in learning and implementing new
              cutting-edge technologies, so I work on my computer science skills
              studying the latest technologies.
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
