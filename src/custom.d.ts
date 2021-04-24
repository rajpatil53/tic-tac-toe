declare module "*.svg" {
    const content: any;
    export default content;
}

type Side = 'o' | 'x';
type SquareState = Side[];

type PlayerDetails = {
    name: string;
    score: number;
    side: Side
}

interface GlobalState {
    isMultiplayer: boolean;
    player1: PlayerDetails;
    player2: PlayerDetails;
    setIsMultiplayer: (value: boolean) => void;
    setPlayer1: (player: PlayerDetails) => void;
    setPlayer2: (player: PlayerDetails) => void;
}