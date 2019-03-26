import React from "react"
import Layout from "./index"
import messages from "../lang/cas.js"
import { addLocaleData } from "react-intl"
import localeData from "react-intl/locale-data/es"
addLocaleData(localeData)

export default (props) => <Layout {...props} locale="es" messages={messages} />
