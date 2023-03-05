import { MonitoringComponent } from './MonitoringComponent';
import React from "react";

export default function Monitoring({ data }:any) {

  return (
    <MonitoringComponent className={`row monitoring ${data.className}`}>
      <div className="grid-container">
        <div className="monitoring-wrap grid-x">
          <div className="cell small-12 medium-12 xlarge-6">
            <div className="monitoring-titles">
              <h2 className="h2">{data.title}</h2>
              <p className="text">{data.sub_title}</p>
            </div>
            <div className="monitoring-list__wrap">
              {
                (!!data.list.length) && (
                  <ul className="monitoring-list">
                    {
                      data.list.map((listItem:string) => (
                        <li
                          className="monitoring-list__item"
                          key={Buffer.from(Math.random().toString()).toString('base64')}
                        >
                          <i className="monitoring-list__icon" />
                          <span className="monitoring-list__text">{listItem}</span>
                        </li>
                      ))
                    }
                  </ul>
                )
              }
            </div>
            <div className="btn-wrap monitoring-btn__wrap">
              <a className="btn btn-green monitoring-btn" href="#" target="_blank" onClick={() => console.log("Start mining")}>Start mining</a>
            </div>
          </div>
          <div className="cell small-12 medium-12 xlarge-6">
            <div className="monitoring-iframe__wrap">
              <div className="monitoring-iframe" />
            </div>
          </div>
        </div>
      </div>
    </MonitoringComponent>
  );
};
