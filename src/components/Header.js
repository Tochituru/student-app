import React from 'react';

const Header = ({title, addStudent}) => {
    return (
        <div>
            <h1>{title}</h1>
        <button type={'button'} onClick={() => addStudent()}>Abrir modal</button>
        </div>
    )
}

export default Header;