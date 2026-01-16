import React from "react";

function AthleteCard({ athlete }) {
  return (
    <div className="card mt-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{athlete.name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Age: {athlete.age}
        </h6>
        <p className="card-text">
          Vertical Jump: {athlete.verticalJump} cm <br />
          30m Sprint: {athlete.sprint30m} s
        </p>
      </div>
    </div>
  );
}

export default AthleteCard;
