import { ID, Query } from "node-appwrite"
import { users } from "../appwrite.config";

export const createUser = async (user) => {
    try {
        const newUser = await users.create(ID.unique(), user.email, undefined, user.password, user.role)
        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        console.log("Error: ",error.message)
        if(error && error?.code === 409){
            const documents = await users.list([
                Query.equal('email', [user.email])
            ])

            return documents?.users[0];
        }
    }
}