import { Router } from "express";
import {
  createDonor,
  listDonors,
  seedDonors,
} from "../controllers/donorController.js";

const router = Router();

router.get("/", listDonors);
router.post("/", createDonor);
router.post("/seed", seedDonors);

export default router;
