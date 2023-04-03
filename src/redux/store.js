import { createStore } from "redux";
import postReducer from "./reducer/todoReducer";

const store = createStore(postReducer);
export default store;
