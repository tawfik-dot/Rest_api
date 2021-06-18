import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_users } from "../../JS/Actions/Users";

import User from "../User/User";

import "./UsersList.css";

const UsersList = () => {
  // useDispatch
  const dispatch = useDispatch();
  // useSelector
  const user_list = useSelector((state) => state.userReducer.users);
  const loaduser = useSelector((state) => state.userReducer.load_users);
  const error = useSelector((state) => state.userReducer.errors.data.msg);
  console.log(error);
  // useEffect to get users when the component mount
  useEffect(() => {
    dispatch(get_users());
  }, [dispatch]);

  console.table(user_list);

  return (
    <div className="userslist">
      {loaduser ? (
        <img
          src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="spinner"
        />
      ) : error ? (
        <div className="hu__hu__">
          <h3>{error}</h3>
        </div>
      ) : (
        user_list.map((el) => <User key={el._id} user={el} />)
      )}
    </div>
  );
};

export default UsersList;
