import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { Heading } from '@components/Heading';
import { InstallationCode } from '@components/InstallationCode';
import { VersionNumber } from '@components/VersionNumber';
import { InlineCode } from '@components/InlineCode';
import { CodeBlock } from '@components/CodeBlock';
import { Hyperlink } from '@components/Hyperlink';

const CollapsiblesInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="Collapsibles Basic Setup"
      />
      <h1>
        Basic Setup
      </h1>
      <p>
        {'Latest version: '}
        <VersionNumber
          name="css-grid"
          element='span'
        />
      </p>
      <Margin bottom="xs">
        <Heading
          id="installation"
          href="/docs/collapsibles/setup#installation"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/setup#installation`}
          element='h5'
        >
          Installation
        </Heading>
        <InstallationCode name="collapsibles" />
      </Margin>
      <p>
        {'To create a new collapsible, wrap any section of your app with a '}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/collapsibles/api#collapsible"
          >
            {'<Collapsible>'}
          </Hyperlink>
        </InlineCode>
        {' component. This does not render anything to the DOM and provides context for the other components to work together. Inside this is the '}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/collapsibles/api#content"
          >
            {'<CollapsibleContent>'}
          </Hyperlink>
        </InlineCode>
        {' component, whose height is animated from 0 to auto-height on toggle. The easiest way to do this is to use the '}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/collapsibles/api#toggler"
          >
            {'<CollapsibleToggler>'}
          </Hyperlink>
        </InlineCode>
        {'.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { Collapsible } from \'@faceless-ui/collapsibles\';

export const MyComponent = () => {
  return (
    <Collapsible>
      <CollapsibleToggler>
        ...
      </CollapsibleToggler>
      <CollapsibleContent>
        ...
      </CollapsibleContent>
    </Collapsible>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'Wrap any number of collapsibles with the '}
        <InlineCode>
          {'<CollapsibleGroup>'}
        </InlineCode>
        {' component to create an accordion-like experience. When a collapsible is rendered inside a group, it is controlled by that group. This allows you to ensure only a single collapsible is open at a time.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { Collapsible } from \'@faceless-ui/collapsibles\';

export const MyComponent = () => {
  return (
    <CollapsibleGroup>
      <Collapsible>
        ...
      </Collapsible>
      <Collapsible>
        ...
      </Collapsible>
    </CollapsibleGroup>
  )
}`}
        </CodeBlock>
      </Margin>
    </Fragment>
  )
}

CollapsiblesInstallation.Layout = Doc;

export default CollapsiblesInstallation;
