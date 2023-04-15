import { useState } from "react";
import { RiUserShared2Line } from "react-icons/ri";
import { toast } from "react-toastify";
import "../css/register.css";

function Register() {
  // set form state
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    passwordTwo: "",
  });

  //   Deconstruct form state
  const { name, username, email, password, passwordTwo } = formData;

  //   On form submit check password and set userData
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordTwo) {
      toast.error(`Whoops! Passwords don't match!`);
    } else {
      const userData = {
        name,
        username,
        email,
        password,
      };
    }
  };

  //   Handle on change
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="heading">
        <h1>
          <RiUserShared2Line /> Sign Up{" "}
        </h1>
        <p>Please create a account!</p>
      </div>

      <div className="form">
        <form onSubmit={onSubmit}>
          <div className="form-items">
            <input
              type="text"
              className="form-input"
              id="name"
              name="name"
              value={name}
              placeholder="Name.."
              onChange={onChange}
            />
            <input
              type="text"
              className="form-input"
              id="username"
              name="username"
              value={username}
              placeholder="Username..."
              onChange={onChange}
            />
            <input
              type="text"
              className="form-input"
              id="email"
              name="email"
              value={email}
              placeholder="Email.."
              onChange={onChange}
            />
            <input
              type="password"
              className="form-input"
              id="password"
              name="password"
              value={password}
              placeholder="Password.."
              onChange={onChange}
            />
            <input
              type="password"
              className="form-input"
              id="passwordTwo"
              name="passwordTwo"
              value={passwordTwo}
              placeholder="Confirm password.."
              onChange={onChange}
            />
          </div>
          <div className="form-items">
            <button className="btn register-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
