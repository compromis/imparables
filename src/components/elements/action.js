import React from "react"
import Fade from "react-reveal/Fade"

const Header = ({ children }) => (
  <h3 className="action-header">{ children }</h3>
)

const Description = ({ children }) => (
  <p className="action-description">{ children }</p>
)

const Call = ({ children }) => (
  <div className="action-call">{ children }</div>
)

class Action extends React.Component {
  static Header = Header
  static Description = Description
  static Call = Call

  render () {
    const { name, delay, children } = this.props

    return (
      <Fade bottom delay={delay}>
        <div className={['action', name].join(' ')}>
          <div className="action-container">
            {React.Children.map(children, child => child)}
          </div>
        </div>
      </Fade>
    )
  }
}

export default Action
