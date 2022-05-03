import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { Heading } from '@components/Heading';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';

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
          id="how-it-works"
          href="/docs/collapsibles#how-it-works"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles#how-it-works`}
          element='h5'
        >
          How it works
        </Heading>
        <p>
          {'Anything inside the '}
          <InlineCode>
            {'<CollapsibleContent>'}
          </InlineCode>
          {' component is collapsed and expanded remotely using context. You can do this manually, but the most common method is to use the '}
          <InlineCode>
            {'<CollapsibleToggler>'}
          </InlineCode>
          {' component. On toggle, the height of the container is animated from 0 to the auto-height using '}
          <Hyperlink
            underline
            href="https://github.com/Stanko/react-animate-height"
            newTab
          >
            react-animate-height
          </Hyperlink>
          {'.'}
        </p>
        <p>
          {'These components need to share a common '}
          <InlineCode>
            {'<Collapsible>'}
          </InlineCode>
          {' ancestor. This does not render anything to the DOM, but provides context for the other components to work together.'}
        </p>
        <p>
          {'Accordions are created by wrapping multiple using the '}
          <InlineCode>
            {'<CollapsibleGroup>'}
          </InlineCode>
          {' component. Collapsibles that are rendered inside a group are controlled by that group.'}
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
