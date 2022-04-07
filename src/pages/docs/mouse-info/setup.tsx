import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { CodeBlock } from '@components/CodeBlock';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';

const MouseInfoInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="Mouse Info Basic Setup"
      />
      <h4>
        Basic Setup
      </h4>
      <p>
        First, wrap your app with the provider. This component does not render anything, and should be nearest to the top of your app as possible to encompass any components that need to read from the provided context. This is also where your breakpoints get defined:
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { MouseInfoProvider } from \'@faceless-ui/mouse-info\';

export const App = () => {
  return (
    <MouseInfoProvider>
      ...
    </MouseInfoProvider>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'Then, consume the context however you need. The '}
        <InlineCode>
          useMouseInfo
        </InlineCode>
        {' hook is the most common use case:'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { useMouseInfo } from \'@faceless-ui/mouse-info\';

export const MyComponent = (props) => {
  const mouseInfo = useMouseInfo();
  return (
    ...
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'For more advanced setups, see the full '}
        <Hyperlink
          underline
          href="/docs/mouse-info/api"
        >
          API reference
        </Hyperlink>
        .
      </p>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/window-info/installation.tsx`}
    />
  )
};

MouseInfoInstallation.Layout = DocLayout;

export default MouseInfoInstallation;
