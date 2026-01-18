import { useState, useEffect } from 'react';
import { getAthletes } from '../api/athletes';

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const data = await getAthletes();
      const sortedData = [...data]
        .sort((a, b) => b.verticalJump - a.verticalJump)
        .map((athlete, index) => ({
          ...athlete,
          rank: index + 1
        }));
      
      setLeaderboardData(sortedData);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Leaderboard - Top Athletes</h2>

      <div className="card">
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Age</th>
                <th className="text-end">Vertical Jump (cm)</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((athlete) => (
                <tr key={athlete._id}>
                  <td>
                    <span className="badge bg-primary">{athlete.rank}</span>
                  </td>
                  <td>{athlete.name}</td>
                  <td>{athlete.age}</td>
                  <td className="text-end fw-bold">{athlete.verticalJump}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;