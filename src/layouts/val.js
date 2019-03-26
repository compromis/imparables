import React from "react"
import Layout from "./index"
import messages from "../lang/val"
import { addLocaleData } from "react-intl"
import localeData from "react-intl/locale-data/ca"
addLocaleData(localeData)

export default (props) => <Layout {...props} locale="ca" messages={messages} />
