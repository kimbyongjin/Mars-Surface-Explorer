import React from 'react';

const PhotoOfTheDay = (props) => {
  const { photoOfTheDayUrl } = props;
  return (
    <img className="photo-of-the-day" href={photoOfTheDayUrl}></img>
    );
};
