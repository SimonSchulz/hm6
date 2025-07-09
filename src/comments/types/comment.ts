import {CommentatorInfo} from "./CommentatorInfo";

export type Comment = {
    id: string;
    content: string;
    commentatorInfo: CommentatorInfo
    createdAt: string;
}