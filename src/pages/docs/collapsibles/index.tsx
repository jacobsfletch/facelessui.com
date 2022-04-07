import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { InstallationCode } from '@components/InstallationCode';

const CollapsiblesDoc = () => {
  return (
    <Fragment>
      <Meta
        title="Collapsibles"
      />
      <h1>
        Collapsibles
      </h1>
      <p>
        Installation
      </p>
      <Margin bottom="xs">
        <InstallationCode name="collapsibles" />
      </Margin>
      <p>
        This page has no content.
      </p>
      <Hyperlink
        href="https://collapsibles.faceless-ui.com"
        underline
        newTab
      >
        <small>
          Demo in playground
        </small>
      </Hyperlink>
    </Fragment>
  )
}

CollapsiblesDoc.Layout = Doc;

export default CollapsiblesDoc;
