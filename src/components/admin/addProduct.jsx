import React from "react";
import { useForm } from "react-hook-form";
import AdminSideBar from "./sideBarAdmin";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminService from "../../services/adminService";

export default function AdminAddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // toast("test");

  const onSubmit = async (data, e) => {
    await AdminService.addProduct(data).then(async (res) => {
      if (res) {
        e.target.reset();
        toast("Product added successfull", {
          theme: "colored",
          type: "success",
          autoClose: 3000,
        });
      } else {
        toast("Please check all the fields and submit again", {
          theme: "colored",
          type: "error",
          autoClose: 3000,
        });
      }
    });
  };
  return (
    <div className="wrapper">
      <AdminSideBar />

      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid mt-5">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add Products</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="card-body">
                    <div className="form-group">
                      <label>Product Name</label>
                      <input
                        type="text"
                        id="productName"
                        className="form-control"
                        placeholder="Enter product name"
                        {...register("productName", { required: true })}
                      />
                      <p className="val_alert">
                        {errors.productName?.type === "required" &&
                          "Product Name is required"}
                      </p>
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        type="text"
                        id="description"
                        className="form-control"
                        placeholder="Enter Description"
                        {...register("description", { required: true })}
                      />
                      <p className="val_alert">
                        {errors.description?.type === "required" &&
                          "Description is required"}
                      </p>
                    </div>
                    <div className="form-group">
                      <label>Price</label>
                      <input
                        type="number"
                        id="price"
                        className="form-control"
                        placeholder="Enter price"
                        {...register("price", { required: true })}
                      />
                      <p className="val_alert">
                        {errors.price?.type === "required" &&
                          "Price is required"}
                      </p>
                    </div>
                    <div className="form-group">
                      <label>Warranty periods (months)</label>
                      <input
                        type="number"
                        id="warrantyPeriod"
                        className="form-control"
                        placeholder="Enter warranty period"
                        {...register("warrantyPeriod", { required: true })}
                      />
                      <p className="val_alert">
                        {errors.warrantyPeriod?.type === "required" &&
                          "Warranty period is required"}
                      </p>
                    </div>
                    <div className="form-group">
                      <label>Warranty rate for a month if extending </label>
                      <input
                        type="number"
                        id="extendedWarrantyRate"
                        className="form-control"
                        placeholder="Enter warranty rate"
                        {...register("extendedWarrantyRate", {
                          required: true,
                        })}
                      />
                      <p className="val_alert">
                        {errors.extendedWarrantyRate?.type === "required" &&
                          "Warranty rate is required"}
                      </p>
                    </div>
                    <div className="form-group">
                      <label>Product Image</label>
                      <div className="input-group">
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            placeholder="Please choose image"
                          />
                          <label className="custom-file-label">
                            Choose file
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
