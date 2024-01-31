import http from "http";
import { parse, UrlWithStringQuery } from "url";
import { handleRequest } from "./requestHandler";

const server = http.createServer((req, res) => {
  const { pathname, query } = parse(req.url as string, true);
  handleRequest(req.method as string, pathname as string, query, req, res);
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
