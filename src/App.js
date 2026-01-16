import Navbar from './components/navbar';
import AthleteForm from './components/athleteform';
import AthleteCard from './components/athletecard';

import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false); 
  const [athletes, setAthletes] = useState([]);


  const handleAddAthlete = (athleteData) => {
    setAthletes([...athletes, athleteData]);
    setShowForm(false);
  };

  return (
    <div>
      
      <Navbar onAddAthlete={() => setShowForm(true)} />

      {showForm && (
        <AthleteForm onCancel={() => setShowForm(false)} onSubmit={handleAddAthlete}/>
      )}

      
      <div className="d-flex flex-wrap gap-3 mt-3" style={{ justifyContent: "flex-start", padding: "10px" }}>
        {athletes.map((athlete, index) => (
          <AthleteCard key={index} athlete={athlete} />
        ))}
      </div>

    </div>
  );
}

export default App;
