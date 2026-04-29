
import type { FastifyRequest, FastifyReply } from "fastify";
import { CreateColaborator } from "../../../core/use-cases/Create-colaborator";

export class ColaboratorController {
  constructor(private readonly createColaborator: CreateColaborator) {}

  async handleCreate(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { name, document } = request.body as { name: string; document: string };
      const result = await this.createColaborator.execute({ name, document });
      
      return reply.status(201).send(result);
    } catch (error: any) {
      return reply.status(400).send({ error: error.message });
    }
  }
}