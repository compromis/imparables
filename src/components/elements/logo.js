import React from "react"
import PropTypes from "prop-types"

const Logo = (props) => (
  <svg version="1.1" x="0px" y="0px" viewBox="0 0 1100 237.9" {...props}>
  <g>
    <g>
      <linearGradient id="compromisGradient" gradientUnits="userSpaceOnUse" x1="132.5364" y1="29.2869" x2="132.5364" y2="211.4052">
        <stop offset="0" style={{stopColor: '#E28226'}} />
        <stop offset="1" style={{stopColor: '#D44127'}} />
      </linearGradient>
      <path style={!props.monochrome ? {fill: 'url(#compromisGradient)'} : {}} fill={props.monochrome ? 'currentColor' : undefined} d="M218.1,30.2H47c-4.9,0-8.8,3.8-8.8,8.4v163.3c0,4.6,4,8.4,8.8,8.4h171.1c4.8,0,8.8-3.8,8.8-8.4V38.6
        C226.9,34,222.9,30.2,218.1,30.2z M147.5,79.4h19.7v18.8h-19.7V79.4z M84.8,80.1c3.4,7,7.6,8.6,14.5,8.6v-9.3h19.7v18.8h-18.2
        c-11.4,0-18.8-2.7-23.6-13.7L84.8,80.1z M133.6,166.5c-24.9,0-45.3-7.7-63.3-22.7l6.9-8.8c17.9,12.7,32.5,18.6,56.4,18.6
        c23.9,0,38.5-5.8,56.4-18.6l6.9,8.8C178.9,158.8,158.6,166.5,133.6,166.5z"/>
    </g>
    <g>
      <path fill="currentColor" d="M346.7,135.4c-0.2,3.5-0.9,7-2,10.4c-1.1,3.4-2.7,6.3-4.8,9c-3.1,3.9-7.2,7.2-12.4,9.9
        c-5.2,2.7-11.2,4.1-18,4.1c-6.8,0-13-1.4-18.3-4.2c-5.4-2.8-9.6-6.1-12.7-9.8c-3.3-4.2-5.8-9.1-7.4-14.5c-1.6-5.5-2.4-11.4-2.4-18
        c0-6.5,0.8-12.5,2.4-17.9c1.6-5.5,4-10.3,7.4-14.5c3.1-3.8,7.3-7,12.7-9.8c5.3-2.8,11.4-4.2,18.3-4.2c6.8,0,12.8,1.4,18,4.1
        c5.2,2.7,9.3,6,12.4,9.9c2.1,2.6,3.6,5.6,4.8,9c1.1,3.4,1.8,6.8,2,10.3h-21c-0.1-1.6-0.4-3-0.9-4.4c-0.5-1.4-1-2.6-1.7-3.7
        c-1.3-1.9-3-3.5-5.3-4.7c-2.3-1.3-5.1-1.9-8.4-1.9c-3,0-5.5,0.5-7.6,1.5c-2.1,1-3.9,2.3-5.4,3.9c-2.6,2.8-4.3,6.2-5,10.2
        c-0.7,4-1,8-1,12.2c0,4.2,0.3,8.3,1,12.2c0.7,3.9,2.3,7.3,5,10.1c1.5,1.6,3.3,2.9,5.4,4c2.1,1.1,4.6,1.6,7.6,1.6
        c3.3,0,6.1-0.6,8.4-1.9c2.3-1.2,4-2.8,5.3-4.7c0.7-1.1,1.2-2.4,1.7-3.7c0.5-1.4,0.8-2.8,0.9-4.4H346.7z"/>
      <path fill="currentColor" d="M433.5,122.4c0,7.5-0.9,13.8-2.7,18.9c-1.8,5.1-4.4,9.7-7.7,13.9c-3.1,3.8-7.3,7-12.7,9.8
        c-5.4,2.7-11.6,4.1-18.4,4.1c-6.8,0-13-1.4-18.4-4.1c-5.4-2.7-9.7-6-12.7-9.8c-3.3-4.2-5.9-8.8-7.7-13.9
        c-1.8-5.1-2.7-11.4-2.7-18.9c0-7.5,0.9-13.8,2.7-18.9c1.8-5.1,4.4-9.7,7.7-13.9c3.1-3.8,7.3-7,12.7-9.7c5.4-2.7,11.5-4.1,18.4-4.1
        c6.8,0,13,1.4,18.4,4.1c5.4,2.7,9.7,6,12.7,9.7c3.3,4.2,5.9,8.9,7.7,13.9C432.6,108.6,433.5,114.9,433.5,122.4z M411.8,122.4
        c0-4.2-0.4-8.3-1.2-12.2c-0.8-3.9-2.5-7.3-5.1-10.2c-1.5-1.6-3.4-2.9-5.6-4c-2.3-1.1-4.9-1.6-7.9-1.6c-3,0-5.6,0.5-7.9,1.6
        c-2.3,1.1-4.2,2.4-5.6,4c-2.6,2.8-4.3,6.2-5.1,10.2c-0.8,3.9-1.2,8-1.2,12.2c0,4.2,0.4,8.3,1.2,12.2c0.8,3.9,2.5,7.3,5.1,10.2
        c1.5,1.6,3.4,2.9,5.6,4c2.3,1.1,4.9,1.6,7.9,1.6c3,0,5.6-0.5,7.9-1.6c2.3-1.1,4.2-2.4,5.6-4c2.6-2.8,4.3-6.2,5.1-10.2
        C411.4,130.7,411.8,126.6,411.8,122.4z"/>
      <path fill="currentColor" d="M549.8,166.9v-55.2c0-5.5-1-9.7-2.8-12.7c-1.9-3-5.5-4.5-10.8-4.5c-3.1,0-5.7,0.7-7.9,2.2
        c-2.1,1.4-3.9,3.3-5.4,5.6c-1.4,2.3-2.5,5-3.2,7.8c-0.7,2.9-1,5.6-1,8.4v48.6h-21.2v-55.2c0-5.5-0.9-9.7-2.8-12.7
        c-1.9-3-5.5-4.5-10.8-4.5c-3.1,0-5.7,0.7-7.9,2.2c-2.2,1.4-4,3.3-5.5,5.6c-1.5,2.3-2.6,5-3.2,7.8c-0.7,2.9-1,5.6-1,8.4v48.6H445
        V78h17.8l1.7,11.8c2.5-4.1,5.9-7.5,10.1-10.1c4.2-2.6,9.3-3.9,15.2-3.9c6.3,0,11.5,1.3,15.7,3.9c4.2,2.6,7.5,6.1,9.7,10.7
        c2.6-4.7,6.3-8.2,10.9-10.8c4.6-2.5,9.9-3.8,16-3.8c9.6,0,16.8,2.9,21.6,8.6c4.9,5.8,7.3,13.3,7.3,22.5v60H549.8z"/>
      <path fill="currentColor" d="M669.4,122.2c0,17.7-5.3,30.9-15.9,39.7c-2.7,2.3-5.9,4-9.5,5.3c-3.6,1.3-7.7,1.9-12.2,1.9
        c-5.4,0-10.1-0.8-14.1-2.5c-4-1.6-7.1-3.7-9.2-6.2v40.5h-21.4V78h18.5l1.4,9.8c2.6-4.1,6.2-7.1,10.8-9c4.6-1.9,9.3-2.8,14.2-2.8
        c4.4,0,8.5,0.7,12,2.1c3.6,1.4,6.8,3.2,9.5,5.5c5.4,4.3,9.3,9.8,12,16.3C668.1,106.3,669.4,113.8,669.4,122.2z M647.7,122.6
        c0-3.9-0.4-7.7-1.1-11.5c-0.7-3.8-2.2-7.2-4.5-10.2c-1.6-1.9-3.6-3.6-5.9-5c-2.3-1.4-5.1-2.1-8.5-2.1c-4.2,0-7.6,0.9-10.3,2.7
        c-2.6,1.8-4.7,4-6.2,6.8c-1.5,2.8-2.5,5.9-3,9.3c-0.5,3.4-0.8,6.7-0.8,9.9c0,3.2,0.3,6.5,0.8,9.9c0.5,3.4,1.5,6.4,3,9.2
        c1.5,2.8,3.5,5.1,6.2,6.8c2.6,1.8,6,2.7,10.3,2.7c3.3,0,6.1-0.7,8.5-2.1c2.3-1.4,4.3-3,5.9-5c2.3-3,3.8-6.3,4.5-10.1
        C647.3,130.3,647.7,126.5,647.7,122.6z"/>
      <path fill="currentColor" d="M732.8,97.6c-2.6-0.6-5.1-0.9-7.4-0.9c-7.5,0-13.2,2.4-17.1,7.2c-3.9,4.8-5.8,10.8-5.8,18v44.9h-21.7V78h18.3
        l1.9,13.2c2.1-5.1,5.5-8.7,10.2-11c4.7-2.3,9.7-3.4,15-3.4c2.3,0,4.5,0.2,6.7,0.5V97.6z"/>
      <path fill="currentColor" d="M813.2,122.4c0,7.5-0.9,13.8-2.7,18.9c-1.8,5.1-4.4,9.7-7.7,13.9c-3.1,3.8-7.3,7-12.7,9.8
        c-5.4,2.7-11.6,4.1-18.4,4.1c-6.8,0-13-1.4-18.4-4.1c-5.4-2.7-9.7-6-12.7-9.8c-3.3-4.2-5.9-8.8-7.7-13.9
        c-1.8-5.1-2.7-11.4-2.7-18.9c0-7.5,0.9-13.8,2.7-18.9c1.8-5.1,4.4-9.7,7.7-13.9c3.1-3.8,7.3-7,12.7-9.7c5.4-2.7,11.5-4.1,18.4-4.1
        c6.8,0,13,1.4,18.4,4.1c5.4,2.7,9.6,6,12.7,9.7c3.3,4.2,5.9,8.9,7.7,13.9C812.3,108.6,813.2,114.9,813.2,122.4z M791.5,122.4
        c0-4.2-0.4-8.3-1.2-12.2c-0.8-3.9-2.5-7.3-5.1-10.2c-1.5-1.6-3.4-2.9-5.6-4c-2.3-1.1-4.9-1.6-7.9-1.6c-3,0-5.6,0.5-7.8,1.6
        c-2.3,1.1-4.2,2.4-5.6,4c-2.6,2.8-4.3,6.2-5.1,10.2c-0.8,3.9-1.2,8-1.2,12.2c0,4.2,0.4,8.3,1.2,12.2c0.8,3.9,2.5,7.3,5.1,10.2
        c1.5,1.6,3.4,2.9,5.6,4c2.3,1.1,4.9,1.6,7.8,1.6c3,0,5.6-0.5,7.9-1.6c2.3-1.1,4.2-2.4,5.6-4c2.6-2.8,4.3-6.2,5.1-10.2
        C791.1,130.7,791.5,126.6,791.5,122.4z"/>
      <path fill="currentColor" d="M929.4,166.9v-55.2c0-5.5-0.9-9.7-2.8-12.7c-1.9-3-5.5-4.5-10.9-4.5c-3.1,0-5.7,0.7-7.9,2.2
        c-2.2,1.4-3.9,3.3-5.4,5.6c-1.4,2.3-2.5,5-3.1,7.8c-0.7,2.9-1,5.6-1,8.4v48.6h-21.2v-55.2c0-5.5-0.9-9.7-2.8-12.7
        c-1.9-3-5.5-4.5-10.9-4.5c-3.1,0-5.7,0.7-7.9,2.2c-2.2,1.4-4,3.3-5.5,5.6c-1.5,2.3-2.6,5-3.2,7.8c-0.7,2.9-1,5.6-1,8.4v48.6h-21.2
        V78h17.8l1.7,11.8c2.5-4.1,5.8-7.5,10.1-10.1c4.2-2.6,9.3-3.9,15.2-3.9c6.3,0,11.5,1.3,15.7,3.9c4.2,2.6,7.5,6.1,9.8,10.7
        c2.6-4.7,6.2-8.2,10.8-10.8c4.6-2.5,9.9-3.8,16-3.8c9.6,0,16.8,2.9,21.6,8.6c4.8,5.8,7.3,13.3,7.3,22.5v60H929.4z"/>
      <path fill="currentColor" d="M963.8,69.8l-6.1-10.3l28-21.7l8.5,14.4L963.8,69.8z M967.2,166.9V78h21.7v88.9H967.2z"/>
      <path fill="currentColor" d="M1075.8,139.3c0,4.3-0.7,8.1-2.1,11.3c-1.4,3.2-3.3,5.9-5.6,8.2c-3.7,3.7-8.1,6.3-13.3,7.9
        c-5.3,1.6-10.9,2.4-17.1,2.4c-5.7,0-11-0.8-15.9-2.5c-4.9-1.6-9.2-4.2-12.8-7.8c-2.6-2.5-4.8-5.5-6.7-9.1
        c-1.8-3.5-2.7-7.4-2.7-11.6h20c0,1.9,0.4,3.9,1.4,5.8c0.9,1.9,2.1,3.5,3.4,4.6c1.7,1.4,3.6,2.4,5.7,3c2.1,0.6,4.7,1,7.8,1
        c1.8,0,3.8-0.1,5.9-0.4c2.1-0.3,4.1-0.8,5.9-1.6c1.8-0.8,3.3-1.9,4.5-3.4c1.2-1.5,1.8-3.4,1.8-5.8c0-2.6-0.8-4.7-2.4-6.3
        c-1.6-1.6-3.7-2.6-6.5-3.1c-4-0.6-8.1-1.1-12.3-1.5c-4.2-0.4-8.3-1-12.3-2c-3.1-0.7-5.8-1.8-8.3-3.3c-2.5-1.5-4.6-3.3-6.4-5.4
        c-1.8-2.1-3.2-4.4-4.2-7c-1-2.6-1.5-5.3-1.5-8.1c0-4.6,0.9-8.5,2.6-11.7c1.7-3.3,3.9-6,6.5-8.3c3.3-2.9,7.3-5,11.8-6.6
        c4.6-1.5,9.6-2.3,15.2-2.3c5.4,0,10.5,0.8,15.5,2.6c4.9,1.7,9.1,4.3,12.4,7.9c2.4,2.6,4.3,5.5,5.7,8.6c1.4,3.1,2.1,6.3,2.1,9.6
        h-20.3c0-1.7-0.3-3.3-1-4.6c-0.7-1.4-1.5-2.6-2.6-3.8c-1.3-1.2-2.9-2.2-5-3c-2.1-0.7-4.3-1.1-6.6-1.1c-1.6,0-3.1,0.1-4.6,0.2
        c-1.5,0.1-3,0.5-4.6,1.2c-1.9,0.8-3.6,2-4.9,3.6c-1.3,1.6-2,3.5-2,5.8c0,3.2,1.1,5.4,3.3,6.6c2.2,1.2,4.5,2,6.9,2.3
        c2,0.2,3.8,0.4,5.1,0.6c1.4,0.2,2.7,0.3,4.1,0.5c1.4,0.2,2.8,0.4,4.3,0.6c1.5,0.2,3.3,0.5,5.5,0.9c7.1,1.1,12.9,3.8,17.4,8.1
        C1073.5,126.6,1075.8,132.3,1075.8,139.3z"/>
    </g>
  </g>
  </svg>  
)

Logo.propTypes = {
  monochrome: PropTypes.number,
}

Logo.defaultProps = {
  monochrome: false,
}

export default Logo
