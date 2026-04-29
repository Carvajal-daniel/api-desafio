import type { Colaborator } from "../entities/Colaborator";

export interface IColaboradorRepo {
  save(c: Colaborator): Promise<void>;
  findById(id: string): Promise<Colaborator | null>;
  findByDocument(document: string): Promise<Colaborator | null>; // Novo método
  findAll(): Promise<Colaborator[]>;
}