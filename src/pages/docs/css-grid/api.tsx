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
import { PropName } from '@components/PropName';

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
      <h1>
        CSS Grid API
      </h1>
      <JumplistNode nodeID="provider">
        <Heading
          id="provider"
          href="#provider"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/css-grid/api#provider`}
          element='h4'
        >
          {'<GridProvider>'}
        </Heading>
        <p>
          {'Wrap your app with this component. It has no required props and renders nothing in the DOM. It provides context for all the components and hooks to work together. This is where the global '}
          <Hyperlink
            href="#context"
            underline
          >
            grid settings
          </Hyperlink>
          {' are defined. The grid can vary across screen sizes, so properties are defined on each breakpoint. This API is a wrapper around CSS Grid Layout, so the '}
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
          href="#provider-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/css-grid/api#provider-props`}
          element='h5'
        >
          Props
        </Heading>
        <PropName
          name="breakpoints"
          type="object"
        />
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
          {', equal to the width of the breakpoint in pixels. These breakpoints are used by the '}
          <InlineCode
            underline
            href="#cell"
          >
            {'<Cell>'}
          </InlineCode>
          {' components to make them responsive. These are also used to make the column and row gaps responsive.'}
        </p>
        <PropName
          name="rowGap"
          type="string"
        />
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
        <PropName
          name="colGap"
          type="string"
        />
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
        <PropName
          name="cols"
          type="number"
        />
        <p>
          {'The number of columns available at each breakpoint. Once a row reaches maximum capacity, cells will begin to wrap onto the next row.'}
        </p>
      </JumplistNode>
      <JumplistNode nodeID="grid">
        <Heading
          id="grid"
          href="#grid"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/css-grid/api#grid`}
          element='h4'
        >
          {'<Grid>'}
        </Heading>
        <p>
          {'This component wraps cells and has no required props. It establishes a new grid context for nested cells to consume, which must be directly descendent. You can also '}
          <Hyperlink
            href="/docs/css-grid/setup#nested-grids"
            underline
          >
            nest grids
          </Hyperlink>
          {' inside other grids.'}
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
          href="#grid-props"
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
          href="#cell"
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
          {' prop. Cells will display inline to one another and wrap to the next row once that row reaches maximum capacity. Number of columns and row gaps (gutters) are controlled by the '}
          <Hyperlink
            href="#grid"
            underline
          >
            grid provider
          </Hyperlink>
          {'. To make the cell responsive, redefine the number of columns it spans on each of the '}
          <Hyperlink
            href="#breakpoints"
            underline
          >
            breakpoints
          </Hyperlink>
          {', such as '}
          <InlineCode>
            colsM
          </InlineCode>
          {'.'}
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import react from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid;

export const MyApp = () = (
  <Grid>
    <Cell
      cols={12}
      colsM={6}
    >
      ...
    </Cell>
  </Grid>
);`}
          </CodeBlock>
        </Margin>
        <Heading
          id="cell"
          href="#cell-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/css-grid/api#cell-props`}
          element='h5'
        >
          Props
        </Heading>
        <PropName
          name="cols"
          type="number"
        />
        <p>
          The number of columns for the cell to span.
        </p>
        <PropName
          name="colsM"
          type="number"
        />
        <p>
          {'The number of columns for the cell to span at your '}
          <InlineCode>
            m
          </InlineCode>
          {' breakpoint.'}
        </p>
        <PropName
          name="colsL"
          type="number"
        />
        <p>
          {'The number of columns for the cell to span at your '}
          <InlineCode>
            l
          </InlineCode>
          {' breakpoint.'}
        </p>
        <BasicProps />
      </JumplistNode>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/css-grid/api.tsx`}
      pageName="CSS Grid API"
      pageTitle="CSS Grid API"
      metaDescription="API for the CSS Grid package."
    />
  )
};

CSSGridAPI.Layout = DocLayout;

export default CSSGridAPI;
