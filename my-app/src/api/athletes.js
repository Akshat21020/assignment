const BASE_URL = "http://localhost:5000/api/athletes";

export const getAthletes = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addAthlete = async (data) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateAthlete = async (id, data) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteAthlete = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};
