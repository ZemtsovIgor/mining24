import React from "react";
import {PATHS} from "../../constants/paths.constants";
import { MobileMenuComponent } from './MobileMenuComponent.Styles';
import {LOCALE_CODES, LOCALES} from "../../constants/locales.constants";
import {useRouter} from "next/router";
import i18nextConfig from "../../next-i18next.config";

export default function MobileMenu() {
  const router = useRouter();
  const loc: any = router.query.locale || i18nextConfig.i18n.defaultLocale
  console.log('currentLocale', loc);

  return (
    <MobileMenuComponent id="mobileMenu" className="off-canvas position-right is-transition-push is-closed">
      <div className="is-drilldown">
        <ul className="menu">
          <li className="nav-link">
            <a data-anchor={PATHS.CONTRACT} href={PATHS.CONTRACT}>Contract</a>
          </li>
          <li className="nav-link">
            <a data-anchor={PATHS.CALCULATOR} href={PATHS.CALCULATOR}>Calculator</a>
          </li>
          <li className="nav-link">
            <a data-anchor={PATHS.ABOUT_US} href={PATHS.ABOUT_US}>About us</a>
          </li>
          <li className="nav-link">
            <a data-anchor={PATHS.FAQ} href={PATHS.FAQ}>FAQ</a>
          </li>
        </ul>

        <ul className="dropdown mobile-lang" role="menubar">
          <li role="menuitem" className="navigation-lang" id="mobileNavigationLang">
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

        <div className="btns">
          <div className="btn-wrap">
            <a className="btn" href="#" target="_blank" onClick={() => console.log("Log in")}>Log in</a>
          </div>
          <div className="btn-wrap">
            <a className="btn btn-green" href="#" target="_blank" onClick={() => console.log("Sign up")}>Sign up</a>
          </div>
        </div>
      </div>
    </MobileMenuComponent>
  );
};
