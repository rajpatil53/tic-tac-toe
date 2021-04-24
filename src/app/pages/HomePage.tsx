import React, { useContext, useCallback, useState } from 'react'
import Layout from '../components/Layout';
import XIcon from '../components/XIcon';
import OIcon from '../components/OIcon';
import SettingsIcon from '../components/SettingsIcon';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { GlobalStateContext } from '../context/GlobalContextProvider';
import Modal from '../components/Modal';
import Settings from '../components/Settings';

interface Props {

}

const HomePage = (props: Props) => {
    const { setIsMultiplayer, player1, setPlayer1, player2, setPlayer2 } = useContext(GlobalStateContext);
    const [showSettingsModal, setShowSettingsModal] = useState(false);

    const setMultiplayerMode = useCallback(
        () => {
            setIsMultiplayer(true);
            setPlayer1({ ...player1, name: 'Player 1', score: 0 });
            setPlayer2({ ...player2, name: 'Player 2', score: 0 });
        }, [player1, player2, setIsMultiplayer, setPlayer1, setPlayer2]
    );

    const setAIMode = useCallback(
        () => {
            setIsMultiplayer(false);
            setPlayer1({ ...player1, name: 'Player 1', score: 0 });
            setPlayer2({ ...player2, name: 'AI', score: 0 });
        }, [player1, player2, setIsMultiplayer, setPlayer1, setPlayer2]
    );

    return (
        <Layout
            header={
                <div className="flex center-main center-cross gutter-bottom-lg">
                    <XIcon size="large" />
                    <OIcon size="large" />
                </div>
            }
            footer={
                <Button className="gutter-top-md" type="round" onClick={() => setShowSettingsModal(true)}>
                    <SettingsIcon />
                </Button>
            }
        >
            <div className="flex flex-vertical center-main center-cross">
                <div className="title gutter-top-lg gutter-bottom-md">Choose your play mode</div>
                <Link to={{ pathname: '/select', state: { mode: 'AI' } }}>
                    <Button type="primary" onClick={setAIMode}>With AI</Button>
                </Link>
                <Link to={{ pathname: '/select', state: { mode: 'Multiplayer' } }}>
                    <Button type="secondary" onClick={setMultiplayerMode}>With a friend</Button>
                </Link>
                {showSettingsModal ?
                    <Modal header={"Settings"} closeModal={() => setShowSettingsModal(false)}>
                        <Settings />
                    </Modal>
                    : null}
            </div>
        </Layout>
    )
}

export default HomePage;