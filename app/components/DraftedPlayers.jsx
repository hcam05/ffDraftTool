import React from 'react';
import { connect } from 'react-redux';

import '../styles/css/playercell.css';

const DraftedPlayers = (props) => {
  const { player, number } = props;

  return (
    <div className={`draftedPlayers ${(() => {
      switch (player.position) {
        case 'RB':
          return 'RB'
        case 'QB':
          return 'QB'
        case 'WR':
          return 'WR'
        case 'TE':
          return 'TE'
        case 'DEF':
          return 'DEF'
        default:
          return null
      }
    })()}`}>
      <span>
        #{number + 1}&nbsp;
      </span>
      <span>
        Rank:&nbsp;{player.rank}&nbsp;
      </span>
      <span>
        {player.firstName}&nbsp;{player.lastName}&nbsp;
      </span>
      <span>
        {player.position}&nbsp;
      </span>
      <span>
        {player.team}
      </span>
    </div>
  )
}

export default DraftedPlayers;