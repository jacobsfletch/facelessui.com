import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { InlineCode } from '@components/InlineCode';
import { StyledList } from '@components/StyledList';
import { useScrollInfo } from '@faceless-ui/scroll-info';
import { LogProps } from '@components/LogProps';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { InstallationCode } from '@components/InstallationCode';

const ScrollInfoDoc = () => {
  const scrollInfo = useScrollInfo();

  return (
    <Fragment>
      <Meta
        title="Scroll Info"
      />
      <h1>
        Scroll Info
      </h1>
      <p>
        Installation
      </p>
      <Margin bottom="xs">
        <InstallationCode name="scroll-info" />
      </Margin>
      <p>
        This component:
      </p>
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
    />
  )
};

ScrollInfoDoc.Layout = DocLayout;

export default ScrollInfoDoc;
