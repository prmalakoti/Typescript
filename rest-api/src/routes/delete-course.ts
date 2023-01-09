import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
import {isInteger} from "../utils";
import {AppDataSource} from "../data-source";
import {Lesson} from "../models/lesson";
import {Course} from "../models/course";


export async function deleteCourseAndLessons(
    request: Request, response: Response, next:NextFunction) {

    try {

        const courseId = request.params.courseId;

        logger.debug(`Called deleteCourseAndLessons() ${courseId}`);

        if (!isInteger(courseId)) {
            throw `Invalid courseId ${courseId}`;
        }

        const res = await AppDataSource.manager.transaction(
            async (transactionalEntityManager) => {

                await transactionalEntityManager
                    .createQueryBuilder()
                    .delete()
                    .from(Lesson)
                    .where("courseId = :courseId", {courseId})
                    .execute();

                let deleteRes = await transactionalEntityManager
                    .createQueryBuilder()
                    .delete()
                    .from(Course)
                    .where("id = :courseId",{courseId})
                    .execute();
                return deleteRes;
            }
        );

        if(res?.affected != 0){
            response.status(200).json({
                message: `Course deleted successfully ${courseId}`
            });
        } else{
            response.status(204).json({
                message: `Course ${courseId} not found in database`
            });
        }

    }
    catch(error) {
        logger.error(`Error calling deleteCourseAndLessons()`);
        return next(error);
    }

}
