import React from 'react'
import { MenuBanner, SelectionItem, TopScore } from '../components/MainMenu'
import { SelectorContainer, MenuContainer } from '../elements'
import { routes, playerParams } from '../../boilerplate/Routes'

export default (props) => (
  <MenuContainer>
    <MenuBanner />
    <SelectorContainer>
      <SelectionItem
        itemLink={`${routes.GAME}/${playerParams.ONE_PLAYERS}`}
        itemText="1 Player Game"
      />
      <SelectionItem
        itemLink={`${routes.GAME}/${playerParams.TWO_PLAYERS}`}
        itemText="2 Player Game"
      />
    </SelectorContainer>
    <TopScore score={0} />
  </MenuContainer>
)
