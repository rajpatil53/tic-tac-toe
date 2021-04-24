import React from 'react';
import usePersistedState from '../hooks/usePersistedState';

interface Props {
    children: JSX.Element
}

export const GlobalStateContext = React.createContext<GlobalState>({
    isMultiplayer: true,
    player1: {
        name: 'Player 1',
        score: 0,
        side: 'x'
    },
    player2: {
        name: 'Player 2',
        score: 0,
        side: 'o'
    },
    setIsMultiplayer: () => { },
    setPlayer1: () => { },
    setPlayer2: () => { },
});

const GlobalContextProvider = (props: Props) => {
    const [isMultiplayer, setIsMultiplayer] = usePersistedState<boolean>(true, 'isMultiplayer');
    const [player1, setPlayer1] = usePersistedState<PlayerDetails>({
        name: 'Player 1',
        score: 0,
        side: 'x'
    }, 'player1');
    const [player2, setPlayer2] = usePersistedState<PlayerDetails>({
        name: 'Player 2',
        score: 0,
        side: 'o'
    }, 'player2');

    return (
        <GlobalStateContext.Provider value={{ isMultiplayer, setIsMultiplayer, player1, setPlayer1, player2, setPlayer2 }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalContextProvider;
