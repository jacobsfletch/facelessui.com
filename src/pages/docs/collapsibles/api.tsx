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
import { ClassPrefix } from '@components/ClassPrefix';
import { PropName } from '@components/PropName';
import { BasicContext } from '@components/BasicContext';

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
          {'This component provides a new '}
          <Hyperlink href="#context">
            collapsible context
          </Hyperlink>
          {' to any section of your app. It has no required props and renders nothing in the DOM. This is where the '}
          <Hyperlink href="#collapsible-props">
            collapsible settings
          </Hyperlink>
          {' are defined.'}
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
          href="#collapsible-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#collapsible-props`}
          element='h5'
        >
          Props
        </Heading>
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
        <Heading
          id="context"
          href="#context"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#context`}
          element='h5'
        >
          Context
        </Heading>
        <PropName
          name="isOpen"
          type="boolean"
          isContextProp
        />
        <p>
          The current status of the collapsible.
        </p>
        <PropName
          name="rootClass"
          type="string"
          isContextProp
        />
        <p>
          {'The root class for the collapsible. Appends '}
          <InlineCode href="#classPrev">
            classPrefix
          </InlineCode>
          {' to the class name, when defined.'}
        </p>
        <PropName
          name="handleClick()"
          type="object"
          isContextProp
        />
        <p>
          {'Used internally to report the toggle to the nearest '}
          <InlineCode>
            {'<CollapsibleGroup>'}
          </InlineCode>
          {', if nested.'}
        </p>
        <BasicContext />
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
        <BasicProps defaultElement="button" />
        <Heading
          id="toggler-a11y"
          href="toggler-a11y"
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
          href="#group"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#group`}
          element='h4'
        >
          {'<CollapsibleGroup>'}
        </Heading>
        <p>
          {'This component provides a new '}
          <Hyperlink href="#group-context">
            group context
          </Hyperlink>
          {' to any section of your app. It has no required props and renders nothing in the DOM. This is where the '}
          <Hyperlink href="#group-props">
            group settings
          </Hyperlink>
          {' are defined.'}
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import React from 'react';
import { CollapsibleGroup, Collapsible, CollapsibleContent } from \'@faceless-ui/collapsibles\';

export const MyComponent = () => {
  return (
    <CollapsibleGroup allowMultiple={false}>
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
        <Heading
          id="group-props"
          href="#group-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#group-props`}
          element='h5'
        >
          Props
        </Heading>
        <PropName
          name="allowMultiple"
          type="boolean"
        />
        <p>
          When false, will close all collapsibles in the group when one is opened.
        </p>
        <PropName
          name="transTime"
          type="number"
        />
        <p>
          {'Standardizes all transition times of the collapsibles within the group. Can be overridden on each collapsible with the '}
          <InlineCode href="#transTime"          >
            transTime
          </InlineCode>
          {' prop.'}
        </p>
        <PropName
          name="transCurve"
          type="string"
        />
        <p>
          {'Standardizes all transition curves of the collapsibles within the group. Can be overridden on each collapsible with the '}
          <InlineCode href="#transCurve"          >
            transCurve
          </InlineCode>
          {' prop.'}
        </p>
        <ClassPrefix />
        <Heading
          id="group-context"
          href="#group-context"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#group-context`}
          element='h5'
        >
          Context
        </Heading>
        <PropName
          name="toggleCount"
          type="number"
          isContextProp
        />
        <p>
          {'The number of times the group has been toggled. Incremented every time a collapsible is opened or closed.'}
        </p>
        <BasicContext
          href="#group-props"
        />
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
