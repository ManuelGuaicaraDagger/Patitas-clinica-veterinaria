import { AppDataSource } from "../config/data-source";
import Credential from "../entities/Credential";
import User from "../entities/User";
import createUserDto from "../interfaces/IUserDto";
import { createCredential } from "./credentialServices";

export const userModel = AppDataSource.getRepository(User);

export const getAllUsersServices = async (): Promise<User[]> => {
  const allUsers: User[] = await userModel.find({
    relations: { appointments: true },
  });
  return allUsers;
};

export const getUserByIdServices = async (id: number): Promise<User> => {
  const foundUser: User | null = await userModel.findOne({
    where: { id },
    relations: { appointments: true },
  });
  if (!foundUser) {
    throw Error("Usuario no encontrado");
  }
  return foundUser;
};

export const createUserService = async (
  createUserDto: createUserDto
): Promise<User> => {
  const newUser: User = userModel.create(createUserDto);
  const newCredential: Credential = await createCredential({
    username: createUserDto.username,
    password: createUserDto.password,
  });
  await userModel.save(newUser);
  newUser.credential = newCredential;
  userModel.save(newUser);
  return newUser;
};

export const findUserByCredentialId = async (
  credentialId: number
): Promise<User | null> => {
  const foundUser: User | null = await userModel.findOneBy({
    credential: { id: credentialId },
  });
  return foundUser;
};
