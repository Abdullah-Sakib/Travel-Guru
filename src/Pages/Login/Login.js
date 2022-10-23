import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DarkHeader from "../Shared/DarkHeader/DarkHeader";
import googleImage from "../../assets/images/icons/google.png";
import facebookImage from "../../assets/images/icons/fb.png";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const { googleSignIn, facebookSignIn, logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then(() => {
        form.reset();
        navigate(from, { replace: true })
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate(from, { replace: true })
      })
      .catch((error) => console.error(error));
  };
  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then(() => {
        navigate(from, { replace: true })
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <DarkHeader></DarkHeader>
      <div className="flex h-[100vh] justify-center items-center mt-7">
        <div>
          <div className="card flex-shrink-0 w-96 border rounded-md max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body ">
              <h1 className="text-start text-xl font-semibold">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-warning">
                  Login
                </button>
              </div>
              <label className="text-center">
                <Link
                  to="/register"
                  className="label-text-alt link link-hover "
                >
                  Don't have an account? create and accoount.
                </Link>
              </label>
            </form>
          </div>

          <div className="flex items-center my-4">
            <hr className="w-[45%]" />
            <span className="mx-3">Or</span>
            <hr className="w-[45%]" />
          </div>

          <div>
            <button
              onClick={handleFacebookSignIn}
              className="flex items-center border rounded-3xl mb-2 w-full"
            >
              <img className="w-10 p-1" src={facebookImage} alt="" />
              <p className="flex-grow">Continue with Facebook</p>
            </button>

            <button
              onClick={handleGoogleSignIn}
              className="flex items-center border rounded-3xl w-full"
            >
              <img className="w-10 p-1" src={googleImage} alt="" />
              <p className="flex-grow">Continue with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
