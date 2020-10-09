import React from "react"
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <div>
      <h1>About me!</h1>
      <p>Olha eu ai!</p>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p> {/* Melhor usar para links interno */}
    </div>
  )
}

export default AboutPage;
