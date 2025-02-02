import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreateCustomerController } from './controllers/CreateCustomerController';
import { ListCustomersController } from './controllers/ListCustomersController';
import { DeleteCustomerController } from './controllers/DeleteCustomerController';
import { GetCustomerByIdController } from './controllers/GetCustomerByIdController';
import { UpdateCustomerController } from './controllers/UpdateCustomerController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  // Criar Cliente
  fastify.post("/customer", async (req: FastifyRequest, res: FastifyReply) => {
    return new CreateCustomerController().handle(req, res);
  });

  // Listar Clientes
  fastify.get("/customers", async (req: FastifyRequest, res: FastifyReply) => {
    return new ListCustomersController().handle(req, res);
  });

  // Deletar Cliente
  fastify.delete("/customer", async (req: FastifyRequest, res: FastifyReply) => {
    return new DeleteCustomerController().handle(req, res);
  });

  // Buscar Cliente por ID
  fastify.get("/customer/:id", async (req: FastifyRequest, res: FastifyReply) => {
    return new GetCustomerByIdController().handle(req, res);
  });

  // Atualizar Cliente
  fastify.put("/customer/:id", async (req: FastifyRequest, res: FastifyReply) => {
    return new UpdateCustomerController().handle(req, res);
  });
}
