import { useEffect, useState } from "react";

function AthleteForm({ onSubmit, onCancel, initialData }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    verticalJump: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
      className="p-3 border"
      style={{ maxWidth: 400, margin: "auto" }}
    >
      <input
        className="form-control mb-2"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="number"
        className="form-control mb-2"
        placeholder="Age"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
      />
      <input
        type="number"
        className="form-control mb-2"
        placeholder="Vertical Jump"
        value={formData.verticalJump}
        onChange={(e) =>
          setFormData({ ...formData, verticalJump: e.target.value })
        }
      />
      <button className="btn btn-primary w-100">Submit</button>
      <button
        type="button"
        className="btn btn-secondary w-100 mt-2"
        onClick={onCancel}
      >
        Cancel
      </button>
    </form>
  );
}

export default AthleteForm;
