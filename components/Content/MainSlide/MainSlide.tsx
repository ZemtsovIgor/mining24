import { MainSlideComponent } from './MainSlideComponent';
import React from "react";

export default function MainSlide({ data }:any) {

  return (
    <MainSlideComponent className={`main-slide ${data.className}`}>
      <div className="grid-container">
        <div className="cell grid-x align-middle">
          <div className="cell small-12 large-6 left-side">
            <h1 className="h1" dangerouslySetInnerHTML={{ __html: data.title }} />
            <div className="btns">
              <div className="btn-wrap">
                <a className="btn btn-green" href="#" target="_blank" onClick={() => console.log("wow")}>{data.btnText}</a>
              </div>
            </div>
            <div className="text-wrap">
              <p className="text">{data.subText}</p>
            </div>
            <div className="show-for-small social">
              <div className="social-item">
                <a className="social-item__link" href="#">
                  <i className="social-item__icon -inst" />
                </a>
              </div>
              <div className="social-item">
                <a className="social-item__link" href="#">
                  <i className="social-item__icon -telegram" />
                </a>
              </div>
              <div className="social-item">
                <a className="social-item__link" href="#">
                  <i className="social-item__icon -twitter" />
                </a>
              </div>
            </div>
          </div>
          <div className="cell small-12 large-5 xlarge-6 large-offset-1 xlarge-offset-0 right-side">
            <div className="animation-wrap">
              <img className="animation" src="/staticfiles/images/phone.png" alt="phone" />
            </div>
            <div className="social hide-for-small -vertical">
              <div className="social-item">
                <a className="social-item__link" href="#">
                  <i className="social-item__icon -inst" />
                </a>
              </div>
              <div className="social-item">
                <a className="social-item__link" href="#">
                  <i className="social-item__icon -telegram" />
                </a>
              </div>
              <div className="social-item">
                <a className="social-item__link" href="#">
                  <i className="social-item__icon -twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainSlideComponent>
  );
};
