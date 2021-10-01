import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const CSSGridInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="CSS Grid installation"
      />
      <h1>
        CSS Grid Installation
      </h1>
    </Fragment>
  )
}

CSSGridInstallation.Layout = Doc;

export default CSSGridInstallation;
