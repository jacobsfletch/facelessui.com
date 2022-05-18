import { Button } from '@components/Button';
import { Heading } from '@components/Heading';
import Margin from '@components/Margin';
import { MarginGrid } from '@components/MarginGrid';
import { Cell, Grid } from '@faceless-ui/css-grid';
import { BlockContainer } from '@root/layout/BlockContainer';
import { useCustomCursor } from '@root/providers/CustomCursorProvider';
import React from 'react';
import classes from './index.module.scss';

export const MainHero: React.FC = () => {
  const {
    setHighlightCursor
  } = useCustomCursor();

  return (
    <BlockContainer>
      <div className={classes.mainHero} >
        <Grid>
          <Cell
            cols={10}
            colsL={12}
            colsM={12}
          >
            <Margin bottom="small">
              <Heading
                element="h2"
                as="jumbo"
                marginTop={false}
              >
                Make any interface for any brand
              </Heading>
              <Heading
                element="h1"
                as="h5"
                marginBottom={false}
              >
                An unstyled and accessible React+TypeScript UI library
              </Heading>
            </Margin>
          </Cell>
        </Grid>
        <MarginGrid size="small">
          <Button
            href="/docs/getting-started"
            label="Get started"
            appearance="primary"
            onMouseEnter={() => {
              setHighlightCursor(true)
            }}
            onMouseLeave={() => {
              setHighlightCursor(false)
            }}
          />
        </MarginGrid>
      </div>
    </BlockContainer>
  )
}
