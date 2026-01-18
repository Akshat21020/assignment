import express from "express";
import Athlete from "../models/Athlete.js";

const router = express.Router();

/** CREATE ATHLETE */
router.post("/", async (req, res) => {
  try {
    const athlete = await Athlete.create(req.body);
    res.status(201).json(athlete);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/** READ ALL ATHLETES */
router.get("/", async (req, res) => {
  try {
    const athletes = await Athlete.find();
    res.status(200).json(athletes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/** UPDATE ATHLETE */
router.put("/:id", async (req, res) => {
  try {
    const athlete = await Athlete.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!athlete) {
      return res.status(404).json({ message: "Athlete not found" });
    }

    res.status(200).json(athlete);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/** DELETE ATHLETE */
router.delete("/:id", async (req, res) => {
  try {
    const athlete = await Athlete.findByIdAndDelete(req.params.id);

    if (!athlete) {
      return res.status(404).json({ message: "Athlete not found" });
    }

    res.status(200).json({ message: "Athlete deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
