import React, { useState, useEffect } from "react";
import "./Portfolio.scss";
import Portfoliolist from "../portfoliolist/Portfoliolist";
import { featuredPortfolio, webPortfolio, designPortfolio } from "./../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "design",
      title: "Web Design",
    },
  ];

  useEffect(()=> {

        switch(selected){
            case "featured": setData(featuredPortfolio);
            break;
            case "web": setData(webPortfolio);
            break;
            case "design": setData(designPortfolio);
            break;
            default: setData(featuredPortfolio);
        }

  }, [selected])
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <Portfoliolist
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className="container">
          {data.map((d) => (
              
        <div className="title">
          <img
            src={d.img}
            alt=""
          />
          <h3>{d.title}</h3>
        </div>
          ))}
      </div>
    </div>
  );
}
