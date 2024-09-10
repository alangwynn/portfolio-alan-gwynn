
import emailImage from '../assets/images/email.png';
import linkedinImage from '../assets/images/linkedin.png';

export const SectionContact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={emailImage}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:alan.gwynn1999@gmail.com" target="_blank">alan.gwynn1999@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedinImage}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com" target="_blank">LinkedIn</a></p>
        </div>
      </div>
    </section>
  )
}
