import React from "react";
import DashboardNavigation from "./DashboardNavigation";
import DashboardFooter from "./DashboardFooter";

export default async function DashboardLayout({children, props}: {
    children: React.ReactNode,
    props?: any
}) {
    return (
        <>
            <DashboardNavigation/>
            {
            children
        }
            <DashboardFooter/>
        </>
    )
}