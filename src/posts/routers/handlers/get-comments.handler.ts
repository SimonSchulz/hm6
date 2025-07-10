import { NextFunction, Request, Response } from "express";
import {postService} from "../../application/posts.service";
import {setSortAndPagination} from "../../../core/helpers/set-sort-and-pagination";
import {HttpStatus} from "../../../core/types/http-statuses";
import {NotFoundError} from "../../../core/utils/app-response-errors";
import {Comment} from "../../../comments/types/comment";
import {commentsService} from "../../../comments/service/comments.service";
import {mapToCommentListModel} from "../../../comments/helpers/map-to-comment-list";
import {CommentQueryInput} from "../../../comments/types/comment-query.input";

export async function getCommentsByPostIdHandler(
    req: Request<{ postId: string }, {}, {}, CommentQueryInput>,
    res: Response,
    next: NextFunction
) {
    try {
        const postId = req.params.postId;
        const post = await postService.findByIdOrFail(postId);
        if(!post) {throw new NotFoundError("Post not found");}
        const query = setSortAndPagination(req.query);
        const { items, totalCount } = await commentsService.findCommentsByPostId(postId, query);
        const result = mapToCommentListModel(items, totalCount, query);
        res.status(HttpStatus.Ok).send(result);
    } catch (e: unknown) {
        next(e);
    }
}