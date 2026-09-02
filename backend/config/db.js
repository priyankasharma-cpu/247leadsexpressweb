import mongoose from "mongoose";
import dns from "dns";

const connectDB = async () => {
    try {
        // Use reliable public DNS servers
        dns.setServers([
            "1.1.1.1",
            "8.8.8.8",
        ]);

        const mongoURI = process.env.MONGODB_URI;

        if (!mongoURI) {
            throw new Error("MONGO_URI is not defined in .env");
        }

        await mongoose.connect(mongoURI, {
            serverSelectionTimeoutMS: 10000,
        });

        console.log("========================================");
        console.log("✅ MongoDB Connected Successfully");
        console.log("========================================");

    } catch (error) {
        console.error("❌ MongoDB Connection Failed");
        console.error(error.message);

        process.exit(1);
    }
};

export default connectDB;