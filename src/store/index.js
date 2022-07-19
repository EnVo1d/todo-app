import { createStore } from "redux";
import todosReducer from "./reducer/todos-reducer";

let store = createStore(todosReducer);

export default store;