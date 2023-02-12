import { DefaultSession} from "next-auth";
import {UserType} from "../store/user";

export function UserCard( user : DefaultSession["user"]){

    return (
        <div>
            <p>useremail- {user?.name}</p>
            {JSON.stringify(user)}
        </div>
    )
}