import Header from "../../components/header";
import ArticleList from "./ArticleList";
import React from "react";

function RootLayout ({
     children
}:{
    children:React.ReactNode;
}) {
    return (
        <main>
            <div>
                {/* @ts-ignore */}
                <ArticleList/>
            </div>
            <div>
                {children}
            </div>
        </main>

    )
}
export default RootLayout