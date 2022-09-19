import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminSideBar() {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-header" style={{ color: "white" }}>
                Manage Products
              </li>
              <li className="nav-item">
                <Link to="/admin/manage-products" className="nav-link">
                  <i className="fas nav-icon"></i>
                  <p style={{ color: "white" }}>Manage Products</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/add-product" className="nav-link">
                  <i className="fas nav-icon"></i>
                  <p style={{ color: "white" }}>Add Products</p>
                </Link>
              </li>
              <li className="nav-header" style={{ color: "white" }}>
                Manage Orders
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas nav-icon"></i>
                  <p style={{ color: "white" }}>New Orders</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas nav-icon"></i>
                  <p style={{ color: "white" }}>Fulfilled Orders</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
}