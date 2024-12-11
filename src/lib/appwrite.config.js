import * as sdk from 'node-appwrite';

export const { 
    REACT_APP_PROJECT_ID,
    REACT_APP_API_KEY,DATABASE_ID,
    REACT_APP_USER_COLLECTION_ID,
    REACT_APP_JOBS_COLLECTION_ID, 
    REACT_APP_PUBLIC_ENDPOINT:ENDPOINT 
} = process.env

const client = new sdk.Client();
console.log("endpoint: ",ENDPOINT)
client.setEndpoint(ENDPOINT).setProject(REACT_APP_PROJECT_ID).setKey(REACT_APP_API_KEY);

export const database = new sdk.Databases(client);
export const users = new sdk.Users(client);