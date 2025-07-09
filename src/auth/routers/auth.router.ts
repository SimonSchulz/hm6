import { Router } from "express";
import { passwordValidation } from "../../user/validation/password.validation";
import { loginOrEmailValidation } from "../../user/validation/login.or.emaol.validation";
import { inputValidationResultMiddleware } from "../../core/utils/input-validtion-result.middleware";

import { authLoginHandler } from "./handlers/login-handler";

export const authRouter = Router();

authRouter.post(
  "/login",
  passwordValidation,
  loginOrEmailValidation,
  inputValidationResultMiddleware,
  authLoginHandler,
);
