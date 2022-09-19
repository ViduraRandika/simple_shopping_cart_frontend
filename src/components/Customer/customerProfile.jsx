import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/css/common.css";
import axios from "axios";
import CustomerService from "../../services/customerService";

axios.defaults.withCredentials = true;

export default function Profile() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await CustomerService.updateProfile(data);
    if (res.message) {
      toast(res.message, {
        theme: "colored",
        type: "success",
        autoClose: 3000,
      });
    } else {
      toast(res.error, {
        theme: "colored",
        type: "error",
        autoClose: 3000,
      });
    }
  };

  const [userDetails, setUserDetails] = useState("");

  useEffect(() => {
    CustomerService.viewProfile().then((res) => {
      setUserDetails(res.data);
    });
  }, []);

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-sm-12 mb-5">
          <h4>User Profile</h4>
        </div>
        <div className="col-sm-3">
          <div className="">
            <img
              src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
              className="avatar img-circle img-thumbnail"
              alt="avatar"
            />
            <h6>Change profile picture</h6>
            <input
              type="file"
              className="center-block file-upload"
            />
          </div>
        </div>
        <div className="col-sm-9">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <div className="col-xs-6">
                <label>
                  <h6>First name</h6>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="form-control "
                  placeholder="First Name"
                  defaultValue={userDetails.firstName}
                  {...register("firstName", { required: true })}
                />
                <p className="val_alert">
                  {errors.firstName?.type === "required" &&
                    "First name is required"}
                </p>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-6">
                <label>
                  <h6>Last name</h6>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  placeholder="Last Name"
                  defaultValue={userDetails.lastName}
                  {...register("lastName", { required: true })}
                />
                <p className="val_alert">
                  {errors.lastName?.type === "required" &&
                    "Last name is required"}
                </p>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-6">
                <label>
                  <h6>Email</h6>
                </label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  defaultValue={userDetails.email}
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
            </div>
            <div className="form-group">
              <div className="col-xs-6">
                <label>
                  <h6>Secondary Email</h6>
                </label>
                <input
                  type="email"
                  id="secondaryEmail"
                  className="form-control"
                  placeholder="Secondary Email"
                  defaultValue={userDetails.secondaryEmail}
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
            </div>
            <div className="form-group">
              <div className="col-xs-6">
                <label>
                  <h6>Address</h6>
                </label>
                <input
                  type="text"
                  id="address"
                  className="form-control"
                  placeholder="Address"
                  defaultValue={userDetails.address}
                  {...register("address", { required: true })}
                />
                <p className="val_alert">
                  {errors.address?.type === "required" && "Address is required"}
                </p>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-6">
                <label>
                  <h6>Phone number</h6>
                </label>
                <input
                  type="tel"
                  id="phoneNo"
                  className="form-control"
                  placeholder="Phone Number"
                  defaultValue={userDetails.phoneNo}
                  {...register("phoneNo", { pattern: /^[0-9]{10}$/ })}
                />
                <p className="val_alert">
                  {errors.phoneNo?.type === "pattern" && "Invalid phone number"}
                </p>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-12">
                <br />
                <button className="btn btn-success" type="submit">
                  <i className="glyphicon glyphicon-ok-sign"></i> Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  // }
}
