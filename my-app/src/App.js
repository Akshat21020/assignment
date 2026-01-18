import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import AthleteForm from "./components/athleteform";
import AthleteCard from "./components/athletecard";
import Leaderboard from "./components/leaderboard";
import { getAthletes, addAthlete, updateAthlete, deleteAthlete } from "./api/athletes";

function App() {
  const [athletes, setAthletes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editAthlete, setEditAthlete] = useState(null);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  useEffect(() => {
    getAthletes().then(setAthletes);
  }, []);

  const handleSubmit = async (data) => {
    if (editAthlete) {
      const updated = await updateAthlete(editAthlete._id, data);
      setAthletes((prev) =>
        prev.map((a) => (a._id === updated._id ? updated : a))
      );
      setEditAthlete(null);
    } else {
      const created = await addAthlete(data);
      setAthletes((prev) => [...prev, created]);
    }
    setShowForm(false);
  };

  const handleUpdate = (athlete) => {
    setEditAthlete(athlete);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    await deleteAthlete(id);
    setAthletes((prev) => prev.filter((a) => a._id !== id));
  };

  return (
    <>
      <Navbar
  onAddAthlete={() => {
    setShowForm(true);
    setEditAthlete(null);
    setShowLeaderboard(false);
  }}
  onLeaderboard={() => {
    setShowLeaderboard(true);
    setShowForm(false);
  }}
  onHome={() => {
    setShowLeaderboard(false);
    setShowForm(false);
  }}
/>

      {showLeaderboard && <Leaderboard />}

      {showForm && !showLeaderboard && (
        <AthleteForm
          initialData={editAthlete}
          onSubmit={handleSubmit}
          onCancel={() => {
            setShowForm(false);
            setEditAthlete(null);
          }}
        />
      )}

      {!showForm && !showLeaderboard && (
        <div className="d-flex flex-wrap gap-3 mt-3 p-3">
          {athletes.map((athlete) => (
            <AthleteCard
              key={athlete._id}
              athlete={athlete}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default App;