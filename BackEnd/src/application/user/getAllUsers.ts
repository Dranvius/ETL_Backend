import { UserRepository } from '../../domain/interfaces/UserRepository';
import { User } from '../../domain/entities/User';

export const getAllUsers = async (
  userRepo: UserRepository
): Promise<User[]> => {
  return await userRepo.findAll();
};
