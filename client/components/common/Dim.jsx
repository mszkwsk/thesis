import React from "react";

export const Dim = ({close}) =>
  <div
    className='modal-dim'
    onClick={() => close()}
  />