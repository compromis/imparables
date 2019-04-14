import React from "react"
import Konami from "react-konami-code"

class EasterEgg extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      iframeUrl: 'https://giphy.com/embed/PO83XW2QOJdxtl6hbR'
    }
  }

  easterEgg () {
    setTimeout(() => {
      this.setState({
        iframeUrl: 'https://www.youtube-nocookie.com/embed/d0s5SyET_Mw/?autoplay=1&start=29'
      })
    }, 2400)
  }

  render () {
    return (
      <Konami action={this.easterEgg.bind(this)}>
        <div style={{width: '100%', height: '100%', position:'fixed', top: 0, left: 0, zIndex: 10000, background: 'black'}}>
          <iframe title="Toni Cantó, erase my mind" src={this.state.iframeUrl} width="100%" height="100%" frameBorder={0} allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </Konami>
    )
  }
}

export default EasterEgg