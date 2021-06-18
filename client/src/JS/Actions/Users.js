import axios from "axios";
import { FAIL_USERS, GET_USERS, LOAD_USERS } from "../Constants/Constants";

// Action GET ALL USERS
export const get_users = () => async (dispatch) => {
  dispatch({ type: LOAD_USERS });
  try {
    let response = await axios.get("/api/users/users_list");
    dispatch({ type: GET_USERS, payload: response.data }); //{msg:"",Response:[]}
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response });
  }
};

// Action DELETE USER BY ID
export const delete_user = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/users/delete_user/${id}`);
    dispatch(get_users());
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response });
  }
};

// Action ADD USER

export const add_user = (newuser) => async (dispatch) => {
  try {
    await axios.post("/api/users/add_user", newuser);
    dispatch(get_users());
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response });
  }
};

// Action EDIT USER

export const edit_user = (id, modification) => async (dispatch) => {
  try {
    await axios.put(`/api/users/edit_user/${id}`, modification);
    dispatch(get_users());
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response });
  }
};
