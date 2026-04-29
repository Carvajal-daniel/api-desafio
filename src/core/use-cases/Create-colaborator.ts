import { randomUUID } from "node:crypto";
import type { Colaborator } from "../entities/Colaborator";
import type { IColaboradorRepo } from "../repositories/IcolaboradorRepo";

export class CreateColaborator {
  constructor(private readonly repository: IColaboradorRepo) {}
  
  async execute({ name, document }: Omit<Colaborator, 'id'>): Promise<Colaborator> {
    if(!name || !document) {
      throw new Error('Nome e documento são obrigatórios')
    }

  
    const alreadyExists = await this.repository.findByDocument(document)
    if(alreadyExists) {
      throw new Error('Colaborador já cadastrado com este documento')
    }
 
    const newColaborator: Colaborator = {
      id: randomUUID(),
      name,
      document
    }

    await this.repository.save(newColaborator)
    return newColaborator
  }
}