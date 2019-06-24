import React from 'react';

const RoverSelectionForm = () => {
  return (
    <form className="rover-form">
      <label>
        Select a Mars Rover
        <select>
          <option value="curiousity">Curiousity</option>
          <option value="opportunity">Opportunity</option>
          <option value="spirit">Spirit</option>
        </select>
      </label>
      <label>
        Select a Camera
        <select>
          <option value="fhaz">Front Hazard Avoidance Camera</option>
          <option value="rhaz">Rear Hazard Avoidance Camera</option>
          <option value="mast">Mast Camera</option>
          <option value="chemcam">Chemistry and Camera Complex</option>
          <option value="mahli">Mars Hand Lens Imager</option>
          <option value="mardi">Mars Descent Imager</option>
          <option value="navcam">Navigation Camera</option>
          <option value="pancam">Panoramic Camera</option>
          <option value="minites">Miniature Thermal Emission Spectrometer "Mini-TES"</option>
        </select>
      </label>
      <label>
        Earth Date
        <input type="text" />
      </label>
    </form>
  )
};

export default RoverSelectionForm;
