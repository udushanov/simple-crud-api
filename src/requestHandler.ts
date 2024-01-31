import { IncomingMessage, ServerResponse } from "http";
import {
  getUserHandler,
  getUserByIdHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
} from "./userController";

export const handleRequest = (
  method: string,
  pathname: string,
  query: any,
  req: IncomingMessage,
  res: ServerResponse
) => {
  switch (method) {
    case "GET":
      if (pathname === "/api/users") {
        getUserHandler(res);
      } else if (pathname === "/api/users" && query.userId) {
        getUserByIdHandler(query.userId, res);
      }
      break;
    case "POST":
      if (pathname === "/api/users") {
        createUserHandler(req, res);
      }
      break;
    case "PUT":
      if (pathname === "/api/users" && query.userId) {
        updateUserHandler(query.userId, req, res);
      }
      break;
    case "DELETE":
      if (pathname === "/api/users" && query.userId) {
        deleteUserHandler(query.userId, res);
      }
      break;
    default:
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Not found" }));
  }
};
