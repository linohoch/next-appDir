import NextAuth, {User} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github";
import {UserType} from "../../../store/user";

export const authOptions = {
    pages :{},
    providers: [
        CredentialsProvider({
            name:'DomainAccount',
            credentials:{
                username:{label:"username", type:"text", placeholder:"username"},
                password:{label:"password", type:"password"}
            },
            async authorize(credentials) {
                // const user={email:"",name:""}
                const endpointUrl = "/"
                const res = await fetch(endpointUrl, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()
                if(user && res){
                    return user
                }else{
                    return null
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        })
    ],
    callbacks : {

    }
}

export default NextAuth(authOptions)