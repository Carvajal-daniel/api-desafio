import Fastify from "fastify";
import cors from "@fastify/cors";

// Repositories
import { DrizzleColaboradorRepo } from "./infrastructure/persistence/DrizzleColaboradorRepo";
import { DrizzlePointRepo } from "./infrastructure/persistence/DrizzlePointRepo";

// Use Cases
import { CreateColaborator } from "./core/use-cases/Create-colaborator";
import { RegisterPoint } from "./core/use-cases/RegisterPoint";
import { ListColaborators } from "./core/use-cases/ListColaborators";
import { GetColaboratorHistory } from "./core/use-cases/GetColaboratorHistory";

// Controllers
import { ColaboratorController } from "./infrastructure/http/controllers/ColaboratorController";
import { PointController } from "./infrastructure/http/controllers/PointController";

const app = Fastify({ logger: true });

app.register(cors, {
  origin: [
    "https://front-desafio-sooty.vercel.app", 
    "http://localhost:3000"                  
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true 
});

// Injeção de Dependências
const colaboratorRepo = new DrizzleColaboradorRepo();
const pointRepo = new DrizzlePointRepo();

const createColaborator = new CreateColaborator(colaboratorRepo);
const registerPoint = new RegisterPoint(pointRepo, colaboratorRepo);
const listColaborators = new ListColaborators(colaboratorRepo);
const getColaboratorHistory = new GetColaboratorHistory(colaboratorRepo, pointRepo);

const colaboratorController = new ColaboratorController(createColaborator);
const pointController = new PointController(registerPoint);

// Rotas
app.post("/colaborators", (req, res) => colaboratorController.handleCreate(req, res));
app.get("/colaborators", () => listColaborators.execute());
app.get("/colaborators/:id/history", async (req, res) => {
  const { id } = req.params as { id: string };
  try {
    return await getColaboratorHistory.execute(id);
  } catch (e: any) {
    return res.status(404).send({ error: e.message });
  }
});
app.post("/points", (req, res) => pointController.handleRegister(req, res));

export { app };