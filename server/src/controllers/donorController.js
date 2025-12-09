import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import Donor from "../models/Donor.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const seedFile = path.resolve(__dirname, "../../data/mockDonors.json");

export const listDonors = async (req, res, next) => {
  try {
    const { group, location } = req.query;
    const filters = {};

    if (group) {
      filters.group = group.toUpperCase();
    }

    if (location) {
      filters.location = new RegExp(location, "i");
    }

    const donors = await Donor.find(filters).sort({ createdAt: -1 });
    res.json(donors.map((donor) => donor.toPublicJSON()));
  } catch (error) {
    next(error);
  }
};

export const createDonor = async (req, res, next) => {
  try {
    const { name, group, location, availability, phone, donations } = req.body;

    if (!name || !group || !location || !phone) {
      return res.status(400).json({
        message: "name, group, location, and phone are required",
      });
    }

    const donor = await Donor.create({
      name,
      group,
      location,
      availability,
      phone,
      donations,
    });

    res.status(201).json(donor.toPublicJSON());
  } catch (error) {
    next(error);
  }
};

export const seedDonors = async (_req, res, next) => {
  try {
    const count = await Donor.estimatedDocumentCount();
    if (count > 0) {
      return res.status(400).json({ message: "Database already has donors" });
    }

    const contents = await fs.readFile(seedFile, "utf8");
    const donors = JSON.parse(contents);
    const inserted = await Donor.insertMany(donors);

    res.json({ inserted: inserted.length });
  } catch (error) {
    next(error);
  }
};
