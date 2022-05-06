import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { Heading } from '@components/Heading';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import { StyledList } from '@components/StyledList';

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
        This package enables you to easily collapse and expand content of any kind, creating rich dropdown or accordion-like experiences. Each collapsible item can be remotely controlled, giving your markup ultimate flexibility. Collapsible items can also be grouped together, so that only one is open at a time.
      </p>
      <p>
        Some common uses for this package include:
      </p>
      <Margin bottom="xs">
        <StyledList
          items={[
            (
              <div key={0}>
                Dropdowns
              </div>
            ),
            (
              <div key={1}>
                Accordions
              </div>
            )
          ]}
        />
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
          {'The '}
          <InlineCode>
            {'<Collapsible>'}
          </InlineCode>
          {' component does not render anything in the DOM, but controls the state of any nested '}
          <InlineCode>
            {'<CollapsibleContent>'}
          </InlineCode>
          {'. This component renders an element whose height is animated from 0 to the auto-height using '}
          <Hyperlink
            underline
            href="https://github.com/Stanko/react-animate-height"
            newTab
          >
            react-animate-height
          </Hyperlink>
          {'. This makes it possible to animate arbitrary content heights, a limitation of CSS alone. To toggle the state of a collapsible, render the '}
          <InlineCode>
            {'<CollapsibleToggler>'}
          </InlineCode>
          {' component.'}
        </p>
        <p>
          {'Accordions are created by wrapping multiple '}
          <InlineCode>
            {'<Collapsible>'}
          </InlineCode>
          {' components with a single '}
          <InlineCode>
            {'<CollapsibleGroup>'}
          </InlineCode>
          {'. Collapsibles that are rendered inside a group are partially controlled by that group. When '}
          <InlineCode>
            allowMultiple
          </InlineCode>
          {' is false, the group will close all collapsibles except the open that was opened.'}
        </p>
        <p>
          {'Transition times and curves are also easily customized using props. See the '}
          <Hyperlink
            underline
            href="/docs/collapsibles/api"
          >
            API
          </Hyperlink>
          {' for full details.'}
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
        <StyledList
          items={[
            (
              <div key={0}>
                Remotely controlled
              </div>
            ),
            (
              <div key={1}>
                Groupable
              </div>
            )
          ]}
        />
      </Margin>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/collapsibles/index.tsx`}
    />
  )
};

CollapsiblesDoc.Layout = DocLayout;

export default CollapsiblesDoc;
