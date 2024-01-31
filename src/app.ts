import http from "http";

interface User {
  id: string;
  username: string;
  age: number;
  hobbies: string[] | [];
}

const users: User[] = [];

const server = http.createServer((req, res) => {});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
