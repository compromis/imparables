import React from "react"
import PropTypes from "prop-types"
// import { FormattedMessage } from "react-intl"
import IntLink from "./IntLink"
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
        <IntLink to="/" locale={locale} className="navbar-brand">
          <Logo monochrome={menuIsOpen ? 1 : 0} />
        </IntLink>
        <Nav className="ml-auto">
          <ul className="menu-social d-none d-md-flex">
            <li><Nav.Link href="https://www.facebook.com/coaliciocompromis" className="social-icon facebook" target="_blank" rel="noopener"><FaFacebook /></Nav.Link></li>
            <li><Nav.Link href="https://twitter.com/compromis" className="social-icon twitter" target="_blank" rel="noopener"><FaTwitter /></Nav.Link></li>
            <li><Nav.Link href="https://www.instagram.com/compromis_net/" className="social-icon instagram" target="_blank" rel="noopener"><FaInstagram /></Nav.Link></li>
            <li><Nav.Link href="https://api.whatsapp.com/send?phone=34607812839&text=Vull%20rebre%20informaci%C3%B3%20de%20Comprom%C3%ADs%20al%20meu%20WhatsApp&source=&data=" className="social-icon whatsapp" target="_blank" rel="noopener"><FaWhatsapp /></Nav.Link></li>
          </ul>
          <ul className="navbar-languages">
            { locale === 'es' ? <li><IntLink to="/" locale="ca" className="nav-link"><span className="d-md-none">VAL</span><span className="d-none d-md-inline">Valencià</span></IntLink></li> : '' }
            { locale === 'ca' ? <li><IntLink to="/" locale="es" className="nav-link"><span className="d-md-none">CAS</span><span className="d-none d-md-inline">Castellano</span></IntLink></li> : '' }
          </ul>
          <button className="btn menu-button" onClick={() => { this.toggleMenu() }} aria-controls="menu">
            <span className="d-none d-md-inline">Menú</span> {menuIsOpen ? <FaTimes /> : <FaBars />}
          </button>
        </Nav>
        <div id="menu" className={['menu', menuIsOpen ? 'menu-open' : 'menu-closed'].join(' ')} aria-expanded={ menuIsOpen ? false : true }>
          <div className="container">
            <ul className="menu-main">
              <li><IntLink className="menu-link" to="/" locale={locale}><span>Imparables</span></IntLink></li>
              <li><IntLink className="menu-link" to="/" locale={locale}><span>Actua</span></IntLink></li>
              <li><IntLink className="menu-link" to="/" locale={locale}><span>Candidatura</span></IntLink></li>
              <li><IntLink className="menu-link" to="/programa" locale={locale}><span>Programa</span></IntLink></li>
            </ul>
            <ul className="mt-4 menu-social">
              <li><a href="https://www.facebook.com/coaliciocompromis" className="social-icon facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
              <li><a href="https://twitter.com/compromis" className="social-icon twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
              <li><a href="https://www.instagram.com/compromis_net/" className="social-icon instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
              <li><a href="https://api.whatsapp.com/send?phone=34607812839&text=Vull%20rebre%20informaci%C3%B3%20de%20Comprom%C3%ADs%20al%20meu%20WhatsApp&source=&data=" className="social-icon whatsapp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></li>
            </ul>
            <ul className="mt-4 menu-languages">
              { locale === 'es' ? <li><IntLink to="/" locale="ca">En valencià</IntLink></li> : '' }
              { locale === 'ca' ? <li><IntLink to="/" locale="es">En castellano</IntLink></li> : '' }
            </ul>
          </div>
        </div>
      </Navbar>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  locale: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  locale: `ca`
}

export default Header
