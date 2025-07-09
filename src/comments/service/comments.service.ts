import {Comment} from "../types/comment";
import {WithId} from "mongodb";
import {CommentInputDto} from "../dto/comment.input-dto";
import {commentsRepository} from "../repositories/comment.repo";

export const commentsService = {
    async findByIdOrFail(id: string): Promise<WithId<Comment> | null> {
        return commentsRepository.findByIdOrFail(id);
    },

    async update(id: string, dto: CommentInputDto): Promise<void> {
        await commentsRepository.update(id, dto);
        return;
    },

    async delete(id: string): Promise<void> {
        await commentsRepository.delete(id);
        return;
    },
};