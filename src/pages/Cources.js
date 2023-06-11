import React from "react";
import { CourcesList } from "../helper/CourcesList";
import CourcesItem from "../Component/CourcesItem";
import "../styles/Cources.css";


function Cources() {
  return (
    <div className="courcesBackground">
      <h1 className="courcesTitle">Our Courses</h1>
      <div className="CourcesList">
        {CourcesList.map((courseItem, key) => (
          <CourcesItem
            key={key}
            id={courseItem.id}
            title={courseItem.title}
            instructor={courseItem.instructor}
            duration={courseItem.duration}
            image={courseItem.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Cources;
