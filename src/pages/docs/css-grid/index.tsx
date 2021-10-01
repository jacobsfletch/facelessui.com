import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const CSSGrid = () => {
  return (
    <Fragment>
      <Meta
        title="CSS Grid"
      />
      <h1>
        CSS Grid
      </h1>
    </Fragment>
  )
}

CSSGrid.Layout = Doc;

export default CSSGrid;
