import React from "react";

export default function MainLayout(props:any) {
  return (
    <>
      <div
        id="pageContent"
        className="off-canvas-content has-transition-push has-position-right"
      >
        {props.children}
      </div>
    </>
  );
};
