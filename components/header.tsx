'use client'

import React from "react"
import Link from "next/link"
import styles from "../styles/Home.module.css"
import styled from "styled-components"
// import { GoogleLogin } from '@react-oauth/google';
// import { GoogleOAuthProvider} from "@react-oauth/google";
import Login from "../app/Login";

const Header:React.FC=()=>{
    return(
        <header className={styles.header}>
            <div>header</div>
            <Link href="/">home</Link>
            <Link href={"/board"}>board</Link>
            <Login/>
        </header>
    )
}
export default Header