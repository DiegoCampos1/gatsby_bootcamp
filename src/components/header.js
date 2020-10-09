import React from "react"
import { Link } from "gatsby"

import headerStyles from './header.module.scss'

const Header = () => {
  return (
    <header>
      <h3>Diego Campos</h3>
      <nav>
        <ul>
          <li>
            <Link className={headerStyles.link} to="/">HOME</Link>
          </li>
          <li>
            <Link className={headerStyles.link} to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
