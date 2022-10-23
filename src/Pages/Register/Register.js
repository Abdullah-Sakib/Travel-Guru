import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DarkHeader from "../Shared/DarkHeader/DarkHeader";
import googleImage from "../../assets/images/icons/google.png";
import facebookImage from "../../assets/images/icons/fb.png";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Register = () => {
  const { googleSignIn, facebookSignIn, createUser, updateUserProfile } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const handleFacebookSignIn = () => {
    facebookSignIn()
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(error => console.error(error))
  }
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if(password !== confirmPassword){
      alert('Password did not match.')
      return;
    }
    createUser(email, password)
    .then(() => {
      form.reset();
      updateProfile(firstName, lastName);
    })
    .catch(error => console.error(error));
  }
  const updateProfile = (firstName, lastName) =>{
    const name = firstName + ' ' + lastName;
    updateUserProfile(name)
    .then(() => {})
    .catch(error => console.error(error))
  }
  return (
    <div>
      <DarkHeader></DarkHeader>
      <div className="flex my-28 justify-center items-center">
        <div>
          <div className="card flex-shrink-0 w-96 border rounded-md max-w-sm shadow-2xl bg-base-100">
            <form className="card-body " onSubmit={handleSubmit}>
              <h1 className="text-start text-xl mb-3 font-semibold">
                Create an account
              </h1>
              <div className="form-control">
                <input
                  type="text"
                  name="firstName"
                  placeholder="first name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="lastName"
                  placeholder="last name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-warning">Register</button>
              </div>
              <label className="text-center">
                <Link to="/login" className="label-text-alt link link-hover ">
                  Already have an account?
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
            <button onClick={handleFacebookSignIn} className="flex items-center border rounded-3xl mb-2 w-full">
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

export default Register;
