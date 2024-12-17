import { ID, Query } from "node-appwrite"
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

export const createJob = async (job) => {
    try {
        const newJob = await database.createDocument(
            REACT_APP_DATABASE_ID,
            REACT_APP_JOBS_COLLECTION_ID,
            ID.unique(),
            {
                ...job
            }
        )

        return JSON.parse(JSON.stringify(newJob));
    } catch (error) {
        console.log("Error creating job: ",error)
    }
}

export const updateJob = async (job) => {
    try {
        const newJob = await database.updateDocument(
            REACT_APP_DATABASE_ID,
            REACT_APP_JOBS_COLLECTION_ID,
            ID.unique(),
            {
                ...job
            }
        )

        return JSON.parse(JSON.stringify(newJob));
    } catch (error) {
        console.log("Error creating job: ",error)
    }
}