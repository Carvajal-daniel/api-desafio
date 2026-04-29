import type { IColaboradorRepo } from "../repositories/IcolaboradorRepo";
import type { Colaborator } from "../entities/Colaborator";

export class ListColaborators {
  constructor(private readonly repository: IColaboradorRepo) {}

  async execute(): Promise<Colaborator[]> {
    return await this.repository.findAll();
  }
}