import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_user, edit_user } from "../../JS/Actions/Users";

import "./AddUser.css";

const AddUser = ({ location }) => {
  const toggle_edit = useSelector((state) => state.editReducer.toggle_edit);

  const { state } = location;
  const dispatch = useDispatch();
  const [name, setname] = useState(toggle_edit ? state.name : "");
  const [email, setemail] = useState(toggle_edit ? state.email : "");
  const [age, setage] = useState(toggle_edit ? state.age : "");

  return (
    <div className="AddUser">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close" />
              <div className="screen-header-button maximize" />
              <div className="screen-header-button minimize" />
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis" />
              <div className="screen-header-ellipsis" />
              <div className="screen-header-ellipsis" />
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <h2>{toggle_edit ? "Edit User" : "Add user"}</h2>
              <img
                className="user_img"
                src="https://uctlanguagecentre.com/wp-content/uploads/2020/05/avatar.png"
                alt="user"
              />
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="NAME"
                    onChange={(e) => setname(e.target.value)}
                    value={name}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="EMAIL"
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="AGE"
                    onChange={(e) => setage(e.target.value)}
                    value={age}
                  />
                </div>
                <div className="app-form-group buttons">
                  <button
                    onClick={() => {
                      if (toggle_edit) {
                        if (!name || !email || !age) {
                          alert("Please enter all fields!!");
                        } else {
                          if (isNaN(age)) {
                            alert("Age must be a number");
                          } else {
                            dispatch(
                              edit_user(state._id, { name, email, age })
                            );
                            alert("User edited successfully");
                          }
                        }
                      } else {
                        if (!name || !email || !age) {
                          alert("Please enter all fields!!");
                        } else {
                          if (isNaN(age)) {
                            alert("Age must be a number");
                          } else {
                            if (Number(age) <= 0) {
                              alert("Age must positive and not zero");
                            } else {
                              dispatch(add_user({ name, email, age }));
                              alert("User added successfully");
                              setname("");
                              setemail("");
                              setage("");
                            }
                          }
                        }
                      }
                    }}
                    className="app-form-button"
                  >
                    {toggle_edit ? "EDIT" : "SEND"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
