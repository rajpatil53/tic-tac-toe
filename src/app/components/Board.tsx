import React, { ReactElement, useEffect, useState } from 'react'
import Square from './Square';
import XIcon from './XIcon';
import OIcon from './OIcon';
import Modal from './Modal';
import Button from './Button';

interface Props {
    updateScores: (winner: Side) => void;
    isAIMode: boolean;
    player1Side: Side;
}

function Board({ updateScores, isAIMode, player1Side }: Props): ReactElement {
    const [squares, setSquares] = useState<SquareState>(Array(9).fill(null));
    const [steps, setSteps] = useState<number>(0);
    const [isXturn, setIsXturn] = useState(player1Side === 'x');
    const [winner, setWinner] = useState<Side | null | 'draw'>(null);
    const [isAIPlaying, setIsAIPlaying] = useState(false);
    const [isAITurn, setIsAITurn] = useState(false);

    const renderSquare = (i: number): ReactElement => (
        <Square
            onClick={() => onClickHandler(i)}
            value={squares[i]}
            index={i}
            key={i}
            disabled={isAIPlaying}
        />
    )

    useEffect(() => {
        checkWinner(squares);
    }, [squares]);

    useEffect(() => {
        const winner = checkWinner(squares);
        if (!winner && isAITurn) playAIMove();
    }, [isAITurn])

    const onClickHandler = (squareNum: number) => {
        if (winner || squares[squareNum]) return;
        playMove(squareNum);
        if (isAIMode) setIsAITurn(true);
    }

    const checkWinner = (squares: SquareState) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setWinner(squares[a]);
                updateScores(squares[a]);
                return squares[a];
            }
        }
        if (steps === 9) {
            setWinner('draw');
            return 'draw';
        }
        return null;
    }

    const playMove = (square: number) => {
        const newSquares = [...squares];
        newSquares[square] = isXturn ? 'x' : 'o';
        setSquares(newSquares);
        setIsXturn(!isXturn);
        setSteps(steps + 1);
    }

    const playAIMove = () => {
        setIsAIPlaying(true);
        let randomMove = Math.floor((Math.random() * 10) + 1);
        while (randomMove < 0 || randomMove > 8 || squares[randomMove] !== null) {
            randomMove = Math.floor((Math.random() * 10) + 1);
        }
        playMove(randomMove);
        setIsAITurn(false)
        setIsAIPlaying(false);
    }

    const resetGame = () => {
        setWinner(null);
        setSquares(Array(9).fill(null));
        setSteps(0);
        setIsXturn(player1Side === 'x');
        setIsAITurn(false);
    }

    return (
        <>
            <div className="board-container shadow gutter-bottom-lg">
                <div className="board-row flex">
                    {[
                        renderSquare(0),
                        renderSquare(1),
                        renderSquare(2)
                    ]}
                </div>
                <div className="board-row flex">
                    {[
                        renderSquare(3),
                        renderSquare(4),
                        renderSquare(5)
                    ]}
                </div>
                <div className="board-row flex">
                    {[
                        renderSquare(6),
                        renderSquare(7),
                        renderSquare(8)
                    ]}
                </div>
            </div>
            {
                winner ?
                    <Modal closeModal={() => resetGame()}>
                        <div className="flex flex-vertical center-main center-cross gutter-top-md gutter-bottom-md">
                            <div className="heading">{winner === 'draw' ? 'Draw' : 'Winner'}</div>
                            {winner === 'draw' ?
                                <div className="flex gutter-top-sm gutter-bottom-sm">
                                    <XIcon size="large" />
                                    <OIcon size="large" />
                                </div>
                                : <div className="gutter-top-sm gutter-bottom-sm">
                                    {
                                        winner === 'x' ?
                                            <XIcon size="large" /> : <OIcon size="large" />
                                    }
                                </div>
                            }
                            <Button type="primary" onClick={() => resetGame()}>Play Again</Button>
                        </div>
                    </Modal> :
                    null
            }
        </>
    )
}

export default Board
