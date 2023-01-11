import { DefaultSession} from "next-auth";

export function UserCard({ user }:{ user:DefaultSession["user"]}){

    return (
        <div>
            <p>username- {user?.name}</p>
            <p>useremail- {user?.email}</p>
        </div>
    )
}