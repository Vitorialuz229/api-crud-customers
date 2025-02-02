import { DeleteCustomerProps } from "../models/DeleteCustomerProps";
import prismaClient from "../prisma";

class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {
    if (!id) {
      throw new Error("ID is required");
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) {
      throw new Error("Customer not found");
    }

    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id,
      },
    });

    return { message: "Customer deleted successfully" };
  }
}

export { DeleteCustomerService };
