import { FastifyReply, FastifyRequest } from "fastify";
import { GetCustomerByIdService } from "../services/GetCustomerByIdService";

class GetCustomerByIdController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { id } = req.params as { id: string };

    const customer = await new GetCustomerByIdService().execute(id);

    return res.send(customer);
  }
}

export { GetCustomerByIdController };
