import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "../../../core/types/http-statuses";
import { NotFoundError } from "../../../core/utils/app-response-errors";
import {commentsService} from "../../service/comments.service";
import {CommentInputDto} from "../../dto/comment.input-dto";

export async function updateCommentHandler(
    req: Request<{ id: string }, {}, CommentInputDto>,
    res: Response,
    next: NextFunction
) {
    try {
        const id = req.params.id;
        const post = await commentsService.findByIdOrFail(id);
        if (!post) { throw new NotFoundError('Comment not found'); }
        await commentsService.update(id, req.body);
        res.sendStatus(HttpStatus.NoContent);
    } catch (e: unknown) {
        next(e);
    }
}
