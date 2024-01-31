import { ServerResponse, IncomingMessage } from "http";
// import { v4 as uuidv4 } from "uuid";

interface User {
  id: string;
  username: string;
  age: number;
  hobbies: string[] | [];
}

const users: User[] = [];

export const getUserHandler = (res: ServerResponse) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(users));
};

export const getUserByIdHandler = (userId: string, res: ServerResponse) => {};

export const createUserHandler = (
  req: IncomingMessage,
  res: ServerResponse
) => {};

export const updateUserHandler = (
  userId: string,
  req: IncomingMessage,
  res: ServerResponse
) => {};

export const deleteUserHandler = (userId: string, res: ServerResponse) => {};

const isValidUUID = (uuid: string): boolean => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};
