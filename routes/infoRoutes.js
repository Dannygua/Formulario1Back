import express from "express";

import {
    getInfo
} from "../controllers/InfoController.js";

const router = express.Router();

router.post("/", getInfo);

export default router;