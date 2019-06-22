import React from 'react';

class MarsPhoto extends React.Component {
  constructor(props) {
    super(props);

    const { camera, earth_date, img_src, rover } = this.props.photo;
    this.state = {
      camera,
      earth_date,
      img_src,
      rover,
    }
  }

  render() {
    const { camera, earth_date, img_src, rover } = this.state;

    return (
      <img src={img_src} alt={`An image from the ${rover.name} rover ${camera.full_name}, earth date ${earth_date}`} className="mars-photo"></img>
    )
  }
};

export default MarsPhoto;
