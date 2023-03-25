import { PartnersComponent } from './PartnersComponent';
import React from "react";

export default function Partners({ data }:any) {

  return (
    <PartnersComponent className="row partners">
      <div className="grid-container">
        <div className="cell grid-x align-center">
          <div className="cell small-12 align-center">
            <div className="partners-container">
              <div className="partners-wrap">
                {
                  data.list.map((item:any, index: number) => (
                    <div key={`partners-${index + 1}`} className="partners-item">
                      <img
                        className="partners-image"
                        src={item.image.src}
                        alt={item.image.alt}
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </PartnersComponent>
  );
};
