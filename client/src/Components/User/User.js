import React from "react";
import { useDispatch } from "react-redux";
import { toggle_edit } from "../../JS/Actions/Edit";
import { delete_user } from "../../JS/Actions/Users";
import { Link } from "react-router-dom";

import "./User.css";

const User = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div className="our-team">
      <div className="picture">
        <img
          className="img-fluid"
          src="https://uctlanguagecentre.com/wp-content/uploads/2020/05/avatar.png"
          alt="user"
        />
      </div>
      <div className="team-content">
        <h3 className="name">{user.name}</h3>
        <h4 className="title">{user.email}</h4>
        <h4 className="title">Age: {user.age}</h4>

        <div>
          <Link to={{ pathname: "/edit_user", state: { ...user } }}>
            <button
              className="edit_btn"
              onClick={() => dispatch(toggle_edit())}
            >
              Edit
            </button>
          </Link>
          <button
            className="delete_btn"
            onClick={() => dispatch(delete_user(user._id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
