'use client'

import ReduxProvider from "../store/reduxProvider"
import { SessionProvider} from "next-auth/react";
import React from "react";

export default function ProvidersWrapper({ children }:{children:React.ReactNode;}) {
    return (
        <SessionProvider>
            <ReduxProvider>
                {children}
            </ReduxProvider>
        </SessionProvider>
    );
}