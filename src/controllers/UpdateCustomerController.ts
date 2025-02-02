import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateCustomerService } from "../services/UpdateCustomerService";

class UpdateCustomerController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    const { id } = request.params as { id: string };
    const { name, email } = request.body as { name: string; email: string };

    const updateCustomerService = new UpdateCustomerService();

    const customer = await updateCustomerService.execute({
      id,
      name,
      email,
    });

    response.send(customer);
  }
}

export { UpdateCustomerController };
