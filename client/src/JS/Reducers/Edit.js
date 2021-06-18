// Import edit constants
import { TOGGLE_EDIT } from "../Constants/Edit";

// State initialisation
const initialState = {
  toggle_edit: false,
};

// PURE FUNCTION

const editReducer = (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_EDIT:
      return {
        ...state,
        toggle_edit: true,
      };

    default:
      return state;
  }
};

export default editReducer;
