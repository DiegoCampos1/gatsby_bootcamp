import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About me!</h1>
      <p>I currently work in dti digital!</p>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>{" "}
      {/* Melhor usar para links interno */}
      <Footer />
    </div>
  )
}

export default AboutPage
