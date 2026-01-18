function AthleteCard({ athlete, onUpdate, onDelete }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5>{athlete.name}</h5>
        <p>Age: {athlete.age}</p>
        <p>Vertical Jump: {athlete.verticalJump} cm</p>
        <button className="btn btn-primary me-2" onClick={() => onUpdate(athlete)}>
          Update
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(athlete._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default AthleteCard;


