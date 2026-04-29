import { eq } from "drizzle-orm";
import { db } from "./connection";
import { points } from "./schema";
import type { Point } from "../../core/entities/Point";
import type { IPointRepo } from "../../core/repositories/IPoint";

export class DrizzlePointRepo implements IPointRepo {
  async save(point: Point): Promise<void> {
    try {
      await db.insert(points).values({
        id: point.id,
        colaboratorId: point.colaboratorId,
        createdAt: point.createdAt,
        company: point.company,
      });
    } catch (error) {
      console.error("Erro ao salvar ponto:", error);
      throw new Error("Falha ao registrar ponto no banco de dados");
    }
  }

  async ListByColaboratorId(colaboratorId: string): Promise<Point[]> {
    try {
      return await db
        .select()
        .from(points)
        .where(eq(points.colaboratorId, colaboratorId));
    } catch (error) {
      console.error("Erro ao listar pontos:", error);
      return [];
    }
  }
}