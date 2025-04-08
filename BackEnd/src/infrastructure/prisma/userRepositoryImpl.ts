import { UserRepository } from '../../domain/interfaces/UserRepository';
import { User } from '../../domain/entities/User';
import { prisma } from './prismaClient';

export const userRepositoryImpl: UserRepository = {
  async create(data) {
    const user = await prisma.user.create({
      data,
    });
    return user;
  },

  async findAll() {
    return await prisma.user.findMany();
  },

  async findByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email },
    });
  },
};
