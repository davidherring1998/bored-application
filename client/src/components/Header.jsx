import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//*****
import { logout, reset } from "../features/auth/authSlice";
import "../css/header.css";
//*****
import {
  RiLoginBoxLine,
  RiLogoutBoxLine,
  RiUserShared2Line,
} from "react-icons/ri";
import { ImPacman } from "react-icons/im";
import { MdCatchingPokemon } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import {AiOutlineQuestionCircle} from 'react-icons/ai'

export default function Header() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [isOpen, setIsOpen] = useState(false);

  const onLogout = () => {
    dispatch(logout());
    navigate("/register");
    dispatch(reset());
  };

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to={"/"}>
            <p>
              <ImPacman /> The Bored App
            </p>
          </Link>
        </div>
        <ul className="large-nav">
          {/* Check if there is a user preset */}
          {user ? (
            <>
              <li>
                <Link to={"/pokemon"}>
                  <button className="logout-btn btn">
                    <MdCatchingPokemon />
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/trivia"}>
                  <button className="logout-btn btn">
                    <AiOutlineQuestionCircle />
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="logout-btn btn">
                    <FaHome />
                  </button>
                </Link>
              </li>
              <li>
                <button className="logout-btn btn" onClick={onLogout}>
                  <RiLogoutBoxLine />
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={"/login"}>
                  <RiLoginBoxLine /> Login
                </Link>
              </li>
              <li>
                <Link to={"/register"}>
                  <RiUserShared2Line /> register
                </Link>
              </li>
            </>
          )}
          {/* <div className="small-nav">
            <button onClick={handleDropDown}>Menu</button>
            {isOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Item 2</a>
                </li>
                <li>
                  <a href="#">Item 2</a>
                </li>
                <li>
                  <a href="#">Item 3</a>
                </li>
              </ul>
            )}
          </div> */}
        </ul>
      </div>
    </>
  );
}

// once the basic set up is running:
// use a ? : to display multiple pages ex. photos, games, music
