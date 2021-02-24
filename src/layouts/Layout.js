import React from "react"
import Menu from "../components/Menu"
import Footer from "../components/Footer"

export default function Layout(props) {
    const { children } = props

    return (
        <>
            <Menu />
            { children }
            <Footer />
        </>
    )
}