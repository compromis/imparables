import React from "react"
import { FormattedMessage } from "react-intl"
import Fade from "react-reveal/Fade"
import IntLink from "./elements/int-link"

import BanderasImage from "../images/b-campaign/banderas.jpg"
import Banderas2Image from "../images/b-campaign/infantil.jpg"

class BCampaign extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPoster: 0,
      posterVisible: false,
      posters: [
        {
          word: "BANDERAS",
          image: BanderasImage
        },
        {
          word: "BANDERAS2",
          image: Banderas2Image
        }
      ]
    }
  }

  componentDidMount () {
    this.shufflePosters()
  }

  shufflePosters () {
    const newPoster = Math.floor((Math.random() * this.state.posters.length))
    this.setState({
      posterVisible: false
    }, () => {
      setTimeout(() => {
        this.setState({
          posterVisible: true,
          currentPoster: newPoster
        })
      }, 300)
    })
  }

  render () {
    const { currentPoster, posterVisible, posters } = this.state

    return (
      <div className="b-campaign">
        <div className="b-campaign-poster">
          <div className={!posterVisible ? 'd-none' : ''}>
            <div className="b-campaign-poster-image">
              <Fade duration={1000}><img src={posters[currentPoster].image} alt={posters[currentPoster].word} /></Fade>
            </div>
            <div className="b-campaign-poster-word">
              <div><Fade duration={1} delay={500}>{posters[currentPoster].word}</Fade> <Fade duration={1} delay={600}>{posters[currentPoster].word}</Fade></div>
              <div><Fade duration={1} delay={700}>{posters[currentPoster].word}</Fade> <Fade duration={1} delay={800}>{posters[currentPoster].word}</Fade></div>
              <div><Fade duration={1} delay={900}>{posters[currentPoster].word}</Fade> <Fade duration={1} delay={1000}>{posters[currentPoster].word}</Fade></div>
              <div><Fade duration={1} delay={1100}>{posters[currentPoster].word}</Fade> <Fade duration={1} delay={1200}>{posters[currentPoster].word}</Fade></div>
              <div><Fade duration={1} delay={1300}>{posters[currentPoster].word}</Fade> <Fade duration={1} delay={1400}>{posters[currentPoster].word}</Fade></div>
            </div>
            <div className="b-campaign-poster-caption">
              <Fade delay={1500} duration={1000}><FormattedMessage id={'bcampaign_' + posters[currentPoster].word} /></Fade>
            </div>
          </div>
        </div>
        <div className="b-campaign-shuffle">
          <Fade delay={2000} duration={800}>
            <button className="btn btn-light" onClick={() => this.shufflePosters()}>Shuffle</button>
            <IntLink to="/programa">Més propostes</IntLink>
          </Fade>
        </div>
      </div>
    )
  }
}

export default BCampaign
