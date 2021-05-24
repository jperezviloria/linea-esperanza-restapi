import express, {json} from "express";
import cors from "cors";
import morgan from "morgan";
import {config as dotenv} from "dotenv"
import PacienteRoutes from "./routes/paciente.routes";

const app = express();
dotenv();

app.set("port", 7000)

app.use(cors());
app.use(json());
app.use(morgan("dev"));


app.use("/formulario", PacienteRoutes);
app.listen(app.get("port"));
console.log(`Server on port ${app.get("port")}`);

