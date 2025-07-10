import { NextFunction, Request, Response } from "express";
import { PostInputDto } from "../../dto/post.input-dto";
import { postService } from "../../application/posts.service";
import { HttpStatus } from "../../../core/types/http-statuses";
import { NotFoundError } from "../../../core/utils/app-response-errors";
import {commentsService} from "../../../comments/service/comments.service";
import {CommentatorInfo} from "../../../comments/types/CommentatorInfo";
import {mapToCommentViewModel} from "../../../comments/helpers/map-to-comment-view-model";

export async function createCommentByPostIdHandler(
    req: Request<{ PostId: string }, {}, PostInputDto>,
    res: Response,
    next: NextFunction,
) {
    try {
        const postId = req.params.PostId;
        let post = await postService.findByIdOrFail(postId);
        if (!post) {
            throw new NotFoundError("Post with this Id not found");
        }
        const userInfo: CommentatorInfo =res.locals.user;
        let comment = await commentsService.create(req.body, userInfo, postId );
        const commentViewModel = mapToCommentViewModel(comment);
        res.status(HttpStatus.Created).send(commentViewModel);
    } catch (e: unknown) {
        next(e);
    }
}
