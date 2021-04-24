import React from 'react';
import OSvg from '../../assets/O.svg';

interface Props {
    size?: string;
}

const OIcon = ({ size }: Props) => {
    return (
        <img className={"icon " + size} src={OSvg} alt="O" />
    )
}

export default OIcon;
