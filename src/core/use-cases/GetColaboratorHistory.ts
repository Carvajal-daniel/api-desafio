import type { IColaboradorRepo } from "../repositories/IcolaboradorRepo";
import type { IPointRepo } from "../repositories/IPoint";

export class GetColaboratorHistory {
  constructor(
    private readonly colaboratorRepo: IColaboradorRepo,
    private readonly pointRepo: IPointRepo
  ) {}

  async execute(id: string) {
    const colaborator = await this.colaboratorRepo.findById(id);

    if (!colaborator) {
      throw new Error("Colaborador não encontrado");
    }

    const points = await this.pointRepo.ListByColaboratorId(id);

    return {
      name: colaborator.name,
      document: colaborator.document,
      points
    };
  }
}