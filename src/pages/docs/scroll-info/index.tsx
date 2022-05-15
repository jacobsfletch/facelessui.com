import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { InlineCode } from '@components/InlineCode';
import { StyledList } from '@components/StyledList';
import { useScrollInfo } from '@faceless-ui/scroll-info';
import { LogProps } from '@components/LogProps';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { Heading } from '@components/Heading';

const ScrollInfoDoc = () => {
  const scrollInfo = useScrollInfo();

  return (
    <Fragment>
      <h1>
        Scroll Info
      </h1>
      <p>
        {'This is a utility to efficiently subscribe to window scroll events. As components in your application interact with scroll position, they compound scroll listeners which can be expensive to handle. To get around this, the '}
        <InlineCode>
          useScrollInfo
        </InlineCode>
        {' hook reads context from the '}
        <InlineCode>
          {'<ScrollInfoProvider>'}
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
        This utility also conveniently interprets scroll data for you, such as direction of scroll, scroll percentage, etc.
      </p>
      <Heading
        id="features"
        href="/docs/scroll-info#features"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/scroll-info#features`}
        element='h5'
      >
        Key features
      </Heading>
      <Margin bottom="xs">
        <StyledList
          items={[
            (
              <div key={1}>
                Attaches a single scroll listener to the window for your entire app
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
                Provides critical information about the current scroll position
              </div>
            )
          ]}
        />
      </Margin>
      <p>
        Scroll your window to see the effect:
      </p>
      <div>
        <LogProps {...scrollInfo} />
      </div>
      <Hyperlink
        href="https://scroll-info.faceless-ui.com"
        underline
        newTab
      >
        <small>
          Demo in playground
        </small>
      </Hyperlink>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/scroll-info/index.tsx`}
      pageName="Scroll Info"
      pageTitle="Scroll Info"
      metaDescription="The Scroll Info package."
    />
  )
};

ScrollInfoDoc.Layout = DocLayout;

export default ScrollInfoDoc;
