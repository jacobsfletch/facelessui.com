import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { InstallationCode } from '@components/InstallationCode';
import { StyledList } from '@components/StyledList';
import { Hyperlink } from '@components/Hyperlink';
import { InlineCode } from '@components/InlineCode';

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
        {'This package provides a layer around '}
        <Hyperlink
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"
          newTab
          underline
        >
          CSS Grid Layout
        </Hyperlink>
        {'. By using the grid you also ensure proper alignment from anywhere in your app. Like all of React it is component-centric, so rows and columns are controlled using props and not class names. Grids can also be nested, so that alignment is maintained all the way through your DOM tree.'}
      </p>
      <p>
        Grids also multiple breakpoints &mdash; so the number of columns, the row gap, and the column gap can all vary based on screen size. This means a 14 column desktop grid could change to 8 columns on mobile. Cells can span a different number of these columns as breakpoints are met.
      </p>
      <Margin bottom="xs">
        <h5>
          Installation
        </h5>
        <InstallationCode name="css-grid" />
      </Margin>
      <Margin bottom="xs">
        <h5>
          How it works
        </h5>
        <p>
          {'At the top-level of your app, the '}
          <InlineCode>
            GridProvider
          </InlineCode>
          {' defines the global grid settings for your app which includes the number of columns, column gap, and row gap, per breakpoint. Behind the scenes, it generates a small stylesheet containing classes for every grid and cell combination. '}
        </p>
        <p>
          {'Now, you can use the '}
          <InlineCode>
            Grid
          </InlineCode>
          {' and '}
          <InlineCode>
            Cell
          </InlineCode>
          {' components as often as necessary to achieve your desired layout. '}
          <InlineCode>
            Cell
          </InlineCode>
          {' components are controlled using their '}
          <InlineCode>
            col
          </InlineCode>
          {' and '}
          <InlineCode>
            start
          </InlineCode>
          {' props '}
          &mdash;
          {' which determine how many columns that cell will span, and which column to start from, respectively. As the grid breaks down on smaller screens there are additional props to use, one for each breakpoint defined in your provider: '}
          <InlineCode>
            colL
          </InlineCode>
          {', '}
          <InlineCode>
            startL
          </InlineCode>
          {', '}<InlineCode>
            colM
          </InlineCode>
          {', '}
          <InlineCode>
            startM
          </InlineCode>
          {', '}<InlineCode>
            colS
          </InlineCode>
          {', '}
          <InlineCode>
            startS
          </InlineCode>
          {'.'}
        </p>
      </Margin>
      <Margin bottom="xs">
        <h5>
          Key features
        </h5>
        <StyledList
          items={[
            (
              <Fragment key={1}>
                Uses CSS Grid Layout
              </Fragment>
            ),
            (
              <Fragment key={1}>
                Custom grid breakpoints
              </Fragment>
            ),
            (
              <Fragment key={1}>
                Responsive cells
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
