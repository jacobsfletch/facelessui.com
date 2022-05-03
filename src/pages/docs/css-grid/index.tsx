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
        {'This package enables the rapid development of fully responsive layouts. Using a grid is useful to ensure proper horizontal alignment across your entire app, so that elements start and stop consistent points across the horizontal plane.'}
      </p>
      <p>
        {'The grid is a lightweight, component-centric wrapper around '}
        <Hyperlink
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"
          newTab
          underline
        >
          CSS Grid Layout
        </Hyperlink>
        {' — so props mirror this API as closely as possible.'}
      </p>
      <p>
        Grids can be nested, so that alignment is maintained all the way through your DOM tree. Grids also support multiple breakpoints &mdash; so your grid can vary based on screen size. For example, a 14 column desktop grid with a 10px gutter could change to 8 column, 5px gutter on mobile. Cells will span a different number of these columns as breakpoints are met, based on their props.
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
          {'At the top-level of your app, the '}
          <InlineCode>
            {'<GridProvider>'}
          </InlineCode>
          {' defines the global '}
          <Hyperlink
            href="/docs/css-grid#provider-props"
            underline
          >
            grid settings
          </Hyperlink>
          {', which may include column count, gutter, etc. Behind the scenes, it generates a tiny stylesheet containing classes for every grid and cell combination based on your particular configuration. These classes are used to provide size and position to each cell based on its props. '}
        </p>
        <p>
          <InlineCode>
            {'<Grid>'}
          </InlineCode>
          {' and '}
          <InlineCode>
            {'<Cell>'}
          </InlineCode>
          {' components are used as often as necessary to achieve your desired layout. '}
          {'Cells are controlled using props like '}
          <InlineCode>
            col
          </InlineCode>
          {' and '}
          <InlineCode>
            start
          </InlineCode>
          &mdash;
          {' which determine how many columns that cell will span, and which column to start from, respectively. As the grid breaks down on smaller screens there are additional props to use, one for each breakpoint defined in your provider. See the '}
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
              <Fragment key={1}>
                Follows native CSS Grid Layout
              </Fragment>
            ),
            (
              <Fragment key={1}>
                Separate and mobile grids
              </Fragment>
            ),
            (
              <Fragment key={1}>
                Rapid layout development
              </Fragment>
            ),
            (
              <Fragment key={1}>
                Nested grids
              </Fragment>
            )
          ]}
        />
      </Margin>
    </Fragment>
  )
}

GridDoc.Layout = Doc;

export default GridDoc;
