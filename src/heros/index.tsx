import { Card } from '@components/Card';
import { Heading } from '@components/Heading';
import { Hyperlink } from '@components/Hyperlink';
import { MarginGrid } from '@components/MarginGrid';
import { Cell, Grid } from '@faceless-ui/css-grid';
import { BlockContainer } from '@root/layout/BlockContainer';
import React from 'react';
import classes from './index.module.scss';

export const MainHero: React.FC = () => {
  return (
    <div className={classes.mainHero} >
      <BlockContainer>
        <Grid>
          <Cell
            cols={10}
            colsL={12}
            colsM={12}
          >
            <div className={classes.heading}>
              <Heading
                className={classes.headingText}
                element="h1"
                marginBottom={false}
              >
                An unstyled React+Typescript UI library for brands
              </Heading>
              <Hyperlink
                className={classes.headingLink}
                href="/docs/getting-started"
              >
                Learn more
              </Hyperlink>
            </div>
          </Cell>
        </Grid>
      </BlockContainer>
      <div className={classes.componentsContainer}>
        <Grid className={classes.backgroundGrid} >
          <Cell
            cols={14}
            start={2}
            colsL={14}
            startL={1}
            colsM={8}
            startM={1}
            className={classes.backgroundCell}
          >
            <div className={classes.background} />
          </Cell>
        </Grid>
        <BlockContainer>
          <div className={classes.components}>
            <p className={classes.label}>
              Components
            </p>
            <MarginGrid
              cols={3}
              colsL={2}
              fullWidthMobile
            >
              <Card
                title="Modal"
                href="/docs/modal"
                description='Dialogs, lightboxes, drawers, mega menus, confirmations, popups, alerts'
                forceDark
              />
              <Card
                title="Slider"
                href="/docs/slider"
                description='Carousels, image galleries, slideshows, thumbnail sliders, lightbox sliders, marquee'
                forceDark
              />
              <Card
                title="CSS Grid"
                href="/docs/css-grid"
                description='Grid system for rapid layout development'
                forceDark
              />
              <Card
                title="Collapsible"
                href="/docs/collapsible"
                description='Dropdowns, accordions, expandable content, collapsible sections'
                forceDark
              />
              <Card
                title="Jumplist"
                href="/docs/jumplist"
                description='Dots, page navigation, table of contents, quick-lists, jumplists'
                forceDark
              />
            </MarginGrid>
          </div>
          <div className={classes.utilities}>
            <p className={classes.label}>
              Utilities
            </p>
            <MarginGrid
              cols={3}
              colsL={2}
              fullWidthMobile
            >
              <Card
                title="Window Info"
                href="/docs/window-info"
                description="Viewport dimensions and media-query breakpoints with a single event listener"
                forceDark
              />
              <Card
                title="Scroll Info"
                href="/docs/scroll-info"
                description="Scroll percentage, direction, position, etc with a single event listener"
                forceDark
              />
              <Card
                title="Mouse Info"
                href="/docs/mouse-info"
                description="Mouse position, movement, direction, etc with a single event listener"
                forceDark
              />
            </MarginGrid>
          </div>
        </BlockContainer>
      </div>
    </div >
  )
}
