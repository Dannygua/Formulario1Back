import express from "express";
import cors from "cors";
import InfoRoutes from "./routes/infoRoutes.js";

const app = express();
app.use(express.json());

const whitelist = ['https://incoop.coop'];

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Error de Cors"));
        }
    },
};

app.use(cors(corsOptions));

app.use("/api/Info", InfoRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});