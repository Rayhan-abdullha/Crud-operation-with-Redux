import {
  CREATE_POSTS,
  ERROR_POSTS,
  FETCH_POSTS,
  LOADING_POSTS,
  DELETE_POSTS,
  UPDATE_POSTS,
  SEND_DATA_MODAL,
} from "../actionTypes/actionTypes";

const init = {
  posts: [],
  error: "",
  loading: false,
  modalData: {},
};
const postReducer = (state = init, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: "",
      };
    case LOADING_POSTS:
      return {
        ...state,
        loading: action.payload,
        error: "",
      };
    case ERROR_POSTS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_POSTS:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case DELETE_POSTS:
      return {
        ...state,
        posts: [...action.payload],
      };
    case UPDATE_POSTS:
      return {
        ...state,
        posts: [...action.payload],
      };
    case SEND_DATA_MODAL:
      return {
        ...state,
        modalData: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
export default postReducer;
