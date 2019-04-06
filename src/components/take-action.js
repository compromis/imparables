import React from "react"
import IntLink from "./elements/IntLink"
import Action from "./elements/action"
import { FormattedMessage } from "react-intl"

const TakeAction = () => (
  <div className="take-action">
    <div className="container">
      <h2>Amb la teua força, som #Imparables</h2>
      <div className="actions">
        <Action>
          <Action.Header>Ajuda'ns a fer la campanya</Action.Header>
          <Action.Description>Amb una simple donació, contribuixes a fer realitat...</Action.Description>
          <Action.Call>
            <a href="https://compromis.net/espai/donacions/campanya2019?preselect=5" className="action-button" target="_blank" rel="noopener noreferrer">5€</a>
            <a href="https://compromis.net/espai/donacions/campanya2019?preselect=10" className="action-button" target="_blank" rel="noopener noreferrer">10€</a>
            <a href="https://compromis.net/espai/donacions/campanya2019?preselect=20" className="action-button" target="_blank" rel="noopener noreferrer">20€</a>
            <a href="https://compromis.net/espai/donacions/campanya2019?preselect=50" className="action-button" target="_blank" rel="noopener noreferrer">50€</a>
            <a href="https://compromis.net/espai/donacions/campanya2019" className="action-button" target="_blank" rel="noopener noreferrer">Altra...</a>
          </Action.Call>
        </Action>
        <Action delay={200}>
          <Action.Header>Sigues garantia de democràcia</Action.Header>
          <Action.Description>El 28 d’abril, fes-te interventor/a o apoderat/da de Compromís</Action.Description>
          <Action.Call>
            <a href="https://garantiademocratica.compromis.net" className="action-button" target="_blank" rel="noopener noreferrer">Fes-te interventor/a</a>
          </Action.Call>
        </Action>
        <Action delay={400}>
          <Action.Header>Civeractivisme</Action.Header>
          <Action.Description>El 28 d’abril, fes-te interventor/a o apoderat/da de Compromís</Action.Description>
          <Action.Call>
            <a href="https://garantiademocratica.compromis.net" className="action-button" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Action.Call>
        </Action>
        <Action delay={600}>
          <Action.Header>Vine als actes de campanya</Action.Header>
          <Action.Description>Plenem tots els actes de campanya...</Action.Description>
          <Action.Call>
            <a href="https://garantiademocratica.compromis.net" className="action-button" target="_blank" rel="noopener noreferrer">Calendari d'actes</a>
          </Action.Call>
        </Action>
      </div>
    </div>
  </div>
)

export default TakeAction
