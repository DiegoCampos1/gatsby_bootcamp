import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
      <Layout>
      <h1>Hello</h1>
      <h2>My name is Diego Campos, a front-end developer</h2>
      <p>Need a developer? <a href="/contact" rel="noopener noreferrer">Contact me</a></p> {/* Melhor usar para links externos */} 
      <p>Need a developer? <Link to="/contact">Contact me</Link></p> {/* Melhor usar para links interno */}
      </Layout>
  )
}

export default IndexPage
