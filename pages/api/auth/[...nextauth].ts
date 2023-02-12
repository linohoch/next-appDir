import NextAuth, {User} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github";
import {UserType} from "../../../store/user";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";
import {signOut} from "next-auth/react";
import {redirect} from "next/navigation";
import {mockProviders} from "next-auth/client/__tests__/helpers/mocks";
import callbackUrl = mockProviders.github.callbackUrl;

// @ts-ignore
export const authOptions = {
    pages :{},
    session : {
      strategy : "jwt"
    },
    secret : process.env.SECRET,
    providers: [
        CredentialsProvider({
            name:'DomainAccount',
            credentials:{
                username:{label:"username", type:"text", placeholder:"username"},
                password:{label:"password", type:"password"}
            },
            async authorize(credentials) {
                if (typeof credentials !== 'undefined') {
                    // const user={email:"",name:""}
                    const endpointUrl = `${process.env.BASE_URL}/auth/signin`;
                    const res = await fetch(endpointUrl, {
                        method: 'POST',
                        body: JSON.stringify({
                            userId: credentials.username,
                            pw: credentials.password
                        }),
                        headers: {"Content-Type": "application/json"}
                    })
                    const user = await res.json()
                    if (user && res) {
                        return user
                    } else {
                        return null
                    }
                }
            },
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
        async jwt({token, user, account}:any) {
            if(account?.provider==='google'){
                console.log(account)
                // const res = await fetch('loadbyidandsignupUrl',{
                //     method: 'POST',
                //     body: JSON.stringify({
                //         userId: user.username
                //     }),
                //     headers: {"Content-Type": "application/json"}})
                // if(res.status==202){
                //     await redirect("/auth/signup")
                // }
                // user.accessToken='';
            }
            if (user) {
                //refreshAccessToken
                return {
                    ...token,
                    accessToken: user.accessToken,
                    userId: user.username
                }
            }
            return token
        },
        async session({session, token, user}:any) {
            session.user.accessToken = token.accessToken
            session.user.userId = token.userId
            return session
        }
    }
}
//@ts-ignore
export default NextAuth(authOptions)