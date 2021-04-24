import React, { ReactElement } from 'react';

interface Props {
    header?: JSX.Element;
    footer: JSX.Element;
    children: JSX.Element;
}

function Layout({ header, footer, children }: Props): ReactElement {
    return (
        <div className="page-container flex flex-vertical center-main center-cross">
            <div className="header flex center-main center-cross full-width">
                {header}
            </div>
            <div className="main">
                {children}
            </div>
            <div className="footer">
                {footer}
            </div>
        </div>
    )
}

export default Layout;
