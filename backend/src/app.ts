import express from "express";
import { errorHandler } from "./middlewares/errorHandler";
import genRoute from "./routes/genRoutes"
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/genstory",genRoute)



// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
