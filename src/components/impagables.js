import React from "react"
import ReactCompareImage from "react-compare-image"

import ImpagablesImage1 from "../images/impagables/impagables-1.jpg"
import ImparablesImage1 from "../images/impagables/imparables-1.jpg"

const Impagables = () => (
  <div className="impagables-wrapper">
    <ReactCompareImage leftImage={ImpagablesImage1} rightImage={ImparablesImage1} />
  </div>
)

export default Impagables
