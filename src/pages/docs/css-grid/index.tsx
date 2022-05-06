import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { StyledList } from '@components/StyledList';
import { Hyperlink } from '@components/Hyperlink';
import { InlineCode } from '@components/InlineCode';
import { Heading } from '@components/Heading';

const GridDoc = () => {
  return (
    <Fragment>
      <Meta
        title="Grid"
      />
      <h1>
        Grid
      </h1>
      <p>
        {'This package enables the rapid development of fully responsive layouts. With the grid, elements start and stop at consistent points across the horizontal plane and respond based on screen size. This ensures proper alignment and spacing across your entire app. The grid is a lightweight, component-centric wrapper around '}
        <Hyperlink
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"
          newTab
          underline
        >
          CSS Grid Layout
        </Hyperlink>
        {' — so props mirror this API very closely.'}
      </p>
      <p>
        A powerful feature of the grid are its breakpoints &mdash; where you have different number of columns available on desktop than on mobile. For example, a 14 column desktop grid with a 10px gutter could change to 8 column grid with a 5px gutter on mobile. Cells will span a different number of these columns as breakpoints are met, based on their given props.
      </p>
      <Margin bottom="xs">
        <Heading
          id="how-it-works"
          href="/docs/css-grid#how-it-works"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/css-grid#how-it-works`}
          element='h5'
        >
          How it works
        </Heading>
        <p>
          {'At the top-level of your app is the '}
          <InlineCode>
            {'<GridProvider>'}
          </InlineCode>
          {'. This is where you define your global '}
          <Hyperlink
            href="/docs/css-grid#provider-props"
            underline
          >
            grid settings
          </Hyperlink>
          {', such as breakpoints and gutters. Behind the scenes, it generates a tiny stylesheet containing classes for every grid and cell combination based on your particular configuration. These classes are dynamically injected into every '}
          <InlineCode>
            {'<Cell>'}
          </InlineCode>
          {' component based on its props, providing size and position as conditions are met. '}
        </p>
        <p>
          <InlineCode>
            {'<Grid>'}
          </InlineCode>
          {' and '}
          <InlineCode>
            {'<Cell>'}
          </InlineCode>
          {' components can be used as often as necessary to achieve your desired layout. The '}
          <InlineCode>
            {'<Grid>'}
          </InlineCode>
          {' component has no required props and is only used to provide context to cells. Each '}
          <InlineCode>
            {'<Cell>'}
          </InlineCode>
          {' is controlled using props like '}
          <InlineCode>
            col
          </InlineCode>
          {' and '}
          <InlineCode>
            start
          </InlineCode>
          {' to determine how many columns the cell will span and which column to begin on. As the grid breaks down on smaller screens there is an additional prop for each breakpoint, like '}
          <InlineCode>
            colsM
          </InlineCode>
          {' and '}
          <InlineCode>
            startM
          </InlineCode>
          {'. See the '}
          <Hyperlink
            href="/docs/css-grid/api"
            underline
          >
            API
          </Hyperlink>
          {' for full details.'}
        </p>
      </Margin>
      <Margin bottom="xs">
        <Heading
          id="features"
          href="/docs/css-grid#features"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/css-grid#features`}
          element='h5'
        >
          Key features
        </Heading>
        <StyledList
          items={[
            (
              <Fragment key={0}>
                Rapid layout development
              </Fragment>
            ),
            (
              <Fragment key={1}>
                Responsive cells
              </Fragment>
            ),
            (
              <Fragment key={2}>
                Nested grids
              </Fragment>
            ),
            (
              <Fragment key={3}>
                Follows native CSS Grid Layout
              </Fragment>
            ),
            (
              <Fragment key={4}>
                Separate desktop and mobile grids
              </Fragment>
            ),
            (
              <Fragment key={5}>
                Consistent spacing and alignment
              </Fragment>
            ),
          ]}
        />
      </Margin>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/css-grid/index.tsx`}
    />
  )
};

GridDoc.Layout = DocLayout;

export default GridDoc;
