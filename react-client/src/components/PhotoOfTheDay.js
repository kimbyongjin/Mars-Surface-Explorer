import React from 'react';

const PhotoOfTheDay = (props) => {
  const { potd } = props;
  return (
    <div className="potd-container">
      <img src={potd.url} alt="photo-of-the-day" className="potd"></img>
      <p className="potd-container">
        {potd.explanation}
      </p>
    </div>
    );
};

export default PhotoOfTheDay;
