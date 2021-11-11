import React from "react";
import "./Component.css";

const VIEWTODO = (props) => {
  console.log(props);
  let todoList = props.todoList ? props.todoList : null

  return (
    <>
      <div className="section">
        <h1 className="h1">User Details</h1>
        {todoList ? (
          <>
            <h2 className="detail">ID: {todoList.id}</h2>
            <h3 className="detail">Title: {todoList.title}</h3>
            {/* <h4 className="detail">Completed: {todoList.completed}</h4> */}
          </>
        ) : null}
      </div>
    </>
  );
};
//  DONE 
export default VIEWTODO;
