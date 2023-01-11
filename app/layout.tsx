import Header from '../components/header'
import React from "react";
// import RootStyleRegistry from "./RootStyleRegistry";
import RootStyleRegistry from "../lib/styledComponentsRegistry";
import GlobalStyle from "../styles/globalStyle";
import ProvidersWrapper from "./providersWrapper"

function RootLayout ({children}:{
    children:React.ReactNode;
}) {
    return (
        <html>
            <body style={{margin:0}}>
                <ProvidersWrapper>
                    <RootStyleRegistry>
                        <Header/>
                        {children}
                    </RootStyleRegistry>
                </ProvidersWrapper>
            </body>
        </html>
    )
}
export default RootLayout
//기존에 pages 내부에 있던 _app.tsx와 _document.tsx가 여기로 통합