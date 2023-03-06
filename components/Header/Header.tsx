import React from 'react';
import { useRouter } from 'next/router';
import { HeaderComponent } from './HeaderComponent.Styles';
import {PATHS} from "../../constants/paths.constants";
import {DEFAULT_LANG, LOCALE_CODES, LOCALES} from "../../constants/locales.constants";

export default function Header() {
  const { locale } = useRouter();
  const loc: string = locale ? locale : DEFAULT_LANG;

  return (
    <HeaderComponent>
      <div className="grid-container">
        <div className="navigation">
          {/* Mobile */}
          <nav className="grid-x align-middle navigation--collapsed title-bar">
            <div className="navigation__logo -left">
              <a className="navigation__logo-link" href="/">
                <img className="img" src="/staticfiles/images/logo.svg" alt="Mining24" />
              </a>
            </div>
            <div
              id="mobileMenuBtn"
              className="menu-icon right"
            >
              <div className="x" />
              <div className="y" />
              <div className="z" />
            </div>
          </nav>
          {/* Desktop */}
          <nav className="align-middle stacked-for-medium navigation--expanded top-bar" id="navigation--expanded">
            <div className="navigation__logo -left">
              <a className="navigation__logo-link" href="/">
                <img className="img" src="/staticfiles/images/logo.svg" alt="Mining24" />
              </a>
            </div>
            <div className="navigation__right top-bar-left">
              <ul className="menu dropdown" role="menubar">
                <li role="menuitem" className="navigation-lang">
                  <button className="navigation-lang__btn">
                    <i className={`navigation-lang__flag -${loc}`} />
                    <span className="navigation-lang__value">{LOCALES[loc].slug}</span>
                    <i className="navigation-lang__arr" />
                  </button>
                  <div role="presentation" className="navigation-lang__tooltip">
                    <div className="navigation-lang__tooltip_wrap">
                      <ul className="navigation-lang__tooltip_list">
                        {
                          LOCALE_CODES.map((code: string) => (
                            <li key={code} data-value={LOCALES[code].symbol}>
                              <a className="navigation-lang__tooltip_item" href={LOCALES[code].path}>
                                <i className={`navigation-lang__tooltip_item_flag -${code}`} />
                                <span className="navigation-lang__tooltip_item_name" >{LOCALES[code].name}</span>
                                <div className={`navigation-lang__tooltip_item_check ${code === loc ? '-checked' : ''}`} />
                              </a>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="navigation__middle top-bar-middle">
              <ul className="menu dropdown" role="menubar">
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
            <div className="top-bar-right">
              <div className="btns">
                <div className="btn-wrap">
                  <a className="btn" href="#" target="_blank" onClick={() => console.log("Log in")}>Log in</a>
                </div>
                <div className="btn-wrap">
                  <a className="btn btn-green" href="#" target="_blank" onClick={() => console.log("Sign up")}>Sign up</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </HeaderComponent>
  );
};
