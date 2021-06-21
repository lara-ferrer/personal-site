import React from "react"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import BannerCookies from "../components/GTM"
import 'fontsource-nunito/600.css'
import 'fontsource-nunito/800.css'

export default function Layout(props) {
    const { children } = props

    return (
        <>
            <BannerCookies />
            <Menu />
            { children }
            <Footer />
        </>
    )
}