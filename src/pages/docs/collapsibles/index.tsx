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
      <h1>
        Collapsibles
      </h1>
      <p>
        This package enables you to easily collapse and expand content of any kind, creating rich dropdown or accordion-like experiences. Each collapsible item can be remotely controlled, giving your markup ultimate flexibility. Collapsible items can also be grouped together, so that all close when one opens.
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
          {' — an element whose height is animated from 0 to the auto-height using '}
          <Hyperlink
            href="https://github.com/Stanko/react-animate-height"
            newTab
          >
            react-animate-height
          </Hyperlink>
          {'. This makes it possible to animate arbitrary content heights, a limitation of CSS alone. '}
        </p>
        <p>
          {'To toggle the state of a collapsible there is a '}
          <InlineCode>
            {'<CollapsibleToggler>'}
          </InlineCode>
          {'component. This is a thin wrapper around the '}
          <InlineCode>
            useCollapsible
          </InlineCode>
          {' hook, firing the '}
          <InlineCode>
            open
          </InlineCode>
          {' method on click. This event propagates through the context to open or close the '}
          <InlineCode>
            {'<CollapsibleContent>'}
          </InlineCode>
          {'.'}
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
          {' is set to false on the group, all collapsibles will close except the open that was opened.'}
        </p>
        <p>
          {'Transition times and curves are also easily customized using props. See the '}
          <Hyperlink href="/docs/collapsibles/api">
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
      pageName="Collapsibles"
      pageTitle="Collapsibles"
      metaDescription="The collapsibles package."
    />
  )
};

CollapsiblesDoc.Layout = DocLayout;

export default CollapsiblesDoc;
