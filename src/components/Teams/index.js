import React from 'react'
import CardTeam from '../CardTeam'
import './team.scss'
import { Gap } from '../../atoms'

const Teams = () => {
    return (
        <div className="team-container">
            <h2>Our Teams</h2>
            <div className="team-item">
                <CardTeam
                    image=""
                    name="Muhammad Fikri"
                    position="Website Design" />
                <Gap width={126} />
                <CardTeam
                    image=""
                    name="Muhammad Fikri"
                    position="Front End Developer" />
                <Gap width={126} />
                <CardTeam
                    image=""
                    name="Muhammad Fikri"
                    position="Back End Developer" />
            </div>
        </div>
    )
}

export default Teams
