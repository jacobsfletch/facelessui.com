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
import { sharedContent } from '@root/utilities/sharedContent';
import { ClassPrefix } from '@components/BasicProps/ClassPrefix';
import { PropName } from '@components/PropName';

const CollapsiblesAPI = () => {
  const {
    setJumplist,
    clearJumplist
  } = useJumplist();

  useEffect(() => {
    const jumplist = collapsiblesJumplistNav.map((item) => ({
      nodeID: item.id || '',
      label: item.label,
    }));
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
        <p>
          {sharedContent.noRequiredProps}
        </p>
        <PropName
          name="openOnInit"
          type="boolean"
        />
        <p>
          If true, the collapsible will be open on initial render.
        </p>
        <PropName
          name="transTime"
          type="number"
        />
        <p>
          The time in it takes for each collapsible to expand and collapse. Default is 0ms.
        </p>
        <PropName
          name="transCurve"
          type="string"
        />
        <p>
          {'The timing function to use for the animation. Default is '}
          <InlineCode>
            linear
          </InlineCode>
          {'.'}
        </p>
        <PropName
          name="open"
          type="boolean"
        />
        <p>
          If true, the collapsible will be open. This is a useful pattern to control the collapsible with external state.
        </p>
        <PropName
          name="onToggle()"
          type="method"
        />
        <p>
          A callback function that is executed when the collapsible is toggled.
        </p>
        <ClassPrefix />
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
          This component renders a button that opens and closes the nearest collapsible when clicked. This is the easiest way to open and close a modal.
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
        <p>
          {sharedContent.noRequiredProps}
        </p>
        <BasicProps defaultElement="button" />
        <Heading
          id="toggler-a11y"
          href="/docs/collapsibles/api#toggler-a11y"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#toggler-a11y`}
          element='h5'
        >
          Accessibility
        </Heading>
        <p>
          {'The '}
          <InlineCode>
            type
          </InlineCode>
          {' attribute is automatically set to "button" when the '}
          <InlineCode>
            htmlElement
          </InlineCode>
          {' is button.'}
        </p>
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
          {sharedContent.noRequiredProps}
        </p>
      </JumplistNode>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/collapsibles/api.tsx`}
      pageName="Collapsibles API"
      metaTitle="Collapsibles API"
      metaDescription="API for the collapsibles package."
    />
  )
};

CollapsiblesAPI.Layout = DocLayout;

export default CollapsiblesAPI;
