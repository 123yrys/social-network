import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom"
//import Friend from '../Friends/Friend/Friend';

const Nav = (props) =>{
  return (
    <nav className={s.nav}>
        <ul>
          <li className={s.active}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
          </li>
          <li>
            <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
          </li>
          <li>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
          </li>
          <li>
            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
          </li>
          <li>
            <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
          </li>
          {/* <div className={s.sidebar_bottom}>
            <Friend store={props.store}/>
          </div> */}
        </ul>
      </nav>
  )
  }

export default Nav;

