import { useState } from "react";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import "./App.css";

export default function App() {
  const [tasks, setaddtasks] = useState(["Assignments", "projects","exam preparations"]); //1.created
  const additems = (input) => {
    
    setaddtasks([...tasks, input]);
  };

  const deletelist = (idx) => {
    console.log("deletelist(id) is", idx);
    const removeIndex = idx;
    const remove = tasks.filter((el, id) => id !== removeIndex);
    console.log("remove index list", remove);

    setaddtasks(remove);
  };
  
  return (
    <div className="container">
      <div className="heading">
        
        <div>
          <h2>✔ToDoList</h2>
        </div>
      </div>
      <InputTextBox additems={additems} />
      <div>
        <ol>
          {tasks.map((tolist, index) => {
            return (
              <ToDoList
                tolist={tolist}
                key={index}
                id={index}
                deletelist={deletelist}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

function InputTextBox({ additems }) {
  const [input, setinputText] = useState("");
  const handeleChange = (event) => {
    const newValue = event.target.value;
    setinputText(newValue);
  };

  return (
    <div className="inputForm_conatiner">
      <div className="inputForm_conatiner__form">
        <input type="text" value={input} placeholder="Add new task" onChange={handeleChange} />
      </div>
      <div className="inputForm_conatiner__button">
        <button
          onClick={() => {
            additems(input);
            setinputText("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

function ToDoList({ tolist, id, deletelist }) {
  return (
    <div className="list_container">
      <div class="list_items">
        <li>{tolist}</li>
      </div>
      <div className="list_icons">
        <DeleteTwoToneIcon color="error" onClick={() => deletelist(id)} />
      </div>
    </div>
  );
}