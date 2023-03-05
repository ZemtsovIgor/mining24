import { MiningListComponent } from './MiningListComponent';
import React from "react";

export default function MiningList({ data }:any) {

  return (
    <MiningListComponent className="miningList">
      <div className="cell miningList__content">
        {
          (!!data.length) && (
            <ul className="miningList__content-list">
              {
                data.map((listItem:string) => (
                  <li
                    className="miningList__content-item"
                    key={Buffer.from(Math.random().toString()).toString('base64')}
                  >
                    <i className="miningList__content-item_icon" />
                    <span className="miningList__content-item_text">{listItem}</span>
                  </li>
                ))
              }
            </ul>
          )
        }

        <div className="btn-wrap">
          <a className="btn btn-green miningList__btn" href="#" target="_blank" onClick={() => console.log("Start mining")}>Start mining</a>
        </div>
      </div>
    </MiningListComponent>
  );
};
