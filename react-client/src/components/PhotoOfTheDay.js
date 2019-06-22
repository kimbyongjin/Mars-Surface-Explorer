import React from 'react';

const PhotoOfTheDay = (props) => {
  const { potd } = props;
  console.log(potd)
  return (
    <div className="potd-container">
      {potd.explanation}
      <img src={potd.url} alt="photo-of-the-day" className="potd"></img>
    </div>
    );
};

export default PhotoOfTheDay;
