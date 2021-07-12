import React from "react";

function Item(props) {
  return (
    <li class="mycheck">
      <input type="checkbox" id="check" />
      <label>{props.todo}</label>
    </li>
  )
}

export default Item;
