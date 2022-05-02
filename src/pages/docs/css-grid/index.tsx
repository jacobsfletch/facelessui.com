import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { InstallationCode } from '@components/InstallationCode';
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
        {'This package provides a set of components that enable rapid development of responsive layouts. It is a lightweight, component-centric wrapper around '}
        <Hyperlink
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"
          newTab
          underline
        >
          CSS Grid Layout
        </Hyperlink>
        {' — so columns are controlled using props and not class names.'}
      </p>
      <p>
        Using a grid is useful to ensure proper horizontal alignment across your entire app. This means that elements start and stop consistent points across the horizontal plane. Grids can also be nested, so that alignment is maintained all the way through your DOM tree.
      </p>
      <p>
        Grids also support multiple breakpoints &mdash; to the row gap, column gap, and number of columns can vary based on screen size. This means a 14 column desktop grid could change to 8 columns on mobile. Cells can span a different number of these columns as breakpoints are met.
      </p>
      <Margin bottom="xs">
        <Heading
          id="installation"
          href="/docs/css-grid#installation"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/css-grid#installation`}
          element='h5'
        >
          Installation
        </Heading>
        <InstallationCode name="css-grid" />
      </Margin>
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
            GridProvider
          </InlineCode>
          {' defines the global '}
          <Hyperlink
            href="/docs/css-grid#provider-props"
            underline
          >
            grid settings
          </Hyperlink>
          {' for your app which includes the number of columns, column gap, and row gap — per breakpoint. Behind the scenes, it generates a small stylesheet containing classes for every grid and cell combination. '}
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
