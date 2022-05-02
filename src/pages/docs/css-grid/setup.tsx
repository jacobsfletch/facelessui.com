import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { VersionNumber } from '@components/VersionNumber';
import { Hyperlink } from '@components/Hyperlink';
import { InlineCode } from '@components/InlineCode';
import Margin from '@components/Margin';
import { CodeBlock } from '@components/CodeBlock';
import { Heading } from '@components/Heading';

const CSSGridInstallation = () => {
  return (
    <Fragment>
      <Meta
        title="CSS Grid Basic Setup"
      />
      <h1>
        Basic Setup
      </h1>
      <p>
        {'Latest version: '}
        <VersionNumber
          name="css-grid"
          element='span'
        />
      </p>
      <p>
        {'First, wrap your app with the provider. This component does not render anything, and should be nearest to the top of your app as possible. This is also where the '}
        <Hyperlink
          href="/docs/css-grid/api#provider-props"
          underline
        >
          global settings
        </Hyperlink>
        {' are defined, which includes the number of columns, row and column gaps, and breakpoints.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { GridProvider } from \'@faceless-ui/css-grid\';

export const MyApp = () => {
  return (
    <GridProvider
      breakpoints={{
        s: 768,
        m: 1279,
        l: 1679
      }}
      rowGap={{
        s: '1rem',
        m: '1rem',
        l: '4rem',
        xl: '4rem',
      }}
      colGap={{
        s: '10px',
        m: '10px',
        l: '4rem',
        xl: '4rem',
      }}
      cols={{
        s: 8,
        m: 8,
        l: 14,
        xl: 16,
      }}
    >
      ...
    </GridProvider>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'Then you can use the grid components anywhere in your app. First, render a '}
        <InlineCode>
          {'<Grid>'}
        </InlineCode>
        {' to establish a new grid context. Now you can freely use '}
        <InlineCode>
          {'<Cell>'}
        </InlineCode>
        {' components. Cells must be direct descendants of grids.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { Grid, Cell } from \'@faceless-ui/css-grid\';

export const MyComponent = () => {
  return (
    <Grid>
      <Cell
        cols={7}
        colsM={8}
      >
        <div>
          9 columns on desktop, full width on mobile
        </div>
      </Cell>
      <Cell
        cols={7}
        colsM={8}
      >
        <div>
          5 columns on desktop, full width on mobile
        </div>
      </Cell>
    </Grid>
  )
}`}
        </CodeBlock>
      </Margin>
      <Heading
        id="nested-grids"
        href="/docs/css-grid#nested-grids"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/css-grid#nested-grids`}
        element='h5'
      >
        Nested grids
      </Heading>
      <p>
        {'Grids can also be nested. To do this, just render a '}
        <InlineCode>
          {'<Grid>'}
        </InlineCode>
        {' before rendering another '}
        <InlineCode>
          {'<Cell>'}
        </InlineCode>
        {'. Also remember that number of columns reduces as you go deeper, depending on the props of the cell before it.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { Grid } from \'@faceless-ui/css-grid\';

export const MyComponent = () => {
  return (
    <Grid>
      <Cell
        cols={8}
        colsM={8}
      >
        <div>
          8 column cell, with 2 nested cells
        </div>
        <Grid>
          <Cell
            cols={4}
            colsM={8}
          >
            <div>
              Nested 4 column cell, full width on mobile
            </div>
          </Cell>
          <Cell
            cols={4}
            colsM={8}
          >
            <div>
              Nested 4 column cell, full width on mobile
            </div>
          </Cell>
        </Grid>
      </Cell>
    </Grid>
  )
}`}
        </CodeBlock>
      </Margin>
    </Fragment>
  )
}

CSSGridInstallation.Layout = Doc;

export default CSSGridInstallation;
