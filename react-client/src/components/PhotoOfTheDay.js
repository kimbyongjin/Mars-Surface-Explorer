import React from 'react';

const PhotoOfTheDay = (props) => {
  const { potd } = props;
  return (
    <div className="potd-container">NASA Photo of the Day
      {potd.explanation}
      <img src={potd.url} alt="photo-of-the-day" className="potd"></img>
    </div>
    );
};

export default PhotoOfTheDay;
