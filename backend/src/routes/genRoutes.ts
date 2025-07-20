import { Router } from "express";
import { getGenerateStory } from "../controllers/genController";


const router = Router();

router.post("/",getGenerateStory);

export default router;
