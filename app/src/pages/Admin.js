import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">MERN Profile</h1>
      </header>
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Profile
            </a>
          </li>
        </ul>
        <div className="user-profile">
          <Link className="logout-btn" to="/login">
            Logout
          </Link>
        </div>
      </nav>
      <main className="main-content">
        <div className="profile-list">
          <div className="profile-header">
            <i className="user-icon"></i>
            <h2>Profiles list</h2>
          </div>
          <div className="profile-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Telephone</th>
                  <th>City</th>
                  <th>Country</th>
                  <th>Bio</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>youssef</td>
                  <td>test@live.fr</td>
                  <td>ADMIN</td>
                  <td>56666666</td>
                  <td>tunisia</td>
                  <td>tunisia</td>
                  <td>im full stack developer</td>
                  <td>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
