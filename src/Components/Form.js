import { useState } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

export default function Form() {
  const [dataArr, setDataArr] = useState([
    { txt: "Apprendre react", id: uuidv4() },
    { txt: "Sport", id: uuidv4() },
    { txt: "Apprendre PHP", id: uuidv4() },
  ]);

  const deleteElement = (id) => {
const filteredState = dataArr.filter(item=>{
  return item.id !==id;
})
setDataArr(filteredState)
  };

  return (
    <div className="m-auto px-4 col-12 col-sm-10 col_lg-6">
      <form className="mb-3">
        <label htmlFor="todo" className="form-label mt-3">
          Chose à faire :
        </label>
        <input type="text" id="todo" className="form control" />
        <button className="mt-2 btn btn-primary d-block">Envoyez</button>
      </form>
      <h2>Liste des choses à faire : </h2>
      <ul className="list-group">
        {dataArr.map((item) => {
          return (
          <Item 
          txt={item.txt}
          key={item.id}
          id ={item.id}
          delFunc={deleteElement} 
          />
          )
        })}
      </ul>
    </div>
  );
}
