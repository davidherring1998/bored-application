import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//*****
import { logout, reset } from "../features/auth/authSlice";
import "../css/header.css";
//*****
import {
  RiLoginBoxLine,
  RiLogoutBoxLine,
  RiUserShared2Line,
} from "react-icons/ri";
import { GiSurfBoard } from "react-icons/gi";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    navigate("/register");
    dispatch(logout());
    dispatch(reset());
  };
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to={"/"}>
            <GiSurfBoard /> &nbsp; The Bored App
          </Link>
        </div>
        <ul>
          {/* Check if there is a user preset */}
          {user ? (
            <li>
              <button className="logout-btn btn" onClick={onLogout}>
                <RiLogoutBoxLine /> Logout
              </button>
            </li>
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
        </ul>
      </div>
    </>
  );
}

// once the basic set up is running:
// use a ? : to display multiple pages ex. photos, games, music
