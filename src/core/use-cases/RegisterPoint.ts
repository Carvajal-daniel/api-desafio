import { randomUUID } from "node:crypto";
import type { Point } from "../entities/Point";
import type { IColaboradorRepo } from "../repositories/IcolaboradorRepo";
import type { IPointRepo } from "../repositories/IPoint";

export class RegisterPoint {
  constructor(
    private readonly pointRepo: IPointRepo,
    private readonly colaboratorRepo: IColaboradorRepo
  ) {}

  async execute(document: string): Promise<Point> {
   const colaborator = await this.colaboratorRepo.findByDocument(document);
  
  if (!colaborator) {
    throw new Error("Colaborador não encontrado para registrar ponto");
  }

    const newPoint: Point = {
      id: randomUUID(),
      colaboratorId: colaborator.id,
      createdAt: new Date(),
      company: "PontoGo" 
    };

    
    await this.pointRepo.save(newPoint);

    return newPoint;
  }
}