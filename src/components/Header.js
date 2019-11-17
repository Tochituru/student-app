import React from 'react';

const Header = ({title, newStudentModal}) => {
    return (
        <div>
            <h1>{title}</h1>
        <button type={'button'} onClick={() => newStudentModal()}>Agregar +</button>
        </div>
    )
}

export default Header;