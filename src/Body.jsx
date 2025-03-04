
import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"

export const Body = () => {
    return (
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}