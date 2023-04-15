import { useState } from "react";
import { RiLoginBoxLine } from "react-icons/ri";

function Login() {
  // set form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //   Deconstruct form state
  const { email, password } = formData;

  //   On form submit check password and set userData
  const onSubmit = (e) => {
    e.preventDefault();
  };

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
          <RiLoginBoxLine />
          Login
        </h1>
        <p>Please login to your account!</p>
      </div>

      <div className="form login-form" >
        <form onSubmit={onSubmit}>
          <div className="form-items">
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
          </div>
          <div className="form-items">
            <button className="btn-block" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
