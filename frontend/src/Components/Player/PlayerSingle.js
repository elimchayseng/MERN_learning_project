import React from "react";

const playerSingle = (props) => {
  return (
    <div classNameName="row">
      <div classNameName="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src="photo1.jpg" alt="bikeImage" />
            <span className="card-title">
              {props.player.firstName} {props.player.lastName}
            </span>
          </div>

          <div className="card-content">
            <p>
              Phone: {props.player.phone} - Email: {props.player.email}
            </p>
            <p>
              Strength: {props.player.strength} - Endurance:{" "}
              {props.player.endurance}
            </p>
          </div>
          <div className="card-action">
            <a href="/">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default playerSingle;
