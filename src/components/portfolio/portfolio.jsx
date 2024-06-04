import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/portfolioList.jsx";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import Fade from "react-reveal/Fade";

import Zoom from "react-reveal/Zoom";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "Unity3d",
      title: "Unity/Unreal Engine",
    },
    {
      id: "Unity2d",
      title: "Unity 2D",
    },
    {
      id: "web",
      title: "Web Apps",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "Unity3d":
        setData(mobilePortfolio);
        break;
      case "Unity2d":
        setData(designPortfolio);
        break;
      case "web":
        setData(contentPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <Zoom left duration={1200}>
        <h1>Portfolio</h1>
      </Zoom>

      <ul>
        {list.map((item) => (
          <Zoom left duration={1300}>
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
              sourceLink={item.sourceLink}
            />
          </Zoom>
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <a href={d.sourceLink} target="_blank">
              <iframe src={d.img} />
              <h3>{d.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
