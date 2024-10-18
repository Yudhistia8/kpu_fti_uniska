import { z } from "zod";

export class LoginValidation {
  static Login = {
    npm: z.number({ message: "Invalid npm" }).min(0).max(12),
    password: z.string({ message: "Invalid password" }),
  };
}
