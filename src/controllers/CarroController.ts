import { Request, Response } from "express";
import CarroSchema from "../models/CarroSchema";

class CarroController {
  async listar(request: Request, response: Response) {
    response.status(200).json(await CarroSchema.find({}));
  }


  async cadastrar(request: Request, response: Response) {

    try {
      const { placa } = request.body;
      if (await CarroSchema.exists({ placa })) {
        response.status(400).json({ msg: "Carro duplicado pela Placa" });
      } else {
        const novoCarro = await CarroSchema.create(request.body);
        response.status(201).json(novoCarro);
      }
    } catch {
      response.status(400).json({ msg: "Erro ao cadastrar o carro!" });
    }
  }
}

export { CarroController };
