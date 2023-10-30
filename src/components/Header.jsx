import React from 'react';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

function Header (){
    return(
        <>
        <nav className='navbar'>
        <div><NoteAddIcon/> Keeper App</div>
        </nav>
        </>
    )
}

export default Header;