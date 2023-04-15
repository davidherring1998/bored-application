import { Link } from "react-router-dom";
import {RiLoginBoxLine, RiLogoutBoxLine, RiUserShared2Line} from 'react-icons/ri'
import {GiSurfBoard} from 'react-icons/gi'
import '../css/header.css'

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to={"/"}> < GiSurfBoard/> &nbsp; The Bored App</Link>
        </div>
        <ul>
          <li>
            <Link to={"/login"}> <RiLoginBoxLine /> Login</Link>
          </li>
          <li>
            <Link to={"/register"}> <RiUserShared2Line /> register</Link>
          </li>
        </ul>
      </div>
    </>
  );
}


// once the basic set up is running: 
// use a ? : to display multiple pages ex. photos, games, music
