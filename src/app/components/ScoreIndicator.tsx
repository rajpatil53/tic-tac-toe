import React from 'react'

interface Props {
    score1: number;
    score2: number;
}

const ScoreIndicator = ({ score1, score2 }: Props) => {
    return (
        <div className="scores shadow">
            {score1 + ' - ' + score2}
        </div>
    )
}

export default ScoreIndicator
