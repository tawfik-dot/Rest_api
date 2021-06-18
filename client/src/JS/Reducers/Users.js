// import Constants
import { GET_USERS, LOAD_USERS, FAIL_USERS } from "../Constants/Constants";

// State initialisation
const InitialState = {
  users: [],
  load_users: false,
  errors: { data: { msg: "" } },
};
// PURE FUNCTION

const userReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case LOAD_USERS:
      return { ...state, load_users: true };
    case GET_USERS:
      return {
        ...state,
        users: payload.Response,
        load_users: false,
      };
    case FAIL_USERS:
      return { ...state, load_users: false, errors: payload };

    default:
      return state;
  }
};
// EXPORT
export default userReducer;
