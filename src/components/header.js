import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import profile from "../images/Erica.jpg"
import ListLink from "./listlink"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1080,
        minHeight: 200,
        padding: `2rem 1.0875rem`,
        position: `relative`,
      }}
    >
      <div className="headercontent">
        <div className="box" style={{backgroundColor: `#BDBDBD`}}>
          <img className="profileimg" src={profile} alt="Erica and Cheong-ah"/>
        </div>
        <div className="mainheader">
          <h1 style={{margin: `1rem 0 0 0`}}>
            <Link
              to="/"
              style={{
                color: `#0f1a77`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <h3 style={{margin: `0`}}>Software engineer</h3>
        </div>
        <ul className="navlink">
          <ListLink to="/">About me</ListLink>
          <ListLink to="/resume/">Resume</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
