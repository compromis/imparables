import React from "react"
import axios from "axios"
import moment from "moment"
import { FormattedMessage } from "react-intl"

const NewsStory = ({story}) => (
  <a href={story.link} target="_blank" rel="noopener noreferrer" className="news-story">
    <div className="news-story-thumbnail">
      <img src={story._embedded['wp:featuredmedia']['0'].source_url} width="100%" alt={story.title.rendered} />
    </div>
    <div className="news-story-headline">
      <h5>{story.title.rendered}</h5>
      <div className="news-story-readmore">{ moment(story.date).format("D/M/YYYY") }</div>
    </div>
  </a>
)

class News extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      stories: []
    }
  }

  componentDidMount () {
    this.fetchNews()
  }

  fetchNews () {
    axios.get('https://compromis.net/wp-json/wp/v2/posts/?per_page=3&_embed')
      .then(response => {
        this.setState({
          stories: response.data
        })
      })
  }

  render () {
    return (
      <div className="news container">
        <h2><FormattedMessage id="news_header" /></h2>
        <div className="news-list">
          { this.state.stories.map(story => <NewsStory key={story.id} story={story} />) }
        </div>
        <div className="news-more">
          <a href="https://compromis.net"><FormattedMessage id="news_more_on" /></a>
        </div>
      </div>
    )
  }
}

export default News
