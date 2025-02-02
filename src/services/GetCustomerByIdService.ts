import prismaClient from "../prisma";  

class GetCustomerByIdService {
  async execute(id: string) {
    if (!/^[0-9a-fA-F]{24}$/.test(id)) {
      throw new Error('ID inválido');
    }

    try {
      const customer = await prismaClient.customer.findUnique({
        where: {
          id: id,  
        },
      });

      if (!customer) {
        throw new Error('Customer not found');
      }

      return customer;

    } catch (error) {
      throw new Error('Error when searching for customer');
    }
  }
}

export { GetCustomerByIdService };
