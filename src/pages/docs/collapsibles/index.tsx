import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
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
        This package enables you to easily collapse content of any kind, creating rich dropdown or accordion-like experiences. Each collapsible item can be remotely controlled which gives ultimate flexibility to your markup. Collapsible items can also be group together, so that only one can be open at a time.
      </p>
      <Margin bottom="xs">
        <h5>
          Installation
        </h5>
        <InstallationCode name="collapsibles" />
      </Margin>
      <Margin bottom="xs">
        <h5>
          How it works
        </h5>
        <p>
          This section has no content
        </p>
      </Margin>
      <Margin bottom="xs">
        <h5>
          Key features
        </h5>
        <p>
          This section has no content
        </p>
      </Margin>
    </Fragment>
  )
}

CollapsiblesDoc.Layout = Doc;

export default CollapsiblesDoc;
