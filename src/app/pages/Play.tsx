import React, { useContext, useState } from 'react'
import Button from '../components/Button';
import Layout from '../components/Layout';
import SettingsIcon from '../components/SettingsIcon';
import Board from '../components/Board';
import { GlobalStateContext } from '../context/GlobalContextProvider';
import ScoreIndicator from '../components/ScoreIndicator';
import Modal from '../components/Modal';
import Settings from '../components/Settings';

interface Props {

}

const Play = (props: Props) => {

    const { player1, player2, setPlayer1, setPlayer2, isMultiplayer } = useContext(GlobalStateContext);
    const [showSettingsModal, setShowSettingsModal] = useState(false);

    const updateScores = (winner: Side) => {
        if (winner === player1.side) {
            setPlayer1({ ...player1, score: player1.score + 1 })
        }
        else {
            setPlayer2({ ...player2, score: player2.score + 1 })
        }
    }

    return (
        <Layout
            footer={
                <Button type="round" onClick={() => setShowSettingsModal(true)}>
                    <SettingsIcon />
                </Button>
            }
        >
            <div className="flex flex-vertical center-main center-cross">
                <div className="score-container full-width gutter-bottom-sm">
                    <div className="title flex center-cross">{player1.name}</div>
                    <div className=" flex center-main center-cross">
                        <ScoreIndicator score1={player1.score} score2={player2.score} />
                    </div>
                    <div className="title flex center-cross main-end right-align">{player2.name}</div>
                </div>
                <Board
                    updateScores={updateScores}
                    isAIMode={!isMultiplayer}
                    player1Side={player1.side}
                />
                {
                    showSettingsModal ?
                        <Modal header={"Settings"} closeModal={() => setShowSettingsModal(false)}>
                            <Settings />
                        </Modal> :
                        null
                }
            </div>
        </Layout>
    )
}

export default Play;