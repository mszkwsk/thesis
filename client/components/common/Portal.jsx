import ReactDOM from "react-dom";
import React from "react";

export const Portal = ({children}) =>
  ReactDOM.createPortal(<div>{children}</div>, document.body)
