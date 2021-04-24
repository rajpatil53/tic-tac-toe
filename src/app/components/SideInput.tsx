import React from 'react'

interface Props {
    id: string;
    icon: JSX.Element;
    value: string;
    isSelected: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SideInput = ({ id, icon, value, isSelected, onChange }: Props) => {
    return (
        <div className="side-input">
            <input type="radio" value={value} id={id} name="side" className="side-input" onChange={onChange} />
            <label htmlFor={id} className={"side-input-label flex flex-vertical center-main center-cross " + (isSelected ? 'active' : 'inactive')}>
                {icon}
                <div className="radio"></div>
            </label>
        </div>
    )
}

export default SideInput;
