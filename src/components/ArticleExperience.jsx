/* eslint-disable react/prop-types */

import checkMarkImage from '../assets/images/checkmark.png';

export const ArticleExperience = ({technology}) => {
  return (
    <article>
      <img
        src={checkMarkImage}
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
