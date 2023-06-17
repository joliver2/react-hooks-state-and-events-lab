import React, {useState} from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState("")

  function handleClick() {
    if (cart === "") {
      setCart((cart) => "in-cart")
    } else {
      setCart((cart) => "")
    }
  }

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
