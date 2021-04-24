import React, { ReactElement } from 'react'
import XIcon from './XIcon';
import OIcon from './OIcon';

interface Props {
    value: 'x' | 'o';
    onClick: () => void;
    index: number;
    disabled: boolean;
}

function Square({ onClick, value, index, disabled }: Props): ReactElement {
    return (
        <button className={"flex center-main center-cross square square-" + index} onClick={onClick} disabled={disabled}>
            {value ? value === 'x' ? <XIcon size={'inherit'} /> : <OIcon size={'inherit'} /> : null}
        </button>
    )
}

export default Square
