import React from "react";
import "./Portfoliolist.scss";

export default function Portfoliolist({ title, active, setSelected, id }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
