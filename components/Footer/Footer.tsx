import React from 'react';
import { FooterComponent } from './FooterComponent.Styles';
import {PATHS} from "../../constants/paths.constants";

export default function Footer() {

  return (
    <FooterComponent>
      <div className="footer">
        <div className="grid-container">
          <div className="grid-x ">
            <div className="cell small-12 medium-12 xlarge-3">
              <div className="footer__logo text-center">
                <a className="footer__logo-link" href="/">
                  <img className="img" src="/staticfiles/images/logo.svg" alt="Mining24" />
                </a>
              </div>
            </div>
            <div className="cell small-12 medium-12 xlarge-7">
              <div className="footer-menu">
                <ul className="footer-menu__list">
                  <li role="menuitem">
                    <a className="link" data-anchor={PATHS.CONTRACT} href={PATHS.CONTRACT}>Contract</a>
                  </li>
                  <li role="menuitem">
                    <a className="link" data-anchor={PATHS.CALCULATOR} href={PATHS.CALCULATOR}>Calculator</a>
                  </li>
                  <li role="menuitem">
                    <a className="link" data-anchor={PATHS.ABOUT_US} href={PATHS.ABOUT_US}>About us</a>
                  </li>
                  <li role="menuitem">
                    <a className="link" data-anchor={PATHS.FAQ} href={PATHS.FAQ}>FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cell small-12 medium-12 xlarge-2">
              <div className="social footer-social">
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
      </div>
    </FooterComponent>
  );
};
