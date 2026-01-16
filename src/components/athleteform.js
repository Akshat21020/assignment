import { useState } from 'react';

function AthleteForm({ onCancel, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    verticalJump: "",
    sprint30m: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      age: "",
      verticalJump: "",
      sprint30m: "",
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded w-100"
        style={{ maxWidth: "400px" }}
      >
        <h4 className="mb-3">Add Athlete</h4>

        <input
          className="form-control mb-2"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="number"
          className="form-control mb-2"
          placeholder="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />

        <input
          type="number"
          className="form-control mb-2"
          placeholder="Vertical Jump (cm)"
          name="verticalJump"
          value={formData.verticalJump}
          onChange={handleChange}
        />

        <input
          type="number"
          className="form-control mb-3"
          placeholder="30m Sprint (sec)"
          name="sprint30m"
          value={formData.sprint30m}
          onChange={handleChange}
        />

        <div className="d-flex gap-2">
          <button className="btn btn-primary w-50" type="submit">
            Submit
          </button>

          <button
            type="button"
            className="btn btn-secondary w-50"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AthleteForm;
