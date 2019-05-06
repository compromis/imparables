import React from "react"
import axios from "axios"
import { IoIosSearch } from "react-icons/io"

class LocalSites extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      sites: [],
      filteredSites: [],
      searchTerm: '',
      overrideCompact: false
    }
  }

  componentWillMount () {
    this.fetchSites()
  }

  fetchSites () {
    axios.get('https://compromis.net/common/json_municipis.php')
      .then(response => {
        this.setState({
          sites: response.data,
          filteredSites: response.data
        })
      })
  }

  handleSearchTerm (event) {
    const searchTerm = event.target.value
    const filteredSites = this.state.sites.filter(site => site.name.toUpperCase().includes(searchTerm.toUpperCase()) || site.ref.toUpperCase().includes(searchTerm.toUpperCase()))
    this.setState({ searchTerm })
    this.setState({ filteredSites })
  }

  showAll () {
    this.setState({ overrideCompact: true })
  }

  render () {
    const { filteredSites, searchTerm, overrideCompact } = this.state
    const { compact } = this.props

    return (
      <div className="local-sites">
        <div className="container-fluid">
          <h2 className="sr-only">Compromís al teu municipi</h2>
          <div className="local-sites-filter">
            <input type="search" value={searchTerm} placeholder="Quin és el teu municipi?" onChange={(event) => this.handleSearchTerm(event)} />
            <span className="local-sites-filter-icon"><IoIosSearch /></span>
          </div>
          <div className={['local-sites-list', !searchTerm && compact && !overrideCompact ? 'local-sites-list--compact' : ''].join(' ')}>
            <ul>
              {filteredSites.map(site => (
                <li key={site.id}><a href={site.url} target="_blank" rel="noopener noreferrer">{site.name}</a></li>
              ))}
            </ul>
            <div className="local-sites-more" onClick={() => this.showAll()}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default LocalSites