import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const DocsLanding = () => {
  return (
    <Fragment>
      <Meta>
        <title>
          Docs
        </title>
      </Meta>
      <h1>
        Docs
      </h1>
    </Fragment>
  )
}

DocsLanding.Layout = Doc;

export default DocsLanding;
