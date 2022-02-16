import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { CodeBlock } from '@components/CodeBlock';

const MouseInfoAPI = () => {
  return (
    <Fragment>
      <Meta
        title="Mouse Info API"
      />
      <h1>
        Mouse Info API
      </h1>
      <h4>
        useMouseInfo
      </h4>
      <p>
        {'This is a hook you can use to access the '}
        <Hyperlink
          href={`/docs/mouse-info/api#context`}
          underline
        >
          context
        </Hyperlink>
        .
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import react from 'react';
import { useMouseInfo } from '@faceless-ui/mouse-info;

export const MyComponent = () => {
  const mouseInfo = useMouseInfo();
  return (
    ...
  )
};`}
        </CodeBlock>
      </Margin>
      <h4>
        withMouseInfo
      </h4>
      <p>
        {'This is a higher-order component you can use to access the '}
        <Hyperlink
          href={`/docs/mouse-info/api#context`}
          underline
        >
          context
        </Hyperlink>
        .
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import react from 'react';
import { withMouseInfo } from '@faceless-ui/mouse-info;

export const MyComponent = withMouseInfo((props) => {
  const { mouseInfo } = props;
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
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/mouse-info/api.tsx`}
    />
  )
};

MouseInfoAPI.Layout = DocLayout;

export default MouseInfoAPI;
