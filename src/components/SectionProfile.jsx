/* eslint-disable react/no-unescaped-entities */

import profileImage from '../assets/profile/image.png';
import linkedinImage from '../assets/images/linkedin.png';
import githubImage from '../assets/images/github.png';

export const SectionProfile = () => {
  const openPage = (url) => {
    window.open(url, "_blank");
  };

  const redirect = () => {
    location.href = "#contact";
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src={profileImage}
          alt="Alan Gwynn profile picture"
          className="about-pic"
        />
      </div>
      <div className="section__text">
        <p className="section__text_p1">Hi!, I'm</p>
        <h1 className="title">Alan Gwynn</h1>
        <p className="section__text_p2">Software Engineer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => openPage("./assets/cv/resume.pdf")}
          >
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={redirect}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedinImage}
            alt="My Linkedin profile"
            className="icon"
            onClick={() =>
              openPage("https://www.linkedin.com/in/alan-gwynn-587279206/")
            }
          />
          <img
            src={githubImage}
            alt="My Github profile"
            className="icon"
            onClick={() => openPage("https://github.com/alangwynn")}
          />
        </div>
      </div>
    </section>
  );
};
