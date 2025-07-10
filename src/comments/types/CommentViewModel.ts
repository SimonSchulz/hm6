import {CommentatorInfo} from "./CommentatorInfo";

export type CommentViewModel = {
    id: string;
    content: string;
    commentatorInfo: CommentatorInfo;
    postId: string;
    createdAt: string;
}