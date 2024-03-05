import { AppDataSource } from "../config/data-source";
import Credential from "../entities/Credential";
import validateCredentialDto from "../interfaces/IValidateCredentialDto";
import createCredentialDto from "../interfaces/IcredentialDto";

const credentialModel = AppDataSource.getRepository(Credential);

export const createCredential = async (
  createCredentialDto: createCredentialDto
): Promise<Credential> => {
  const newCredential: Credential = credentialModel.create(createCredentialDto);
  await credentialModel.save(newCredential);
  return newCredential;
};

export const validateCredential = async (
  validateCredentialDto: validateCredentialDto
): Promise<Credential> => {
  const { username, password } = validateCredentialDto;
  const foundCredential: Credential | null = await credentialModel.findOneBy({
    username,
  });
  if (!foundCredential) {
    throw Error("Usuario no encontrado");
  }
  if (password !== foundCredential.password) {
    throw Error("Password incorrecto");
  }
  return foundCredential;
};
