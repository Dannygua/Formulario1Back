import express from "express";

import {
    getInfo,
    getInfo2
} from "../controllers/InfoController.js";

const router = express.Router();

router.post("/", getInfo);
router.post("/MoreEqui", getInfo2);

export default router;