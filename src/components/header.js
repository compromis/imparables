import React from "react"
import PropTypes from "prop-types"
import { FormattedMessage } from "react-intl"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Logo from "./logo"
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

class Header extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      menuDisplayed: false
    }
  }

  toggleMenu () {
    this.setState({
      menuDisplayed: !this.state.menuDisplayed
    })
  }

  render () {
    const { locale } = this.props

    return (
        <Navbar bg="light" fixed="top">
          <Link to="/" className={['navbar-brand', (this.state.menuDisplayed) ? 'navbar-brand--open' : ''].join(' ')}>
            <Logo monochrome={this.state.menuDisplayed} />
          </Link>
            <Nav className="ml-auto">
              <Nav.Link href="https://www.facebook.com/coaliciocompromis" className="social-icon facebook" target="_blank" rel="noopener"><FaFacebook /></Nav.Link>
              <Nav.Link href="https://twitter.com/compromis" className="social-icon twitter" target="_blank" rel="noopener"><FaTwitter /></Nav.Link>
              <Nav.Link href="https://www.instagram.com/compromis_net/" className="social-icon instagram" target="_blank" rel="noopener"><FaInstagram /></Nav.Link>
              <Nav.Link href="https://api.whatsapp.com/send?phone=34607812839&text=Vull%20rebre%20informaci%C3%B3%20de%20Comprom%C3%ADs%20al%20meu%20WhatsApp&source=&data=" className="social-icon whatsapp" target="_blank" rel="noopener"><FaWhatsapp /></Nav.Link>
              { locale === 'es' ? <Link to="/" className="nav-link language-option">Valencià</Link> : '' }
              { locale === 'ca' ? <Link to="/cas" className="nav-link language-option">Castellano</Link> : '' }
              <button className="btn menu-button" onClick={() => { this.toggleMenu(); }}> {this.state.menuDisplayed ? <FaTimes /> : <FaBars />}</button>
            </Nav>
            <nav className={['', (this.state.menuDisplayed) ? 'menu' : 'menu-hidden'].join(' ')}>
              <div className="container">
                <ul>
                  <li><Link className="menu-link" to="/">Imparables</Link></li>
                  <li><Link className="menu-link" to="/">Actua</Link></li>
                  <li><Link className="menu-link" to="/">Candidatura</Link></li>
                  <li><Link className="menu-link" to="/">Programa</Link></li>
                </ul>
                <div className="menu-social">
                  <a href="https://www.facebook.com/coaliciocompromis" className="social-icon facebook" target="_blank" rel="noopener"><FaFacebook /></a>
                  <a href="https://twitter.com/compromis" className="social-icon twitter" target="_blank" rel="noopener"><FaTwitter /></a>
                  <a href="https://www.instagram.com/compromis_net/" className="social-icon instagram" target="_blank" rel="noopener"><FaInstagram /></a>
                  <a href="https://api.whatsapp.com/send?phone=34607812839&text=Vull%20rebre%20informaci%C3%B3%20de%20Comprom%C3%ADs%20al%20meu%20WhatsApp&source=&data=" className="social-icon whatsapp" target="_blank" rel="noopener"><FaWhatsapp /></a>
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
