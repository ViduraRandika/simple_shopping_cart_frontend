import React, { useState } from "react";
import { useForm } from "react-hook-form";
import reg_bg from "../assets/images/reg_bg.svg";
import "../assets/css/common.css";
import { toast } from "react-toastify";
import AuthService from "../services/authService";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [profilePic, setProfilePic] = useState();

  const onChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
    }
  }

  const onSubmit = async (data) => {
    await AuthService.register(data).then(async (res) => {
      if (res.data.error) {
        toast(res.data.error, {
          theme: "colored",
          type: "error",
          autoClose: 3000,
        });
      }

      if (res.data.msg) {
        if (profilePic) {
          console.log(profilePic);
          let formData = new FormData();
          formData.append("profilePic", profilePic);

          await AuthService.saveProfilePicture(formData).then((response) => {
            console.log(response);
          });
        }
        

        toast(res.data.msg, {
          theme: "colored",
          type: "success",
          autoClose: 2000,
        });
      }
    });
  };

  return (
    <section className="">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={reg_bg} alt="register_bacgkround" className="img-fluid" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-center text-lg-start mb-4 pt-2">
                <h1 className="mb-3">Register</h1>
              </div>
              <div className="form-floating mb-3">
                <label className="lbl-font-size">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="form-control form-control-lg"
                  placeholder="First Name"
                  {...register("firstName", { required: true })}
                />
                <p className="val_alert">
                  {errors.firstName?.type === "required" &&
                    "First name is required"}
                </p>
              </div>

              <div className="form-floating mb-3">
                <label className="lbl-font-size">last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="form-control form-control-lg"
                  placeholder="Last Name"
                  {...register("lastName", { required: true })}
                />
                <p className="val_alert">
                  {errors.lastName?.type === "required" &&
                    "Last name is required"}
                </p>
              </div>

              <div className="form-floating mb-3">
                <label className="lbl-font-size">Email</label>
                <input
                  type="text"
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
                  {errors.email?.type === "pattern" && "Invalid email address"}
                </p>
              </div>

              <div className="form-floating mb-3">
                <label className="lbl-font-size">Secondary Email</label>
                <input
                  type="email"
                  id="secondaryEmail"
                  className="form-control form-control-lg"
                  placeholder="Secondary Email"
                  {...register("secondaryEmail", {
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                <p className="val_alert">
                  {errors.secondaryEmail?.type === "pattern" &&
                    "Invalid email address"}
                </p>
              </div>

              <div className="form-floating mb-3">
                <label className="lbl-font-size">Address</label>
                <input
                  type="text"
                  id="address"
                  className="form-control form-control-lg"
                  placeholder="Address"
                  {...register("address", { required: true })}
                />
                <p className="val_alert">
                  {errors.address?.type === "required" && "Address is required"}
                </p>
              </div>

              <div className="form-floating mb-3">
                <label className="lbl-font-size">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNo"
                  className="form-control form-control-lg"
                  placeholder="Phone Number"
                  {...register("phoneNo", { pattern: /^[0-9]{10}$/ })}
                />
                <p className="val_alert">
                  {errors.phoneNo?.type === "pattern" && "Invalid phone number"}
                </p>
              </div>

              <div className="form-floating mb-3">
                <label className="lbl-font-size">Profile Picture</label>
                <input
                  type="file"
                  id="profilePic"
                  className="form-control form-control-lg"
                  placeholder="Select a profile picture"
                  onChange={onChange}
                />
              </div>

              <div className="form-floating mb-3">
                <label className="lbl-font-size">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  })}
                />
                <p className="val_alert">
                  {errors.password?.type === "required" &&
                    "Password is required"}
                  {errors.password?.type === "pattern" &&
                    "Password must contains minimum eight characters, at least one letter and one number"}
                </p>
              </div>

              <div className="form-floating mb-3">
                <label className="lbl-font-size">Confirm password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control form-control-lg"
                  placeholder="Confirm password"
                  {...register("confirmPassword", { required: true })}
                />
                <p className="val_alert">
                  {errors.confirmPassword?.type === "required" &&
                    "Confirm password is required"}
                  {watch("password") !== watch("confirmPassword") &&
                    "Passwords doesn't match"}
                </p>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg register-btn"
                >
                  Regiister
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already have an account?{" "}
                  <a href="/login" className="link-danger">
                    Login
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
