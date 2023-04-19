import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import "../css/pages/login.css";

// ****
import { RiLoginBoxLine } from "react-icons/ri";

function Login() {
  // set form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //   Deconstruct form state
  const { email, password } = formData;

  // initialize
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // get variables form auth state
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    // check for err
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  //   On form submit check password and set userData
  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));

    if (isLoading) {
      return <Spinner />;
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };
  return (
    <div className="login-page">
      <div className="form login-form">
        <form onSubmit={onSubmit}>
          <div className="form-items">
            <div className="heading">
              <h1>
                <RiLoginBoxLine />
                Login
              </h1>
            </div>
            <input
              type="text"
              className="form-input"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email.."
              onChange={onChange}
            />
            <input
              type="password"
              className="form-input"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password.."
              onChange={onChange}
            />
          </div>
          <button onClick={onRegister} className="redirect-btn ">
            Don't have an account?
          </button>
          <div className="form-items">
            <button className="btn-block" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
