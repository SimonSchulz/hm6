import { NextFunction, Request, Response } from 'express';
import {jwtService} from "../../application/jwt.service";
import {AuthorizationError} from "../../../core/utils/app-response-errors";

export const accessTokenGuard = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    if (!req.headers.authorization)  throw new AuthorizationError();

    const [authType, token] = req.headers.authorization.split(' ');

    if (authType !== 'Bearer' || !token)  throw new AuthorizationError();

    const payload = await jwtService.verifyToken(token);
    if (!payload) throw new AuthorizationError();
    res.locals.userInfo = payload;
    next();
};