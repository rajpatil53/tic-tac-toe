import React from 'react';

interface Props {
    type: 'primary' | 'secondary' | 'round';
    onClick?: () => void;
    children: JSX.Element | string
    className?: string;
}

const Button = ({ type, children, onClick, className }: Props) => {
    return (
        <button className={`flex center-main center-cross shadow btn btn-${type} ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;
