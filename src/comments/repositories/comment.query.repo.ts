import {commentCollection, } from "../../db/mongodb";
import {ObjectId, WithId} from "mongodb";
import {Comment} from "../types/comment";

export const commentsQueryRepository = {
    async findByIdOrFail(id: string):  Promise<WithId<Comment> | null>  {
        return commentCollection.findOne({_id: new ObjectId(id)});
    },
};