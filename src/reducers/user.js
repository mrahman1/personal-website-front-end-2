import {
  GET_CURRENT_USER,
  UPDATE_CURRENT_USER,
  SET_IMAGE
} from "../actions/types"

const initialState = { name: "", email: "", about: "", projects: []};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return { ...state,
        name: action.user.name,
        email: action.user.email,
        about: action.user.about,
        projects: action.user.projects
      };
    case UPDATE_CURRENT_USER:
      return {
        name: action.user.name,
        email: action.user.email,
        about: action.user.about,
        projects: action.user.projects
      };
    case SET_IMAGE:
      return {...state,
        image: action.image
      }
    default:
      return {...state};
  }
};

export default userReducer;
