import type { Point } from "../entities/Point";

export interface IPointRepo {
  save(point: Point): Promise <void>
  ListByColaboratorId(colaboratorId: string): Promise<Point[]>
}