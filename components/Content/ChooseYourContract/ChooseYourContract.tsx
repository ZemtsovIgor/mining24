import { ChooseYourContractComponent } from './ChooseYourContractComponent';
import React from "react";

export default function ChooseYourContract({ data }:any) {

  return (
    <ChooseYourContractComponent className={`row ${data.className}`} id="contract">
      <div className="grid-container">
        <div className="cell small-12 medium-12">
          <h2 className="h2">Choose your contract</h2>
        </div>
        <div className="grid-x choose-your-contract__container grid-margin-x">
          {
            data.items.map((item:any) => (
              <div
                key={Buffer.from(Math.random().toString()).toString('base64')}
                className={`cell grid-x small-6 xlarge-3 media-card -${item.color}`}
              >
                <div className="cell media-card__content">
                  <h3 className="h3">{item.title}</h3>
                  {
                    (!!item.list.length) && (
                      <ul className="list">
                        {
                          item.list.map((listItem:string) => (
                            <li className="list__item" key={Buffer.from(Math.random().toString()).toString('base64')}>{listItem}</li>
                          ))
                        }
                      </ul>
                    )
                  }
                  <span className="price">{item.price}</span>

                  <div className="btn-wrap">
                    <a className="btn" href="#" target="_blank" onClick={() => console.log("choose-your-contract")}>Buy contract</a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </ChooseYourContractComponent>
  );
};
