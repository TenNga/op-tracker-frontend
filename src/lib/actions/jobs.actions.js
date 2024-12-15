import { Query } from "node-appwrite"
import { database, REACT_APP_DATABASE_ID, REACT_APP_JOBS_COLLECTION_ID } from "../appwrite.config"

export const getJobs = async () => {
    try {
        const jobs = await database.listDocuments(
            REACT_APP_DATABASE_ID,
            REACT_APP_JOBS_COLLECTION_ID,
            [Query.orderDesc('$createdAt')]
        );

        return JSON.parse(JSON.stringify(jobs.documents));
    } catch (error) {
        console.log(error)
    }
}