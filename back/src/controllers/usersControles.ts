import { Request, Response } from "express";
import IUser from "../interfaces/Iusers";
import {
  createUserService,
  getAllUsersServices,
  getUserByIdServices,
} from "../services/userServices";

export const getAllUsers = async (req: Request, res: Response) => {
  const users: IUser[] = await getAllUsersServices();
  res.status(200).json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await getUserByIdServices(Number(id));
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser: IUser = await createUserService({
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
  res.status(200).json({ message: "POST /users/login" });
};
