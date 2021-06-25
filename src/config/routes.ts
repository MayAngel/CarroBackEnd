import { Router } from "express";
import { CarroController } from "../controllers/CarroController";

const router = Router();
const carroController = new CarroController();

router.post("/carro/cadastrar", carroController.cadastrar);
router.get("/carro/listar", carroController.listar);

export { router };
