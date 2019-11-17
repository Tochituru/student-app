import React from 'react';

const Modal = ({isOpen, toggle, title, children}) => {
    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className={'modal-container'}>
                <p>{title}</p>
                {children}
                <button type='button' onClick={(e) => toggle(e)}>Cerrar</button>
            </div>
        </div>
    )
}
export default Modal

//toda función que tiene mayúsculas es un componente, una función "real" queda en minúsculas