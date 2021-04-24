import React, { useEffect, useRef } from 'react'

interface Props {
    header?: JSX.Element | string;
    children: JSX.Element;
    closeModal: () => void;
}

const Modal = ({ header, children, closeModal }: Props) => {
    const modalBgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const modalRef = modalBgRef.current;
        modalBgRef.current?.addEventListener('click', (event) => (event.target as HTMLDivElement).classList.contains('modal') && closeModal());

        return () => {
            modalRef?.removeEventListener('click', (event) => (event.target as HTMLDivElement).classList.contains('modal') && closeModal());
        }
    }, [closeModal]);

    return (
        <div className="modal" ref={modalBgRef}>
            <div className="content flex flex-vertical center-cross">
                {
                    header ?
                        <div className="heading header flex center-main">
                            {header}
                        </div> :
                        null
                }
                <div className="body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
