import jwt from "jsonwebtoken";

export const token = (User) => {
  const token = jwt.sign({ userId: user.id }, "mey1***", { expiresIn: "2h" });

  user.token = token;
};
