import Meta from '@components/Meta';
import React, { Fragment, useEffect } from 'react';
import { Doc } from '@root/layout/Doc';
import { JumplistNode, useJumplist } from '@faceless-ui/jumplist';
import { cssGridJumplistNav } from '@root/docs-nav';
import { Heading } from '@components/Heading';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import { BasicProps } from '@components/BasicProps';
import Margin from '@components/Margin';
import { CodeBlock } from '@components/CodeBlock';

const CSSGridAPI = () => {
  const {
    setJumplist,
    clearJumplist
  } = useJumplist();

  useEffect(() => {
    const jumplist = cssGridJumplistNav.map((item) => ({ nodeID: item.id || '' }));
    setJumplist(jumplist);
    return () => {
      clearJumplist();
    }
  }, [
    setJumplist,
    clearJumplist
  ])

  return (
    <Fragment>
      <Meta
        title="CSS Grid API"
      />
      <h1>
        CSS Grid API
      </h1>
      <JumplistNode nodeID="provider">
        <Heading
          id="provider"
          href="/docs/css-grid/api#provider"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/css-grid/api#provider`}
          element='h4'
        >
          {'<GridProvider>'}
        </Heading>
        <p>
          {'This is where the global grid settings are defined. Render it one time in the top-level of your app. The grid can vary across screen sizes, so its properties need to be defined for each breakpoint. This API is a wrapper around CSS Grid Layout, so the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"
            underline
            newTab
          >
            MDN docs
          </Hyperlink>
          {' can be very helpful in understanding how it works.'}
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import react from 'react';
import { GridProvider } from '@faceless-ui/css-grid;

export const MyApp = () = (
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
);`}
          </CodeBlock>
        </Margin>
        <Heading
          id="provider-props"
          href="/docs/css-grid/api#provider-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/css-grid/api#provider-props`}
          element='h5'
        >
          Props
        </Heading>
        <InlineCode>
          breakpoints
        </InlineCode>
        <p>
          {'An object of breakpoints '}
          <InlineCode>
            l
          </InlineCode>
          {', '}
          <InlineCode>
            m
          </InlineCode>
          {', and '}
          <InlineCode>
            s
          </InlineCode>
          {'. The values are the widths of the breakpoints in pixels. These are breakpoints are used by the '}
          <InlineCode>
            {'<Cell>'}
          </InlineCode>
          {' components to make them responsive. These are also used to make the column and row gaps responsive as well.'}
        </p>
        <InlineCode>
          rowGap
        </InlineCode>
        <p>
          {'An object of row-gap values, one for each breakpoint. See the '}
          <Hyperlink
            newTab
            underline
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap"
          >
            MDN Docs
          </Hyperlink>
          {' for exact browser specifications. '}
        </p>
        <InlineCode>
          colGap
        </InlineCode>
        <p>
          {'An object of column-gap values, one for each breakpoint. See the '}
          <Hyperlink
            newTab
            underline
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap"
          >
            MDN Docs
          </Hyperlink>
          {' for exact browser specifications. '}
        </p>
        <InlineCode>
          cols
        </InlineCode>
        <p>
          {'The number of columns available at each breakpoint. Once a row reaches maximum capacity, cells will begin to wrap onto the next row.'}
        </p>
      </JumplistNode>
      <JumplistNode nodeID="grid">
        <Heading
          id="grid"
          href="/docs/css-grid/api#grid"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/css-grid/api#grid`}
          element='h4'
        >
          {'<Grid>'}
        </Heading>
        <p>
          {'The grid component establishes a new grid context. It is used to wrap cells and has no required props. You can also '}
          <Hyperlink
            href="/docs/css-grid/setup#nested-grids"
            underline
          >
            nest grids
          </Hyperlink>
          {' inside one another.'}
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import react from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid;

export const MyComponent = () = (
  <Grid>
    <Cell>
      ...
    </Cell>
  </Grid>
);`}
          </CodeBlock>
        </Margin>
        <Heading
          id="grid"
          href="/docs/css-grid/api#grid-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/css-grid/api#grid-props`}
          element='h5'
        >
          Props
        </Heading>
        <BasicProps />
      </JumplistNode>
      <JumplistNode nodeID="cell">
        <Heading
          id="cell"
          href="/docs/css-grid/api#cell"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/css-grid/api#cell`}
          element='h4'
        >
          {'<Cell>'}
        </Heading>
        <p>
          {'Each cell will span the columns of your grid based on the '}
          <InlineCode>
            cols
          </InlineCode>
          {' prop. Cells are displayed inline and wrap to the next row once that rows columns capacity has been met. Column and row gaps (gutters) are controlled by the '}
          <Hyperlink
            href="/docs/css-grid/api#grid"
            underline
          >
            grid provider
          </Hyperlink>
          {'.'}
        </p>
        <p>
          {'To make the cell responsive, redefine your can redefine the number of columns it spans on each of the '}
          <Hyperlink
            href="/docs/css-grid/api#breakpoints"
            underline
          >
            breakpoints
          </Hyperlink>
          {'.'}
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import react from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid;

export const MyApp = () = (
  <Grid>
    <Cell>

    </Cell>
  </Grid>
);`}
          </CodeBlock>
        </Margin>
        <Heading
          id="cell"
          href="/docs/css-grid/api#cell-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/css-grid/api#cell-props`}
          element='h5'
        >
          Props
        </Heading>
        <InlineCode>
          cols
        </InlineCode>
        <p>
          The number of columns for the cell to span.
        </p>
        <InlineCode>
          colsL
        </InlineCode>
        <p>
          {'The number of columns for the cell to span at your '}
          <InlineCode>
            l
          </InlineCode>
          {' breakpoint.'}
        </p>
        <InlineCode>
          colsM
        </InlineCode>
        <p>
          {'The number of columns for the cell to span at your '}
          <InlineCode>
            m
          </InlineCode>
          {' breakpoint.'}
        </p>
        <BasicProps />
      </JumplistNode>
    </Fragment>
  )
}

CSSGridAPI.Layout = Doc;

export default CSSGridAPI;
