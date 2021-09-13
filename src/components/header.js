import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="p-5 flex flex-row justify-between items-center fixed z-10 h-auto w-full text-white">
    <div>
      <h1 className="m-0 text-xl lg:text-3xl">
        <Link to="/">
          {'<kiefer slaton>'}
        </Link>
      </h1>
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
