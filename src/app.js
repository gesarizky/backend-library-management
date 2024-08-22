import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import servicesRoutes from "./routes/servicesRoutes.js";
import swagger from "./swagger.js";

const app = express();

app.use(express.json());
app.use("/api", bookRoutes);
app.use("/api", memberRoutes);
app.use("/api", servicesRoutes);
app.use(swagger);

export default app;
