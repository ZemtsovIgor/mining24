import {PATHS} from "../../../constants/paths.constants";
import React from "react";

export default function MainLayout(props:any) {
  return (
    <>
      <div id="mobileMenu" className="off-canvas position-right is-transition-push is-closed">
        <div className="is-drilldown">
          <li className="nav-link">
            <a data-anchor={PATHS.HOME} href={PATHS.HOME}>Home</a>
          </li>
        </div>
      </div>

      <div
        id="mobileMenuOverlay"
        className="off-canvas-overlay is-overlay-fixed is-closable"
        role="banner"
        tabIndex={0}
      />

      <div
        id="pageContent"
        className="off-canvas-content has-transition-push has-position-right"
        itemScope
        itemType={props.itemtype}
      >
        {props.children}
      </div>
    </>
  );
};
