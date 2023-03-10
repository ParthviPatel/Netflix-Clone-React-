import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {

// const [show, handleShow] = useState(false);

//  useEffect(() => {
//     window.addEventListener("scroll", () => {
//         if(window.screenY > 100){
//             handleShow(true);
//         } else handleShow(false);
//     });
//     return () => {
//         window.removeEventListener("scroll");
//     };
//  }, []);

  return (
    // <div className= {`nav ${show && "nav__black"}`}>
    <div className= 'nav'>
      <img 
            className='nav__logo'
            src= 'https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg'
            alt='Netflix logo'
        />

        <img 
            className='nav__avatar'
            src= 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='Netflix logo'
        />

    </div>
  )
}

export default Nav
