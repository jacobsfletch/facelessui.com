import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const WhatIsFacelessUI = () => {
  return (
    <Fragment>
      <Meta>
        <title>
          What is Faceless UI?
        </title>
      </Meta>
      <h1>
        What is Faceless UI?
      </h1>
      <p>
        Faceless UI is a UI library for UI libraries. It is a set of utilities and components that together give you enough power and flexibility to power any brand. It is completely free of style and easily themed.
      </p>
      <p>
        Why not other UI libraries?
      </p>
      <p>
        Other UI libraries  overly-fancy naming schemes and patterns, giving you far too many components that have too specific use-cases.
      </p>
    </Fragment>
  )
}

WhatIsFacelessUI.Layout = Doc;

export default WhatIsFacelessUI;
