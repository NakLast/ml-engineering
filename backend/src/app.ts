import express from "express";
import { errorHandler } from "./middlewares/errorHandler";
import itemRoutes from "./routes/itemRoutes";
import genRoute from "./routes/genRoutes"
const app = express();

app.use(express.json());

// Routes
app.use("/api/items", itemRoutes);
app.use("api/genstory",genRoute)



// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
