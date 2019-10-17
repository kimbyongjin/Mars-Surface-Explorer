import React from 'react';

const RoverSelectionForm = (props) => {
  const { handleChange } = props;
  return (
    <form className="rover-form">
      <label>
        Select a Mars Rover
        <select onChange={(e) => handleChange(e, 'rover')}>
          <option value="curiousity">Curiousity</option>
          <option value="opportunity">Opportunity</option>
          <option value="spirit">Spirit</option>
        </select>
      </label>
      <label>
        Select a Camera
        <select onChange={(e) => handleChange(e, 'camera')}>
          <option value="navcam">Navigation Camera</option>
          <option value="fhaz">Front Hazard Avoidance Camera</option>
          <option value="rhaz">Rear Hazard Avoidance Camera</option>
          <option value="mast">Mast Camera</option>
          <option value="chemcam">Chemistry and Camera Complex</option>
          <option value="mahli">Mars Hand Lens Imager</option>
          <option value="mardi">Mars Descent Imager</option>
          <option value="pancam">Panoramic Camera</option>
          <option value="minites">Miniature Thermal Emission Spectrometer "Mini-TES"</option>
        </select>
      </label>
      <label>
        SOL - Mars Day (ex. number from 1 - 1000)
        <input type="text" defaultValue="555" onChange={(e) => handleChange(e, 'sol')}/>
      </label>
    </form>
  )
};

export default RoverSelectionForm;
