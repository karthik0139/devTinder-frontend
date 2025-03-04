
import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export const Body = () => {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}