import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { VersionNumber } from '@components/VersionNumber';
import { Hyperlink } from '@components/Hyperlink';
import { InlineCode } from '@components/InlineCode';
import Margin from '@components/Margin';
import { CodeBlock } from '@components/CodeBlock';
import { Heading } from '@components/Heading';
import { InstallationCode } from '@components/InstallationCode';

const CSSGridInstallation = () => {
  return (
    <Fragment>
      <h1>
        Basic Setup
      </h1>
      <p>
        {'Latest version: '}
        <VersionNumber
          name="css-grid"
        />
      </p>
      <Margin bottom="xs">
        <Heading
          id="installation"
          href="/docs/css-grid/setup#installation"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/css-grid/setup#installation`}
          element='h5'
        >
          Installation
        </Heading>
        <InstallationCode name="css-grid" />
      </Margin>
      <p>
        {'First, wrap your app with the provider. This component does not render anything and should be nearest to the top of your app as possible. This is where the '}
        <Hyperlink href="/docs/css-grid/api#provider-props">
          global settings
        </Hyperlink>
        {' are defined.'}
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
        {'Now you can begin building layouts using the  '}
        <InlineCode>
          {'<Grid>'}
        </InlineCode>
        {' and '}
        <InlineCode>
          {'<Cell>'}
        </InlineCode>
        {' components. Every '}
        <InlineCode>
          {'<Cell>'}
        </InlineCode>
        {' must be a direct descendant of a '}
        <InlineCode>
          {'<Grid>'}
        </InlineCode>
        {'. You can also '}
        <Hyperlink href='#nested-grids'>
          nest grids
        </Hyperlink>
        {'.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { Grid, Cell } from \'@faceless-ui/css-grid\';

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
        {'Grids are easily nested. To do this, render a '}
        <InlineCode>
          {'<Grid>'}
        </InlineCode>
        {' component as a descendant of any '}
        <InlineCode>
          {'<Cell>'}
        </InlineCode>
        {'. Remember that number of columns reduce at each nesting, depending on the props of the collective cells before it.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { Grid } from \'@faceless-ui/css-grid\';

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
      <p>
        Pro tip: grids do not need to be direct descendants of cells
      </p>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/css-grid/setup.tsx`}
      metaTitle="CSS Grid API"
      metaDescription="Basic setup for the CSS Grid package."
    />
  )
};

CSSGridInstallation.Layout = DocLayout;

export default CSSGridInstallation;
