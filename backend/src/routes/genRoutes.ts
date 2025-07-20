import { Router } from "express";
import { getGenerateStory } from "../controllers/genController";


const router = Router();

router.get("/",getGenerateStory);

export default router;
