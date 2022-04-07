import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { CodeBlock } from '@components/CodeBlock';
import { Hyperlink } from '@components/Hyperlink';
import { InlineCode } from '@components/InlineCode';
import { InstallationCode } from '@components/InstallationCode';

const ScrollInfoAPI = () => {
  return (
    <Fragment>
      <Meta
        title="Scroll Info API"
      />
      <h1>
        Scroll Info API
      </h1>
      <p>
        Installation
      </p>
      <Margin bottom="xs">
        <InstallationCode name="scroll-info" />
      </Margin>
      <h4>
        Provider
      </h4>
      <Margin bottom="xs">
        <CodeBlock>
          {`import react from 'react';
import ScrollInfoProvider from '@faceless-ui/scroll-info;

export const MyApp = () = (
  <ScrollInfoProvider>
    ...
  </ScrollInfoProvider>
);`}
        </CodeBlock>
      </Margin>
      <p id="props">
        <b>
          Props:
        </b>
      </p>
      <InlineCode>
        children
      </InlineCode>
      <p>
        React children.
      </p>
      <p id="context">
        <b>
          Context:
        </b>
      </p>
      <InlineCode>
        x
      </InlineCode>
      <p>
        Current scroll position along the x axis
      </p>
      <InlineCode>
        y
      </InlineCode>
      <p>
        Current scroll position along the y axis
      </p>
      <InlineCode>
        xDifference
      </InlineCode>
      <p>
        Last number of pixels scrolled along the x-axis
      </p>
      <InlineCode>
        yDifference
      </InlineCode>
      <p>
        Last number of pixels scrolled along the y-axis
      </p>
      <InlineCode>
        xPercentage
      </InlineCode>
      <p>
        Percentage scrolled along the x-axis
      </p>
      <InlineCode>
        yPercentage
      </InlineCode>
      <p>
        Percentage scrolled along the y-axis
      </p>
      <InlineCode>
        totalPercentage
      </InlineCode>
      <p>
        Percentage scrolled along the both and x and y axes
      </p>
      <InlineCode>
        eventsFired
      </InlineCode>
      <p>
        Number of animation frames completed.
      </p>
      <h4>
        useScrollInfo
      </h4>
      <p>
        {'This is a hook you can use to access the '}
        <Hyperlink
          href={`/docs/scroll-info/api#context`}
          underline
        >
          context
        </Hyperlink>
        .
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import react from 'react';
import { useScrollInfo } from '@faceless-ui/scroll-info;

export const MyComponent = () => {
  const scrollInfo = useScrollInfo();
  return (
    ...
  )
};`}
        </CodeBlock>
      </Margin>
      <h4>
        withScrollInfo
      </h4>
      <p>
        {'This is a higher-order component you can use to access the '}
        <Hyperlink
          href={`/docs/scroll-info/api#context`}
          underline
        >
          context
        </Hyperlink>
        .
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import react from 'react';
import { withScrollInfo } from '@faceless-ui/scroll-info;

export const MyComponent = withScrollInfo((props) => {
  const { scrollInfo } = props;
  return (
    ...
  )
};`}
        </CodeBlock>
      </Margin>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/scroll-info/api.tsx`}
    />
  )
};

ScrollInfoAPI.Layout = DocLayout;

export default ScrollInfoAPI;
