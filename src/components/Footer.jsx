import React from 'react';

function Footer (){
    const day = new Date()
    return(

        <footer>
        <div>Copyright @{day.getFullYear()} </div>
        </footer>

    )
}
export default Footer;