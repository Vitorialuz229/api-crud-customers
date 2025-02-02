import { CreateCustomerProps } from "../models/CreateCustomerProps";
import prismaClient from "../prisma";

class CreateCustomerService {
  async execute({ name, email }: CreateCustomerProps) {
    if (!name || !email) {
      throw new Error("Name and email are required");
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: true,
      },
    });

    return customer;
  }
}

export default CreateCustomerService;
