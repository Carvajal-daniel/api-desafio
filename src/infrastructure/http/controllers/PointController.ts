import type { FastifyRequest, FastifyReply } from "fastify";
import { RegisterPoint } from "../../../core/use-cases/RegisterPoint";

export class PointController {
  constructor(private readonly registerPoint: RegisterPoint) {}

  async handleRegister(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { document } = request.body as { document: string };
      const result = await this.registerPoint.execute(document);
      
      return reply.status(201).send(result);
    } catch (error: any) {
      return reply.status(400).send({ error: error.message });
    }
  }
}