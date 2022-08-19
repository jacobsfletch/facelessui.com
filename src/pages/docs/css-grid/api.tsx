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
import { ClassPrefix } from '@components/ClassPrefix';
import { BasicContext } from '@components/BasicContext';

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
          {'This component provides the '}
          <Hyperlink href="#context">
            grid context
          </Hyperlink>
          {' to your app. It does not have any required props and renders nothing in the DOM. This is where the '}
          <Hyperlink href="#provider-props">
            global settings
          </Hyperlink>
          {' are defined.'}
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
          <InlineCode href="#cell">
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
        <ClassPrefix />
        <Heading
          id="context"
          href="#context"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/css-grid/api#context`}
          element='h5'
        >
          Context
        </Heading>
        <PropName
          name="smallestBreakpointReached"
          type="string"
        />
        <p>
          {'The key of the smallest breakpoint reached. See '}
          <InlineCode href="#breakpoints">
            breakpoints
          </InlineCode>
          {'.'}
        </p>
        <BasicContext />
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
          {'This component wraps cells and has no required props. It creates a DOM element with the '}
          <InlineCode
            newTab
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"
          >
            grid-template-columns
          </InlineCode>
          {' CSS property — a dynamic value set based on the '}
          <Hyperlink href="#grid settings">
            grid settings
          </Hyperlink>
          {' and the number of columns currently available. You can also '}
          <Hyperlink href="#nested-grids">
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
        <Heading
          id="grid-context"
          href="#grid-context"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/css-grid/api#grid-context`}
          element='h5'
        >
          Context
        </Heading>
        <PropName
          name="cols"
          type="object"
          isContextProp
        />
        <p>
          The number of currently available columns, per breakpoint.
        </p>
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
          {'This component will create a DOM element that spans the columns of your grid based on the '}
          <InlineCode>
            cols
          </InlineCode>
          {' prop, which dynamically sets the '}
          <InlineCode
            newTab
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end"
          >
            grid-column-end
          </InlineCode>
          {' CSS property. Cells will display inline to one another and wrap to the next row once that row reaches maximum capacity. To make the cell responsive, redefine the number of columns it spans on each '}
          <Hyperlink href="#breakpoints">
            breakpoint
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
        <Heading
          id="cell-context"
          href="#cell-context"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/css-grid/api#cell-context`}
          element='h5'
        >
          Context
        </Heading>
        <PropName
          name="cols"
          type="object"
          isContextProp
        />
        <p>
          The number of currently available columns, per breakpoint.
        </p>
      </JumplistNode>
      <JumplistNode nodeID="useCell">
        <Heading
          id="useCell"
          href="#useCell"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/api#useCell`}
          element='h4'
        >
          useCell
        </Heading>
        <p>
          {'This is a hook you can use to access the context of any '}
          <InlineCode href="#cell-context" >
            {'<Cell>'}
          </InlineCode>
          {' component.'}
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import react from 'react';
import { useCell } from '@faceless-ui/css-grid;

export const MyComponent = () => {
  const cell = useCell();
  return (
    ...
  )
};`}
          </CodeBlock>
        </Margin>
      </JumplistNode>
      <JumplistNode nodeID="useGrid">
        <Heading
          id="useGrid"
          href="#useGrid"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/api#useGrid`}
          element='h4'
        >
          useGrid
        </Heading>
        <p>
          {'This is a hook you can use to access the context of any '}
          <InlineCode href="#grid-context" >
            {'<Grid>'}
          </InlineCode>
          {' component.'}
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import react from 'react';
import { useGrid } from '@faceless-ui/css-grid;

export const MyComponent = () => {
  const grid = useGrid();
  return (
    ...
  )
};`}
          </CodeBlock>
        </Margin>
      </JumplistNode>
      <JumplistNode nodeID="useSettings">
        <Heading
          id="useSettings"
          href="#useSettings"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/api#useSettings`}
          element='h4'
        >
          useSettings
        </Heading>
        <p>
          {'This is a hook you can use to access the global '}
          <Hyperlink href="#context" >
            grid settings
          </Hyperlink>
          .
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import react from 'react';
import { useSettings } from '@faceless-ui/css-grid;

export const MyComponent = () => {
  const settings = useSettings();
  return (
    ...
  )
};`}
          </CodeBlock>
        </Margin>
      </JumplistNode>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/css-grid/api.tsx`}
      metaTitle="CSS Grid API"
      metaDescription="API for the CSS Grid package."
    />
  )
};

CSSGridAPI.Layout = DocLayout;

export default CSSGridAPI;
