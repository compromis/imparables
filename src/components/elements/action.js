import React from "react"
import Fade from "react-reveal/Fade"

function Header() {
  return null
}

function Description() {
  return null
}

function Call() {
  return null
}

class Action extends React.Component {
  static Header = Header
  static Description = Description
  static Call = Call

  render () {
    const { name, delay, children } = this.props
    const header = children.find(child => child.type['displayName'] === 'Header')
    const description = children.find(child => child.type['displayName'] === 'Description')
    const call = children.find(child => child.type['displayName'] === 'Call')
    console.log(children)

    return (
      <Fade bottom delay={delay}>
        <div className={['action', name].join(' ')}>
          <div className="action-container">
            <h3 className="action-header">{ header ? header.props.children : null }</h3>
            <p className="action-description">{ description ? description.props.children : null }</p>
            <div className="action-call">{ call ? call.props.children : null }</div>
          </div>
        </div>
      </Fade>
    )
  }
}

export default Action
