import { Request, Response } from "express";
import {
  createUserService,
  findUserByCredentialId,
  getAllUsersServices,
  getUserByIdServices,
} from "../services/userServices";
import User from "../entities/User";
import { validateCredential } from "../services/credentialServices";

export const getAllUsers = async (req: Request, res: Response) => {
  const users: User[] = await getAllUsersServices();
  res.status(200).json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user: User = await getUserByIdServices(Number(id));
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser: User = await createUserService({
      name,
      email,
      birthdate,
      nDni,
      username,
      password,
    });
    res.status(200).json(newUser);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const credential = await validateCredential({
      username,
      password,
    });
    const user = await findUserByCredentialId(credential.id);
    res.status(200).json({ login: true, user });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
