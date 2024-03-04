import IUserDto from "../interfaces/IUserDto";
import ICredential from "../interfaces/Icredentials";
import IUser from "../interfaces/Iusers";
import { createCredential } from "./credentialServices";

const users: IUser[] = [
  {
    id: 1,
    name: "Homero",
    email: "Homero@gmail.com",
    birthdate: "12/2/1980",
    nDni: "13145654",
    credentialId: 1,
  },
];

let userId: number = 2;

export const getAllUsersServices = async () => {
  const allUsers: IUser[] = users;
  return allUsers;
};

export const getUserByIdServices = async (
  id: number
): Promise<IUser | null> => {
  const foundUser: IUser | undefined = users.find((user) => user.id === id);
  if (!foundUser) {
    throw Error("Usuario no encontrado");
  }
  return foundUser;
};

export const createUserService = async (
  createUserDto: IUserDto
): Promise<IUser> => {
  const newCredential: ICredential = await createCredential({
    username: createUserDto.username,
    password: createUserDto.password,
  });
  const newUser: IUser = {
    id: userId++,
    name: createUserDto.name,
    email: createUserDto.email,
    birthdate: createUserDto.birthdate,
    nDni: createUserDto.nDni,
    credentialId: newCredential.id,
  };
  users.push(newUser);
  return newUser;
};
