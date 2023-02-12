'use client'

import {useSession, signIn, signOut} from "next-auth/react";
import {UserCard} from "./userCard";

export default function Login (){
    const { data : session , status} = useSession();

    if(session){
        return(
            <>
                <button onClick={()=>signOut()} type="button">Sign out</button>
                <div>
                    <p>useremail- {session.user?.userId}</p>
                </div>
            </>
        )
    } else {
        return(
            <>
                <button onClick={()=>signIn()} type="button">Sign in</button>
            </>
        )
    }
}