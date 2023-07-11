import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const [value, setValue] = useState("");
  const [valueNew, setValueNew] = useState("");
  const list = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  console.log(list);
  return (
    <div className="App">
      <h1>To Do List</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          dispatch({ type: "ADD_TODO", payload: value });
          setValue("");
        }}
      >
        ADD
      </button>
      {list.map((x) => (
        <div key={x.id}>
          {x.isEdit ? (
            <>
              <input
                value={valueNew}
                onChange={(e) => setValueNew(e.target.value)}
              />
              <button
                onClick={() =>
                  dispatch({ type: "DONE_TODO", payload: { valueNew, x } })
                }
              >
                DONE
              </button>
            </>
          ) : (
            <>
              <p>{x.name}</p>
              <button
                onClick={() => dispatch({ type: "DELETE_TODO", payload: x })}
              >
                {"❌"}
              </button>
              <button
                onClick={() => dispatch({ type: "EDIT_TODO", payload: x })}
              >
                EDIT
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
