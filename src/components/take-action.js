import React from "react"
import Action from "./elements/action"
import { FormattedMessage } from "react-intl"

const TakeAction = () => (
  <div className="take-action">
    <div className="container">
      <h2><FormattedMessage id="actions_title" /></h2>
      <div className="actions">
        <div className="action-row odd">
          <Action name="donate">
            <Action.Header><FormattedMessage id="actions_donate_title" /></Action.Header>
            <Action.Description><FormattedMessage id="actions_donate_text" /></Action.Description>
            <Action.Call>
              <a href="https://compromis.net/espai/donacions/campanya2019?preselect=5" className="action-button" target="_blank" rel="noopener noreferrer">5€</a>
              <a href="https://compromis.net/espai/donacions/campanya2019?preselect=10" className="action-button" target="_blank" rel="noopener noreferrer">10€</a>
              <a href="https://compromis.net/espai/donacions/campanya2019?preselect=20" className="action-button" target="_blank" rel="noopener noreferrer">20€</a>
              <a href="https://compromis.net/espai/donacions/campanya2019?preselect=50" className="action-button" target="_blank" rel="noopener noreferrer">50€</a>
              <a href="https://compromis.net/espai/donacions/campanya2019" className="action-button" target="_blank" rel="noopener noreferrer"><FormattedMessage id="actions_donate_other" /></a>
            </Action.Call>
          </Action>
          <Action name="observers" delay={200}>
            <Action.Header><FormattedMessage id="actions_observers_title" /></Action.Header>
            <Action.Description><FormattedMessage id="actions_observers_text" /></Action.Description>
            <Action.Call>
              <a href="https://garantiademocratica.compromis.net" className="action-button" target="_blank" rel="noopener noreferrer"><FormattedMessage id="actions_observers_button" /></a>
            </Action.Call>
          </Action>
        </div>
        <div className="action-row even">
          <Action name="cyber" delay={400}>
            <Action.Header><FormattedMessage id="actions_cyber_title" /></Action.Header>
            <Action.Description><FormattedMessage id="actions_cyber_text" /></Action.Description>
            <Action.Call>
              <a href="https://garantiademocratica.compromis.net" className="action-button" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://garantiademocratica.compromis.net" className="action-button" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://garantiademocratica.compromis.net" className="action-button" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="https://garantiademocratica.compromis.net" className="action-button" target="_blank" rel="noopener noreferrer">Telegram</a>
            </Action.Call>
          </Action>
          <Action name="events" delay={600}>
            <Action.Header><FormattedMessage id="actions_events_title" /></Action.Header>
            <Action.Description><FormattedMessage id="actions_events_text" /></Action.Description>
            <Action.Call>
              <a href="https://garantiademocratica.compromis.net" className="action-button" target="_blank" rel="noopener noreferrer"><FormattedMessage id="actions_events_button" /></a>
            </Action.Call>
          </Action>
        </div>
      </div>
    </div>
  </div>
)

export default TakeAction
