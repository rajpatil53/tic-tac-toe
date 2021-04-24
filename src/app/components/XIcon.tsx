import React from 'react';
import XSvg from '../../assets/X.svg';

interface Props {
    size?: string;
}

const XIcon = ({ size }: Props) => {
    return (
        <img className={"icon " + size} src={XSvg} alt="X" />
    )
}

export default XIcon;
