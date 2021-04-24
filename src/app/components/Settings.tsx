import React from 'react'

interface Props {

}

const Settings = (props: Props) => {
    return (
        <ul className="settings">
            <li className="title">Login</li>
            <li className="title">Sound</li>
            <li className="title">Feedback</li>
        </ul>
    )
}

export default Settings
