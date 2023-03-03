import React from 'react';
import { HeaderComponent } from './HeaderComponent.Styles';
import {PATHS} from "../../constants/paths.constants";

export default function Header() {
  return (
    <HeaderComponent>
      <div className="grid-container">
        <div className="navigation">
          {/* Mobile */}
          <nav className="grid-x align-middle navigation--collapsed title-bar">
            <div className="navigation__logo left">
              <a href="/">
                <img className="img" src="/staticfiles/images/logo.svg" alt="Mining24" />
              </a>
            </div>
            <button
              type="button"
              id="mobileMenuBtn"
              className="menu-icon right"
            />
          </nav>
          {/* Desktop */}
          <nav className="align-middle stacked-for-medium navigation--expanded top-bar" id="navigation--expanded">
            <div className="navigation__logo show-for-large">
              <a href="/">
                <img className="img" src="/staticfiles/images/logo.svg" alt="Mining24" />
              </a>
            </div>
            <div className="navigation__left top-bar-left">
              <ul className="menu dropdown" role="menubar">
                <li role="menuitem">
                  <a className="link" data-anchor={PATHS.HOME} href={PATHS.HOME}>Home</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </HeaderComponent>
  );
};
