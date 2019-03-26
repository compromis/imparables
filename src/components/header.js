import React from "react"
import PropTypes from "prop-types"
import { FormattedMessage } from "react-intl"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Logo from "./logo"
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Header = ({ locale }) => (
  <Navbar bg="light" expand="lg" fixed="top">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand"><Logo /></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="https://www.facebook.com/coaliciocompromis" className="social-icon facebook" target="_blank" rel="noopener"><FaFacebook /> <span className="d-lg-none">Facebook</span></Nav.Link>
          <Nav.Link href="https://twitter.com/compromis" className="social-icon twitter" target="_blank" rel="noopener"><FaTwitter /> <span className="d-lg-none">Twitter</span></Nav.Link>
          <Nav.Link href="https://www.instagram.com/compromis_net/" className="social-icon instagram" target="_blank" rel="noopener"><FaInstagram /> <span className="d-lg-none">Instagram</span></Nav.Link>
          <Nav.Link href="https://api.whatsapp.com/send?phone=34607812839&text=Vull%20rebre%20informaci%C3%B3%20de%20Comprom%C3%ADs%20al%20meu%20WhatsApp&source=&data=" className="social-icon whatsapp" target="_blank" rel="noopener"><FaWhatsapp /> <span className="d-lg-none">Whatsapp</span></Nav.Link>
          <Nav.Link href="https://compromis.net/espai/donacions/campanya2019" className="donate-button" target="_blank" rel="noopener"><FormattedMessage id="donate" /></Nav.Link>
          { locale === 'es' ? <Link to="/" className="nav-link language-option">Valencià</Link> : '' }
          { locale === 'ca' ? <Link to="/cas" className="nav-link language-option">Castellano</Link> : '' }
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
