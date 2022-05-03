import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { InlineCode } from '@components/InlineCode';
import { StyledList } from '@components/StyledList';
import { useWindowInfo } from '@faceless-ui/window-info';
import { LogProps } from '@components/LogProps';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { Heading } from '@components/Heading';

const WindowInfoDoc = () => {
  const windowInfo = useWindowInfo();

  return (
    <Fragment>
      <Meta
        title="Window Info"
      />
      <h1>
        Window Info
      </h1>
      <p>
        {'This is a utility to efficiently subscribe to window resize events. As components in your application interact with window size, they compound resize listeners which can be expensive to handle. To get around this, the '}
        <InlineCode>
          useWindowInfo
        </InlineCode>
        {' hook reads context from the '}
        <InlineCode>
          {'<WindowInfoProvider>'}
        </InlineCode>
        &nbsp;
        &mdash;
        {' which attaches only a single event listener to the window. These events are also piped through '}
        <InlineCode>
          requestAnimationFrame
        </InlineCode>
        {' so they are already optimized for performance.'}
      </p>
      <p>
        The window info utility also conveniently watches breakpoints for you. This enables you to write highly-performant js-based media queries, which can match your exact css media queries. This can be useful for conditionally rendering, or any other css-in-js.
      </p>
      <Heading
        id="features"
        href="/docs/window-info#features"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/window-info#features`}
        element='h5'
      >
        Key features
      </Heading>
      <Margin bottom="xs">
        <StyledList
          items={[
            (
              <div key={1}>
                Attaches a single resize event listener to the window for your entire app
              </div>
            ),
            (
              <div key={3}>
                {'Throttles these events through '}
                <InlineCode>
                  requestAnimationFrame
                </InlineCode>
              </div>
            ),
            (
              <div key={4}>
                Watches css media queries based on your custom breakpoints
              </div>
            ),
            (
              <div key={4}>
                Provides critical information about the current window
              </div>
            )
          ]}
        />
      </Margin>
      <p>
        Resize your window to see the effect:
      </p>
      <Margin bottom="small">
        <div>
          <LogProps {...windowInfo} />
        </div>
        <Hyperlink
          href="https://window-info.faceless-ui.com"
          underline
          newTab
        >
          <small>
            Demo in playground
          </small>
        </Hyperlink>
      </Margin>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/window-info/index.tsx`}
    />
  )
};

WindowInfoDoc.Layout = DocLayout;

export default WindowInfoDoc;
