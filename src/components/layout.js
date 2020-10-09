import React from "react"
import Footer from "./footer"
import Header from "./header"
import '../styles/index.scss'

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
