import React, { useEffect, useState } from "react";
import AdminSideBar from "./sideBarAdmin";
import UserService from "../../services/userService";

export default function AdminManageProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await UserService.getProducts("all");

      setProducts(res);
      }
      fetchData();
  }, []);
    
    const moreDetails = (id) => {
  }
  return (
    <div className="wrapper">
      <AdminSideBar />

      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid mt-5">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Manage Products</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div
                    className="card-body table-responsive p-0"
                    style={{ height: "700px" }}
                  >
                    <table className="table table-head-fixed text-nowrap">
                      <thead>
                        <tr>
                          <th>Product name</th>
                          <th>Price</th>
                          <th>Warranty Period</th>
                          <th>Warranty Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map(
                          (
                            {
                              productName,
                              price,
                              warrantyPeriod,
                                  extendedWarrantyRate,
                              id
                            },
                            index
                          ) => (
                            <tr key={index}>
                              <td>{productName}</td>
                              <td>{price}</td>
                              <td>{warrantyPeriod}</td>
                              <td>{extendedWarrantyRate}</td>
                              <td>
                                <button className="btn btn-link" onClick={moreDetails(id)}>More</button>
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
