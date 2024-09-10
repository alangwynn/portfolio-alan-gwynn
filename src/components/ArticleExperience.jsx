/* eslint-disable react/prop-types */

export const ArticleExperience = ({technology}) => {
  return (
    <article>
      <img
        src="./assets/images/checkmark.png"
        alt="Experience icon"
        className="icon"
      />
      <div>
        <h3>{technology.technology}</h3>
        <p>{technology.level}</p>
      </div>
    </article>
  );
};
