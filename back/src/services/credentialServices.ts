import ICredentialDto from "../interfaces/IcredentialDto";
import ICredential from "../interfaces/Icredentials";

const credentials: ICredential[] = [];
let credentialId: number = 1;

export const createCredential = async (
  createCredentialDto: ICredentialDto
): Promise<ICredential> => {
  const newCredential: ICredential = {
    id: credentialId++,
    username: createCredentialDto.username,
    password: createCredentialDto.password,
  };
  credentials.push(newCredential);
  return newCredential;
};

export const validateCredential = async (
  validateCredentialDto: ICredentialDto
): Promise<ICredential> => {
  const { username, password } = validateCredentialDto;
  const foundCredential = credentials.find(
    (credential) => credential.username === username
  );
  if (!foundCredential) {
    throw Error("Usuario no encontrado");
  }
  if (password !== foundCredential.password) {
    throw Error("Contraseña incorrecta");
  }
  return foundCredential;
};
