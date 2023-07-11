import { combineReducers } from "redux";
import { actions } from "./action";

const todoList = [
  {
    id: 1,
    name: "Workout",
    isEdit: false
  }
];
const todoReducer = (state = todoList, action) => {
  console.log(action, "dispatch se aayega");
  console.log(action.payload, "dispatch payload");

  switch (action.type) {
    case actions.ADD_TODO:
      if (action.payload !== "") {
        const newTodo = {
          id: Math.random(),
          name: action.payload,
          isEdit: false
        };
        return [...state, newTodo];
      } else {
        alert("Please enter something");
        return state;
      }

    case actions.DELETE_TODO:
      state = state.filter((x) => x.id !== action.payload.id);
      return state;

    case actions.EDIT_TODO:
      action.payload.isEdit = true;
      return [...state];

    case actions.DONE_TODO:
      if (action.payload.valueNew !== "") {
        action.payload.x.isEdit = false;
        action.payload.x.name = action.payload.valueNew;
        return [...state];
      } else {
        alert("Please Edit the ToDo");
        return state;
      }

    default:
      return state;
  }
};

export const rootReducer = combineReducers({ todoReducer });
