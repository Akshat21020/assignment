import React from 'react';

const Navbar = ({ onAddAthlete, onLeaderboard, onHome }) => {
 
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <span className="navbar-brand" style={{cursor: 'pointer'}} onClick={onHome}>PEAK ATHLETE</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <span className="nav-link active" style={{cursor: 'pointer'}} onClick={onHome}>
            Athletes
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link" style={{cursor: 'pointer'}} onClick={onLeaderboard}>
            Leaderboard
          </span>
        </li>
      </ul>
    </div>

    <div>
        <button className="btn btn-primary fw-semibold" onClick={onAddAthlete}>
    Add Athlete
  </button>
            </div>
    </div>
</nav>
        </div>
    )
}

export default Navbar