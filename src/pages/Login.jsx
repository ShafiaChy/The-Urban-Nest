import React, { useContext, useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from "react-router-dom";
import illustration from "../assets/others/bg-authentication.jpg";
import SocialAuth from "../components/SocialAuth";
import { AuthContext } from "../contexts/AuthProvider";
import useToken from "../Hooks/useToken";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';


const Login = () => {
  const [error, setError] = useState("");
  const { user, signIn, setLoading } = useContext(AuthContext);
  const [loginUserEmail, setLoginUserEmail] = useState('');

  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const [token] = useToken(loginUserEmail);
  const from = location.state?.from?.pathname || "/";


  if (token) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user.accessToken);
        setLoginUserEmail(user.email);

        form.reset();
        setError("");

      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadCaptchaEnginge(6)
  }, [])
  const handleCaptcha = (e) => {
    const captcha = e.target.value
    console.log(captcha)
    if (validateCaptcha(captcha) == true) {

      setDisabled(false)
    }

    else {

      setDisabled(true)
    }
  }
  return (
    <div className="bg-login  h-min-screen flex items-center">
      {
        user && navigate(from, { replace: true })
      }
      <section >
        <div className="grid  md:grid-cols-2 ">
          <div className=" border-r-2 border-white">
            <Helmet>
              <title>UN Furniture |  Login</title>
            </Helmet>
            
            <img
              src={illustration}
              className="bg-cover block mx-auto"
              alt="Password_image"
            />
           
          </div>
          <div className="">
            <h1 className="text-white mt-16 font-bold text-center text-3xl">Login</h1>
            <form onSubmit={handleSubmit} className="md:w-1/2 mx-auto">
              {/* Input field with level from daisyui */}
              <div className=" form-control  mb-6">
                <label className="label">
                  <span className="text-white label-text font-bold">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Type here"
                  className="input bg-slate-300  input-bordered w-full "
                />
              </div>
              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="text-white  label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Type here"
                  className="input bg-slate-300 input-bordered w-full "
                />
              </div>
             
              < LoadCanvasTemplate reloadColor="gray" />
              <input
                type="text"
                name="text"
                placeholder="Type here"
                onBlur={handleCaptcha}
                className="input bg-slate-300 input-bordered w-full max-w-xs"
              />
              <div className="form-control w-full  mb-6">
                <input

                  type="submit"
                  disabled={disabled}
                  className={`bg-[#d1a054] mt-5 text-white font-bold py-2 px-4 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}

                  value={"Sign In"}

                />
              </div>
            </form>

            <div className="md:w-1/2 mx-auto">
              <p className="font-semibold text-center my-6 text-[#d1a054]">
                New here? <Link to='/register' className="font-bold">Create a New Account</Link>
              </p>
            </div>

            <div className="md:w-1/2 mx-auto">
              <p className="font-semibold text-center my-6 text-white">Or sign in with</p>
              {/* Separate component for Social login  */}
              <SocialAuth />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
