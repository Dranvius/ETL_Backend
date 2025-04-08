import { Request, Response } from 'express';
import { createUser } from '../application/user/createUSer';
import { getAllUsers } from '../application/user/getAllUsers';
import { userRepositoryImpl } from '../infrastructure/prisma/userRepositoryImpl';
import { fetchAndStoreUsers } from '../application/user/fetchAndStoreUsers';


export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUser(userRepositoryImpl, req.body);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllUsersController = async (_req: Request, res: Response) => {
  const users = await getAllUsers(userRepositoryImpl);
  res.json(users);
};


export const fetchUsersFromAPI = async (_req: Request, res: Response) => {
    try {
      const users = await fetchAndStoreUsers(userRepositoryImpl);
      res.status(201).json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };