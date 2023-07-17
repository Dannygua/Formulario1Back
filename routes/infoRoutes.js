import express from "express";

import {
    getInfo,
    getInfo2,
    getInfo3,
    getInfo4,
    getInfo5

} from "../controllers/InfoController.js";

const router = express.Router();

router.post("/", getInfo);
router.post("/MoreEqui", getInfo2);
router.post("/SimularInversion", getInfo3);
router.post("/SimularCredito", getInfo4);
router.post("/SimularAhorroProgramado", getInfo5);


export default router;