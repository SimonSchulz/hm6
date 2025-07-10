import {WithId} from "mongodb";
import {CommentViewModel} from "../types/CommentViewModel";
import {Comment} from "../types/comment";

export function mapToCommentViewModel(comment: WithId<Comment>): CommentViewModel {
    return {
        id: comment._id.toString(),
        commentatorInfo: comment.commentatorInfo,
        content: comment.content,
        postId: comment.postId,
        createdAt: comment.createdAt,
    };
}