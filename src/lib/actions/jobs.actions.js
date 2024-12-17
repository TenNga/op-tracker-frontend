import { Query } from "node-appwrite"
import { database, REACT_APP_DATABASE_ID, REACT_APP_JOBS_COLLECTION_ID } from "../appwrite.config"

export const getJobs = async () => {
    try {
        const jobs = await database.listDocuments(
            REACT_APP_DATABASE_ID,
            REACT_APP_JOBS_COLLECTION_ID,
            [Query.orderDesc('$createdAt'),Query.equal("user_id",localStorage.getItem('user_id'))],
            // [Query.contains('$permissions', `read("user:${localStorage.getItem('user_id')}")`),Query.orderDesc('$createdAt')]
        );

        return JSON.parse(JSON.stringify(jobs.documents));
    } catch (error) {
        console.log(error)
    }
}