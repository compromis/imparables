import React from "react"
import PropTypes from "prop-types"
import { FormattedMessage } from "react-intl"
import IntLink from "./elements/int-link"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Logo from "./elements/logo"
import Action from "./elements/action"
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

class Header extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      menuIsOpen: false,
      isTop: true,
      isImparables: false
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  handleScroll () {
    const isTop = window.scrollY < 10
    const isImparables = window.scrollY > 400
    
    if (isTop !== this.state.isTop) {
      this.setState({ isTop })
    }

    if (isImparables !== this.state.isImparables) {
      this.setState({ isImparables })
    }
  }

  componentDidMount () {
    document.addEventListener('scroll', this.handleScroll, false)
  }

  componentWillUnmount () {
    document.removeEventListener('scroll', this.handleScroll, false)
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
    const { locale, isFrontPage } = this.props
    const { menuIsOpen, isTop, isImparables } = this.state

    return (
      <Navbar bg="light" fixed="top" className={[isTop && isFrontPage ? 'navbar--transparent' : '', menuIsOpen ? 'navbar-open' : ''].join(' ')}>
        <div className="container-fluid">
          <IntLink to="/" className="navbar-brand">
            <span className={['brand-logo', isImparables ? 'brand-logo--compact' : ''].join(' ')}>
              <Logo monochrome={menuIsOpen || (isTop && isFrontPage) ? 1 : 0} />
            </span>
            <span className={['brand-campaign', isImparables ? '' : 'brand-campaign--compact'].join(' ')}>
              #Imparables
            </span>
          </IntLink>
          <Nav className="ml-auto">
            <ul className="menu-social d-none d-md-flex">
              <li><Nav.Link href="https://www.facebook.com/coaliciocompromis" className="social-icon facebook" target="_blank" rel="noopener"><FaFacebook /></Nav.Link></li>
              <li><Nav.Link href="https://twitter.com/compromis" className="social-icon twitter" target="_blank" rel="noopener"><FaTwitter /></Nav.Link></li>
              <li><Nav.Link href="https://www.instagram.com/compromis_net/" className="social-icon instagram" target="_blank" rel="noopener"><FaInstagram /></Nav.Link></li>
              <li><Nav.Link href="https://compromis.net/whatsapp" className="social-icon whatsapp" target="_blank" rel="noopener"><FaWhatsapp /></Nav.Link></li>
            </ul>
            <ul className="navbar-languages">
              { locale === 'es' ? <li><IntLink to="/" locale="ca" className="nav-link"><span className="d-md-none">VAL</span><span className="d-none d-md-inline">Valencià</span></IntLink></li> : '' }
              { locale === 'ca' ? <li><IntLink to="/" locale="es" className="nav-link"><span className="d-md-none">CAS</span><span className="d-none d-md-inline">Castellano</span></IntLink></li> : '' }
            </ul>
            <button className="btn menu-button" onClick={this.toggleMenu} aria-controls="menu">
              <span className="d-none d-md-inline">Menú</span> {menuIsOpen ? <FaTimes /> : <FaBars />}
            </button>
          </Nav>
          <div id="menu" className={['menu d-print-none', menuIsOpen ? 'menu-open' : 'menu-closed'].join(' ')} aria-expanded={ menuIsOpen ? false : true }>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-xl-8">
                  <ul className="menu-main">
                    <li><IntLink className="menu-link" to="/" onClick={this.toggleMenu}><span><FormattedMessage id="menu_imparables" /></span></IntLink></li>
                    <li><IntLink className="menu-link" to="/candidatura" onClick={this.toggleMenu}><span><FormattedMessage id="menu_candidatura" /></span></IntLink></li>
                    <li><IntLink className="menu-link" to="/actua" onClick={this.toggleMenu}><span><FormattedMessage id="menu_actua" /></span></IntLink></li>
                    <li><IntLink className="menu-link" to="/programa" onClick={this.toggleMenu}><span><FormattedMessage id="menu_programa" /></span></IntLink></li>
                  </ul>
                  <ul className="mt-4 menu-social">
                    <li><a href="https://www.facebook.com/coaliciocompromis" className="social-icon facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                    <li><a href="https://twitter.com/compromis" className="social-icon twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                    <li><a href="https://www.instagram.com/compromis_net/" className="social-icon instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                    <li><a href="https://compromis.net/whatsapp" className="social-icon whatsapp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></li>
                  </ul>
                  <ul className="mt-4 menu-languages">
                    { locale === 'es' ? <li><IntLink to="/" locale="ca" onClick={this.toggleMenu}>En valencià</IntLink></li> : '' }
                    { locale === 'ca' ? <li><IntLink to="/" locale="es" onClick={this.toggleMenu}>En castellano</IntLink></li> : '' }
                  </ul>
                  <ul className="mt-4 menu-languages">
                    <li><a href="https://compromis.net/arxiu/"><FormattedMessage id="menu_news" /></a></li>
                    <li><a href="https://compromis.net/info/transparencia/"><FormattedMessage id="menu_transparency" /></a></li>
                    <li><a href="https://compromis.net/vot-correu"><FormattedMessage id="menu_absenteeballot" /></a></li>
                    <li><a href="https://compromis.net/?skip=1">compromis.net</a></li>
                  </ul>
                </div>
                <div className="col-lg-6 col-xl-4 d-none d-lg-block">
                  <Action>
                    <Action.Header><FormattedMessage id="actions_donate_title" /></Action.Header>
                    <Action.Description><FormattedMessage id="actions_donate_text" /></Action.Description>
                    <Action.Call>
                      <a href="https://compromis.net/espai/donacions/campanya2019?preselect=5" className="action-button" target="_blank" rel="noopener noreferrer">5€</a>
                      <a href="https://compromis.net/espai/donacions/campanya2019?preselect=10" className="action-button" target="_blank" rel="noopener noreferrer">10€</a>
                      <a href="https://compromis.net/espai/donacions/campanya2019?preselect=20" className="action-button" target="_blank" rel="noopener noreferrer">20€</a>
                      <a href="https://compromis.net/espai/donacions/campanya2019?preselect=50" className="action-button" target="_blank" rel="noopener noreferrer">50€</a>
                      <a href="https://compromis.net/espai/donacions/campanya2019" className="action-button" target="_blank" rel="noopener noreferrer"><FormattedMessage id="actions_donate_other" /></a>
                    </Action.Call>
                  </Action>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  locale: PropTypes.string,
  isFrontPage: PropTypes.bool
}

Header.defaultProps = {
  siteTitle: ``,
  locale: `ca`,
  isFrontPage: false
}

export default Header
