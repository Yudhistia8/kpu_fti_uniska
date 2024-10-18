import { Validation } from "../validation/Validation";

class LoginSrvice {
  static async login(req) {
    const userRequest = Validation.Validate();
  }
}
