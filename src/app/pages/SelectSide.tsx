import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Layout from '../components/Layout';
import OIcon from '../components/OIcon';
import SideInput from '../components/SideInput';
import XIcon from '../components/XIcon';
import { GlobalStateContext } from '../context/GlobalContextProvider';

interface Props {

}

const SelectSide = (props: Props) => {
    const { setPlayer1, setPlayer2, player1, player2 } = useContext(GlobalStateContext);

    const onSideSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
        const player1Side = event.target.value as Side;
        setPlayer1({
            ...player1,
            side: player1Side
        });
        setPlayer2({
            ...player2,
            side: player1Side === 'x' ? 'o' : 'x'
        });
    }

    return (
        <Layout
            header={
                <div className="title gutter-bottom-md">Pick your side</div>
            }
            footer={
                <Link to="/play">
                    <Button type="secondary">Continue</Button>
                </Link>
            }
        >
            <div className="flex center-main center-cross gutter-bottom-lg">
                <SideInput
                    id="x-side"
                    icon={<XIcon size="large" />}
                    value={'x'}
                    isSelected={player1.side === 'x'}
                    onChange={onSideSelected}
                />
                <SideInput
                    id="o-side"
                    icon={<OIcon size="large" />}
                    value={'o'}
                    isSelected={player1.side === 'o'}
                    onChange={onSideSelected}
                />
            </div>
        </Layout>
    )
}

export default SelectSide;
