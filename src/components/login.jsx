import React from "react";
import { useForm } from "react-hook-form";
import login_bg from "../assets/images/login_bg.svg";
import "../assets/css/login.css";
import "../assets/css/common.css";
import AuthService from "../services/authService";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await AuthService.login(data).then(async (res) => {
      if (res === false) {
        toast("Incorrect email or password", { theme: "colored", type:"error", autoClose:3000});
      } else {
        toast("Login successfull", { theme: "colored", type:"success", autoClose:1000});
        await AuthService.navigate().then((res) => {
          if (res === "admin") {
            navigate('/admin');
          } else { 
            navigate('/product-list');
          }
        });
      }
    });
  };

  return (
    <section className="">
      <div className="container-fluid h-custom root-div-margin">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={login_bg} alt="login_bacgkround" className="img-fluid" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-center text-lg-start mb-4 pt-2">
                <h1 className="mb-3">Login</h1>
              </div>
              <div className="form-floating mb-4">
                <label className="lbl-font-size">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                <p className="val_alert">
                  {errors.email?.type === "required" && "Email is required"}
                </p>
              </div>

              <div className="form-floating mb-3">
                <label className="lbl-font-size">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />

                <p className="val_alert">
                  {errors.password?.type === "required" &&
                    "Password is required"}
                </p>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg login-btn"
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <a href="/register" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
