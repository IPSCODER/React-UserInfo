import React from "react";
import "./Component.css";

const Display = (props) => {
    console.log(props);
  let data = props.rows.map((e, key) => {
    return (
      <tr>
        <td>{e.id}</td>
        <td>{e.title}</td>
        <td>{e.completed}</td>
        <td>
          <button
            onClick={() => {
              props.getById(e.id);
            }}
          >
            Action
          </button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <div className="section">
        <table>
          <thead>
            <tr>
              <th>ToDo ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </table>
      </div>
    </>
  );
};

export default Display;
