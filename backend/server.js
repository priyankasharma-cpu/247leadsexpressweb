import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import compression from "compression";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";


dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

/* =========================================================
   SECURITY
========================================================= */

app.use(helmet());


/* =========================================================
   CORS
========================================================= */

app.use(
    cors({
        origin: process.env.FRONTEND_URL || "http://localhost:5173",
        credentials: true,
    })
);


/* =========================================================
   MIDDLEWARE
========================================================= */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(compression());
app.use("/api/contact", contactRoutes);

/* =========================================================
   TEST ROUTE
========================================================= */

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "247 Leads Express Backend is running 🚀",
    });
});


/* =========================================================
   SERVER
========================================================= */

app.listen(PORT, () => {
    console.log(`
========================================
🚀 247 Leads Express Backend
========================================
Server running on: http://localhost:${PORT}
Environment: ${process.env.NODE_ENV || "development"}
========================================
`);
});