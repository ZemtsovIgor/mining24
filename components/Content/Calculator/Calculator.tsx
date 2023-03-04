import { CalculatorComponent } from './CalculatorComponent';
import React from "react";

export default function Calculator({ data }:any) {

  return (
    <CalculatorComponent className={`row ${data.className}`} id="calculator">
      <div className="grid-container">
        <div className="calculator-wrap grid-x">
          <div className="cell small-12 medium-12">
            <div className="titles">
              <h2 className="h2">BTC mining contract calculator</h2>
              <p className="text">With our calculator you can calculate the potential profit of mining BTC</p>
            </div>
            <div className="sliders">
              <div className="sliders__item">
                <div className="sliders__item-title_wrap">
                  <span className="sliders__item-title">Power</span>
                </div>
                <div className="sliders__item-slider_wrap">
                  <input className="sliders__item-slider" type="range" min="0" max="10" id="power_rangeSlider"  />
                </div>
              </div>
              <div className="sliders__item">
                <div className="sliders__item-title_wrap">
                  <span className="sliders__item-title">Contract duration (month)</span>
                </div>
                <div className="sliders__item-slider_wrap">
                  <input className="sliders__item-slider" type="range" min="0" max="10" id="duration_rangeSlider" />
                </div>
              </div>
              <div className="sliders__item">
                <div className="sliders__item-title_wrap">
                  <span className="sliders__item-title">BTC Forecast</span>
                </div>
                <div className="sliders__item-slider_wrap">
                  <input className="sliders__item-slider" type="range" min="0" max="10" id="forecast_rangeSlider" />
                </div>
              </div>
            </div>
            <div className="compare">
              <div className="compare__title-wrap">
                <span className="compare__title">For the same price: 450 USD</span>
              </div>
              <div className="compare__wrap">
                <div className="compare__item-wrap">
                  <div className="compare__item-line">
                    <span className="compare__item">You can buy:</span>
                    <span className="compare__item-balloon -purple">0% Profit</span>
                  </div>
                  <div className="compare__item-line">
                    <span className="compare__title">0.00500000 BTC</span>
                  </div>
                </div>
                <div className="compare__item-wrap">
                  <span className="compare__item -bright">OR</span>
                </div>
                <div className="compare__item-wrap">
                  <div className="compare__item-line">
                    <span className="compare__item">You can mine</span>
                    <span className="compare__item-balloon -green">100% Profit</span>
                  </div>
                  <div className="compare__item-line">
                    <span className="compare__title">0.04548889 BTC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cell small-12 medium-12">
            <div className="total">
              <div className="total__title-wrap">
                <span className="total__title">Total contract hash power</span>
                <span className="total__title-under">7713 TH</span>
              </div>
              <div className="total__bonus-wrap">
                <span className="total__bonus">5.35 TH/s | Months</span>
                <span className="total__bonus-balloon -green">+0.27 TH/s BONUS</span>
              </div>
              <div className="total__profit-wrap">
                <div className="total__profit-items">
                  <div className="total__profit-item">
                    <i className="total__profit-circle -green" />
                    <span className="total__profit">Invested: 450 USD</span>
                  </div>
                  <div className="total__profit-item">
                    <i className="total__profit-circle -purple" />
                    <span className="total__profit">Total Profit: 4094 USD</span>
                  </div>
                </div>
                <div className="total__profit-rating_wrap">
                  <div className="total__profit-rating">
                    <span className="total__profit-rating_percent">810%</span>
                  </div>
                </div>
              </div>
              <div className="total__text-wrap">
                <span className="total__text">Contract Profit: 810%</span>
              </div>
              <div className="total__text-wrap">
                <span className="total__text">Total: 450 USD (0.00500000 BTC)</span>
              </div>
              <div className="total__details-wrap">
                <ul className="total__details">
                  <li className="total__details-col -hidden">
                    <div className="total__details-head">
                      <span className="total__details-head_text">Contract Details</span>
                      <i className="total__details-head_icon" />
                    </div>
                    <div className="total__details-body">
                      <div className="total__details-body__line">
                        <span className="total__details-body__text">Daily mining</span>
                        <span className="total__details-body__value">0.00003314 BTC | $ 2.98</span>
                      </div>
                      <div className="total__details-body__line">
                        <span className="total__details-body__text">Monthly mining</span>
                        <span className="total__details-body__value">0.00101077 BTC | $ 90.97</span>
                      </div>
                      <div className="total__details-body__line">
                        <span className="total__details-body__text">Total mining</span>
                        <span className="total__details-body__value">0.04548889 BTC | $ 4094</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="total__btn-wrap">
                <a className="btn btn-green total__btn" href="#" target="_blank" onClick={() => console.log("wow")}>Buy contract</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CalculatorComponent>
  );
};
