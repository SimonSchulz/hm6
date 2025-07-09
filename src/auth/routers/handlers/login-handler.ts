import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "../../../core/types/http-statuses";
import { LoginDto } from "../../dto/login.dto";
import { authService } from "../../application/authService";
import { AuthorizationError } from "../../../core/utils/app-response-errors";

export async function authLoginHandler(
  req: Request<{}, {}, LoginDto>,
  res: Response,
  next: NextFunction,
) {
  try {
    const { loginOrEmail, password } = req.body;
    const accessToken = await authService.loginUser(loginOrEmail, password);
    if (!accessToken) {
      throw new AuthorizationError("Wrong credentials");
    }
    res.sendStatus(HttpStatus.NoContent);
  } catch (e: unknown) {
    next(e);
  }
}
