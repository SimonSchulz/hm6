import { NextFunction, Request, Response } from "express";
import { NotFoundError } from "../../../core/utils/app-response-errors";
import {commentsService} from "../../service/comments.service";

export async function getCommentHandler(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const id = req.params.id;
        const comment = await commentsService.findByIdOrFail(id);
        if (!comment) {
            throw new NotFoundError("Comment not found");
        }
        res.send(comment);
    } catch (e: unknown) {
        next(e);
    }
}
