import React from "react"
import { Link } from 'gatsby'
import Footer from "../components/footer"
import Header from "../components/header"


const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello</h1>
      <h2>My name is Diego Campos, a front-end developer</h2>
      <p>Need a developer? <a href="/contact" rel="noopener noreferrer">Contact me</a></p> {/* Melhor usar para links externos */} 
      <p>Need a developer? <Link to="/contact">Contact me</Link></p> {/* Melhor usar para links interno */}
      <Footer />
    </div>
  )
}

export default IndexPage
