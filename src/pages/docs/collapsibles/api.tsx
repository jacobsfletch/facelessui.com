import Meta from '@components/Meta';
import React, { Fragment, useEffect } from 'react';
import { Doc } from '@root/layout/Doc';
import { Heading } from '@components/Heading';
import { JumplistNode, useJumplist } from '@faceless-ui/jumplist';
import { collapsiblesJumplistNav } from '@root/docs-nav';
import { InlineCode } from '@components/InlineCode';
import Margin from '@components/Margin';
import { CodeBlock } from '@components/CodeBlock';
import { Hyperlink } from '@components/Hyperlink';
import { BasicProps } from '@components/BasicProps';

const CollapsiblesAPI = () => {
  const {
    setJumplist,
    clearJumplist
  } = useJumplist();

  useEffect(() => {
    const jumplist = collapsiblesJumplistNav.map((item) => ({ nodeID: item.id || '' }));
    setJumplist(jumplist);
    return () => {
      clearJumplist();
    }
  }, [
    setJumplist,
    clearJumplist
  ])

  return (
    <Fragment>
      <Meta
        title="Collapsibles API"
      />
      <h1>
        Collapsibles API
      </h1>
      <JumplistNode nodeID="collapsible">
        <Heading
          id="collapsible"
          href="/docs/collapsibles/api#collapsible"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#collapsible`}
          element='h4'
        >
          {'<Collapsible>'}
        </Heading>
        <p>
          This component render nothing in the DOM and is where you define your collapsible settings. It has no required props.
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import React from 'react';
import { Collapsible } from \'@faceless-ui/collapsibles\';

export const MyComponent = () => {
  return (
    <Collapsible
      openOnInit
      transTime={250}
      transCurve="linear"
      onToggle={() => { console.log('toggled') }}
      // open={false} NOTE: can also be used to control a collapsible
    >
      ...
    </Collapsible>
  )
}`}
          </CodeBlock>
        </Margin>
        <Heading
          id="collapsible-props"
          href="/docs/collapsibles/api#collapsible-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#collapsible-props`}
          element='h5'
        >
          Props
        </Heading>
        <InlineCode>
          openOnInit
        </InlineCode>
        <p>
          Optional. If true, the collapsible will be open on initial render.
        </p>
        <InlineCode>
          transTime
        </InlineCode>
        <p>
          Optional. The time in it takes for each collapsible to expand and collapse. Default is 0ms.
        </p>
        <InlineCode>
          transCurve
        </InlineCode>
        <p>
          {'Optional. The timing function to use for the animation. Default is '}
          <InlineCode>
            linear
          </InlineCode>
          {'.'}
        </p>
        <InlineCode>
          onToggle
        </InlineCode>
        <p>
          Optional. A callback function that is executed when the collapsible is toggled.
        </p>
        <InlineCode>
          open
        </InlineCode>
        <p>
          Optional. If true, the collapsible will be open. This is a useful pattern to control the collapsible with external state.
        </p>
        <InlineCode>
          groupClassPrefix
        </InlineCode>
        <p>
          Optional.
        </p>
      </JumplistNode>
      <JumplistNode nodeID="content">
        <Heading
          id="content"
          href="/docs/collapsibles/api#content"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#content`}
          element='h4'
        >
          {'<CollapsibleContent>'}
        </Heading>
        <p>
          {'The height of this component will be animated from 0 to auto-height content when the collapsible is triggered. This is made possible through '}
          <Hyperlink
            underline
            href="https://github.com/Stanko/react-animate-height"
            newTab
          >
            react-animate-height
          </Hyperlink>
          {'. This component has no required props.'}
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import React from 'react';
import { Collapsible, CollapsibleContent } from \'@faceless-ui/collapsibles\';

export const MyComponent = () => {
  return (
    <Collapsible>
      <CollapsibleContent>
        ...
      </CollapsibleContent>
    </Collapsible>
  )
}`}
          </CodeBlock>
        </Margin>
        <Heading
          id="content-props"
          href="/docs/collapsibles/api#content-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#content-props`}
          element='h5'
        >
          Props
        </Heading>
        <BasicProps />
      </JumplistNode>
      <JumplistNode nodeID="toggler">
        <Heading
          id="toggler"
          href="/docs/collapsibles/api#toggler"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#toggler`}
          element='h4'
        >
          {'<CollapsibleToggler>'}
        </Heading>
        <p>
          This component renders button that opens the nearest collapsible when clicked. This is the easiest way to open and close a modal. This component has no required props.
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import React from 'react';
import { Collapsible, CollapsibleToggler } from \'@faceless-ui/collapsibles\';

export const MyComponent = () => {
  return (
    <Collapsible>
      <CollapsibleToggler>
        ...
      </CollapsibleToggler>
    </Collapsible>
  )
}`}
          </CodeBlock>
        </Margin>
        <Heading
          id="toggler-props"
          href="/docs/collapsibles/api#toggler-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#toggler-props`}
          element='h5'
        >
          Props
        </Heading>
        <BasicProps defaultElement="button" />
      </JumplistNode>
      <JumplistNode nodeID="group">
        <Heading
          id="group"
          href="/docs/collapsibles/api#group"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#group`}
          element='h4'
        >
          {'<CollapsibleGroup>'}
        </Heading>
        <p>
          This section has no content
        </p>
        <Heading
          id="group-props"
          href="/docs/collapsibles/api#group-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#group-props`}
          element='h5'
        >
          Props
        </Heading>
        <p>
          This component has no required props.
        </p>
      </JumplistNode>
    </Fragment>
  )
}

CollapsiblesAPI.Layout = Doc;

export default CollapsiblesAPI;
