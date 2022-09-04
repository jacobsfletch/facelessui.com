import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { InlineCode } from '@components/InlineCode';
import { StyledList } from '@components/StyledList';
import { LogProps } from '@components/LogProps';
import { useMouseInfo } from '@faceless-ui/mouse-info';
import Margin from '@components/Margin';
import { Heading } from '@components/Heading';

const MouseInfoDoc = () => {
  const mouseInfo = useMouseInfo();

  return (
    <Fragment>
      <h1>
        Mouse Info
      </h1>
      <p>
        {'This is a utility to efficiently subscribe to window mouse events. As components in your application interact with mouse position, they compound mouse listeners which can be expensive to handle. To get around this, the '}
        <InlineCode>
          useMouseInfo
        </InlineCode>
        {' hook reads context from the '}
        <InlineCode>
          {'<MouseInfoProvider>'}
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
        This utility also conveniently interprets mouse data for you, such as direction of mouse movement and percentage within viewport.
      </p>
      <Heading
        id="features"
        href="/docs/mouse-info#features"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/mouse-info#features`}
        element='h5'
      >
        Key features
      </Heading>
      <Margin bottom="xs">
        <StyledList
          items={[
            (
              <div key={1}>
                Attaches single mouse-related event listeners to the window for your entire app
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
                Provides critical information about the current mouse position
              </div>
            )
          ]}
        />
      </Margin>
      <p>
        Move your cursor to see the effect:
      </p>
      <div>
        <LogProps {...mouseInfo} />
      </div>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/mouse-info/index.tsx`}
      metaTitle="Mouse Info "
      metaDescription="Overview of the @faceless-ui/mouse-info npm module."
      metaURL="/docs/mouse-info"
    />
  )
};

MouseInfoDoc.Layout = DocLayout;

export default MouseInfoDoc;
