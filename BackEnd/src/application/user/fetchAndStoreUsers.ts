import axios from 'axios';
import { UserRepository } from '../../domain/interfaces/UserRepository';
import { User } from '../../domain/entities/User';

interface RandomUser {
  name: {
    first: string;
    last: string;
  };
  email: string;
}

export const fetchAndStoreUsers = async (
  userRepo: UserRepository,
  amount = 5
): Promise<User[]> => {
  const response = await axios.get(`https://randomuser.me/api/?results=${amount}`);

  const fetchedUsers: RandomUser[] = response.data.results;

  const savedUsers: User[] = [];

  for (const ru of fetchedUsers) {
    const fullName = `${ru.name.first} ${ru.name.last}`;
    const email = ru.email;

    // Verifica si ya existe
    const exists = await userRepo.findByEmail(email);
    if (exists) continue;

    const newUser = await userRepo.create({ name: fullName, email });
    savedUsers.push(newUser);
  }

  return savedUsers;
};
