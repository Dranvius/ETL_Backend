import { UserRepository } from '../../domain/interfaces/UserRepository';
import { User } from '../../domain/entities/User';

export const createUser = async (
  userRepo: UserRepository,
  data: Omit<User, 'id' | 'createdAt'>
): Promise<User> => {
  // Si quieres, podrías validar aquí antes de guardar
  const existing = await userRepo.findByEmail(data.email);
  if (existing) {
    throw new Error('Email ya registrado');
  }

  const user = await userRepo.create(data);
  return user;
};
