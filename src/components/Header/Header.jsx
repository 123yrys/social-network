import React from 'react';
import s from './Header.module.css'

function Header(){
  return (
    <header className={s.header}>
      <a href="">
        <img src="https://fsharp.org/img/logo/fsharp256.png"></img>
      </a>
    </header>
  )
  }

export default Header;

