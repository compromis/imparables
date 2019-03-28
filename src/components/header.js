import React from "react"
import PropTypes from "prop-types"
// import { FormattedMessage } from "react-intl"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Logo from "./logo"
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

class Header extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      menuIsOpen: false
    }
  }

  toggleMenu () {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen
    }, () => {
      const htmlElement = document.documentElement
      if (this.state.menuIsOpen) {
        htmlElement.classList.add('menu-is-open')
      } else {
        htmlElement.classList.remove('menu-is-open')
      }
    })
  }

  render () {
    const { locale } = this.props
    const { menuIsOpen } = this.state

    return (
      <Navbar bg="light" fixed="top" className={[(menuIsOpen) ? 'navbar-open' : ''].join(' ')}>
        <Link to="/" className="navbar-brand">
          <Logo monochrome={menuIsOpen ? 1 : 0} />
        </Link>
        <Nav className="ml-auto">
          <Nav.Link href="https://www.facebook.com/coaliciocompromis" className="social-icon facebook" target="_blank" rel="noopener"><FaFacebook /></Nav.Link>
          <Nav.Link href="https://twitter.com/compromis" className="social-icon twitter" target="_blank" rel="noopener"><FaTwitter /></Nav.Link>
          <Nav.Link href="https://www.instagram.com/compromis_net/" className="social-icon instagram" target="_blank" rel="noopener"><FaInstagram /></Nav.Link>
          <Nav.Link href="https://api.whatsapp.com/send?phone=34607812839&text=Vull%20rebre%20informaci%C3%B3%20de%20Comprom%C3%ADs%20al%20meu%20WhatsApp&source=&data=" className="social-icon whatsapp" target="_blank" rel="noopener"><FaWhatsapp /></Nav.Link>
          { locale === 'es' ? <Link to="/" className="nav-link language-option">Valencià</Link> : '' }
          { locale === 'ca' ? <Link to="/cas" className="nav-link language-option">Castellano</Link> : '' }
          <button className="btn menu-button" onClick={() => { this.toggleMenu() }}> {menuIsOpen ? <FaTimes /> : <FaBars />}</button>
        </Nav>
        <nav className={['menu', (menuIsOpen) ? 'menu-open' : 'menu-closed'].join(' ')}>
          <div className="container">
            <ul>
              <li><Link className="menu-link" to="/">Imparables</Link></li>
              <li><Link className="menu-link" to="/">Actua</Link></li>
              <li><Link className="menu-link" to="/">Candidatura</Link></li>
              <li><Link className="menu-link" to="/">Programa</Link></li>
            </ul>
            <div className="menu-social">
              <a href="https://www.facebook.com/coaliciocompromis" className="social-icon facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com/compromis" className="social-icon twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.instagram.com/compromis_net/" className="social-icon instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://api.whatsapp.com/send?phone=34607812839&text=Vull%20rebre%20informaci%C3%B3%20de%20Comprom%C3%ADs%20al%20meu%20WhatsApp&source=&data=" className="social-icon whatsapp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>
        </nav>
      </Navbar>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
