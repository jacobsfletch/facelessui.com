import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { InstallationCode } from '@components/InstallationCode';
import { Heading } from '@components/Heading';

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
        <Heading
          id="installation"
          href="/docs/collapsibles#installation"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles#installation`}
          element='h5'
        >
          Installation
        </Heading>
        <InstallationCode name="collapsibles" />
      </Margin>
      <Margin bottom="xs">
        <Heading
          id="how-it-works"
          href="/docs/collapsibles#how-it-works"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles#how-it-works`}
          element='h5'
        >
          How it works
        </Heading>
        <p>
          This section has no content
        </p>
      </Margin>
      <Margin bottom="xs">
        <Heading
          id="features"
          href="/docs/collapsibles#features"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles#features`}
          element='h5'
        >
          Key features
        </Heading>
        <p>
          This section has no content
        </p>
      </Margin>
    </Fragment>
  )
}

CollapsiblesDoc.Layout = Doc;

export default CollapsiblesDoc;
