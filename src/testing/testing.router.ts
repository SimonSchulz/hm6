import { Router, Request, Response } from "express";
import { HttpStatus } from "../core/types/http-statuses";
import {blogCollection, commentCollection, postCollection, userCollection} from "../db/mongodb";

export const testingRouter = Router({});

testingRouter.delete("/all-data", async (req: Request, res: Response) => {
  await Promise.all([
    blogCollection.deleteMany(),
    postCollection.deleteMany(),
    userCollection.deleteMany(),
    commentCollection.deleteMany(),
  ]);
  res.sendStatus(HttpStatus.NoContent);
});
