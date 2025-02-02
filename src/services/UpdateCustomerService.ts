import prismaClient from "../prisma";
import { IUpdateCustomerRequest } from "../models/IUpdateCustomerRequest";

class UpdateCustomerService {
  async execute({ id, name, email }: IUpdateCustomerRequest) {
    if (!/^[0-9a-fA-F]{24}$/.test(id)) {
      throw new Error("ID inválido");
    }

    try {
      const updatedCustomer = await prismaClient.customer.update({
        where: {
          id: id,  
        },
        data: {
          name,  
          email,
        },
      });

      if (!updatedCustomer) {
        throw new Error("Customer not found");
      }

      return updatedCustomer;

    } catch (error) {
      throw new Error("Error updating client");
    }
  }
}

export { UpdateCustomerService };
