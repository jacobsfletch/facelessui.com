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
      <h1>
        Basic Setup
      </h1>
      <p>
        {'Latest version: '}
        <VersionNumber
          name="css-grid"
        />
      </p>
      <Margin bottom="xs">
        <Heading
          id="installation"
          href="/docs/collapsibles/setup#installation"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/setup#installation`}
          element="h2"
          as="h5"
        >
          Installation
        </Heading>
        <InstallationCode name="collapsibles" />
      </Margin>
      <p>
        {'To create a new collapsible, wrap any section of your app with a '}
        <InlineCode>
          <Hyperlink href="/docs/collapsibles/api#collapsible">
            {'<Collapsible>'}
          </Hyperlink>
        </InlineCode>
        {' component. This does not render anything to the DOM and provides context for the other components to work together. Then render a '}
        <InlineCode>
          <Hyperlink href="/docs/collapsibles/api#content">
            {'<CollapsibleContent>'}
          </Hyperlink>
        </InlineCode>
        {' component anywhere within this to have its height animated from 0 to auto-height on toggle. The easiest way to toggle a collapsible is with the '}
        <InlineCode>
          <Hyperlink href="/docs/collapsibles/api#toggler">
            {'<CollapsibleToggler>'}
          </Hyperlink>
        </InlineCode>
        {' component.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { Collapsible, CollapsibleToggler, CollapsibleContent } from \'@faceless-ui/collapsibles\';

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
        {'Pro tip: set the '}
        <InlineCode>
          openOnInit
        </InlineCode>
        {' prop to have the collapsible open on first render. '}
      </p>
      <p>
        {'To create an accordion-like experience, wrap any number of collapsibles with the '}
        <InlineCode>
          {'<CollapsibleGroup>'}
        </InlineCode>
        {' component. When a collapsible is rendered inside a group it becomes partially controlled by that group. Set '}
        <InlineCode>
          allowMultiple
        </InlineCode>
        {' to false to have the group close all other collapsibles when one opens.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { CollapsibleGroup, Collapsible } from \'@faceless-ui/collapsibles\';

export const MyComponent = () => {
  return (
    <CollapsibleGroup>
      <Collapsible openOnInit>
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

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`/collapsibles/setup.tsx`}
      metaTitle="Collapsibles Setup"
      metaDescription="Setup documentation for the @faceless-ui/collapsibles npm module."
      metaURL="/docs/collapsibles/setup"
    />
  )
};

CollapsiblesInstallation.Layout = DocLayout;

export default CollapsiblesInstallation;
