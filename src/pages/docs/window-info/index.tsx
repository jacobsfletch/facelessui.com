import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { InlineCode } from '@components/InlineCode';
import { StyledList } from '@components/StyledList';
import { useWindowInfo } from '@faceless-ui/window-info';
import { LogProps } from '@components/LogProps';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';

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
        This component:
      </p>
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
