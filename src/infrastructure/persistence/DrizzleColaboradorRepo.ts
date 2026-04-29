import { eq } from "drizzle-orm";
import type { Colaborator } from "../../core/entities/Colaborator";
import type { IColaboradorRepo } from "../../core/repositories/IcolaboradorRepo";
import { db } from "./connection";
import { colaborators } from "./schema";

export class DrizzleColaboradorRepo implements IColaboradorRepo {
  async save(c: Colaborator): Promise<void> {
    try {
      await db.insert(colaborators).values({
        id: c.id,
        name: c.name,
        document: c.document,
      });
    } catch (error) {
      console.error("Erro ao salvar colaborador:", error);
      throw new Error("Falha ao persistir colaborador no banco de dados");
    }
  }

  async findByDocument(document: string): Promise<Colaborator | null> {
    try {
      const [result] = await db
        .select()
        .from(colaborators)
        .where(eq(colaborators.document, document));
      
      return result || null;
    } catch (error) {
      console.error("Erro ao buscar por documento:", error);
      return null;
    }
  }

  async findById(id: string): Promise<Colaborator | null> {
    try {
      const [result] = await db
        .select()
        .from(colaborators)
        .where(eq(colaborators.id, id));
      
      return result || null;
    } catch (error) {
      console.error("Erro ao buscar por ID:", error);
      return null;
    }
  }

  async findAll(): Promise<Colaborator[]> {
    try {
      return await db.select().from(colaborators);
    } catch (error) {
      console.error("Erro ao listar todos:", error);
      return [];
    }
  }
}