import {idValidation} from "../../core/utils/params-id.validation";
import {inputValidationResultMiddleware} from "../../core/utils/input-validtion-result.middleware";
import {Router} from "express";
import {authMiddleware} from "../../auth/auth-middleware";
import {contentValidation} from "../validation/comment.input-dto.validation";
import {deleteCommentHandler} from "./handlers/delete-comment-handler";
import {updateCommentHandler} from "./handlers/update-comment-handler";
import {getCommentHandler} from "./handlers/get-comment-handler";

export const commentsRouter = Router({});

commentsRouter
    .get('/:id', idValidation, inputValidationResultMiddleware, getCommentHandler)

    .put(
        '/:id',
        authMiddleware,
        idValidation,
        contentValidation,
        inputValidationResultMiddleware,
        updateCommentHandler,
    )

    .delete(
        '/:id',
        authMiddleware,
        idValidation,
        inputValidationResultMiddleware,
        deleteCommentHandler,
    );