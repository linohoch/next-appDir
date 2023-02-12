import React from "react";

export default function DetailLayout({
                                   children,
                               }: {
    children: React.ReactNode,
}) {
    return (
            <div>
                articleLayout
                {children}
            </div>

    )
}