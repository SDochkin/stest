import React from "react";

import "./styles.css";

export const RegionInfo = ({ location: { state } }) => {
  const { data } = state;
  const normalizedData = Object.entries(data);
  return (
    <div className="info-container">
      <div className="data-container">
        {normalizedData.map((item) => {
          return (
            <div className="data-block" key={item[0]}>
              <p className="data-field">{item[0]}</p>
              <p className="data-field">{item[1]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
