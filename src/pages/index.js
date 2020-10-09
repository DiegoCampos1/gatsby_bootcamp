import React from "react"
import { Link } from 'gatsby'


const IndexPage = () => {
  return (
    <div>
      <h1>Hello,</h1>
      <h2>My name is Diego, a front-end developer</h2>
      <p>Need a developer? <a href="/contact">Contact me</a></p> {/* Melhor usar para links externos */} 
      <p>Need a developer? <Link to="/contact">Contact me</Link></p> {/* Melhor usar para links interno */}
    </div>
  )
}

export default IndexPage
