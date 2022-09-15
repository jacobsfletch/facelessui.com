import type { NextPage } from 'next'
import { Fragment, useEffect } from 'react'
import Meta from '../components/Meta'
import { useCustomCursor } from '@root/providers/CustomCursorProvider';
import { useWindowInfo } from '@faceless-ui/window-info';
import { Card } from '@components/Card';
import { Hyperlink } from '@components/Hyperlink';
import { MarginGrid } from '@components/MarginGrid';
import { Cell, Grid } from '@faceless-ui/css-grid';
import { BlockContainer } from '@root/layout/BlockContainer';
import React from 'react';
import classes from './index.module.scss';

const Home: NextPage = () => {
  const {
    setShowCustomCursor,
  } = useCustomCursor();

  const {
    breakpoints: {
      m: midBreak
    } = {}
  } = useWindowInfo();

  useEffect(() => {
    setShowCustomCursor(true)
    return () => {
      setShowCustomCursor(false)
    }
  }, [
    setShowCustomCursor,
  ]);

  useEffect(() => {
    if (midBreak) setShowCustomCursor(false)
  }, [
    setShowCustomCursor,
    midBreak
  ]);

  return (
    <Fragment>
      <Meta
        title="Faceless UI"
        description="An unstyled and accessible React+Typescript UI library for brands"
        url={process.env.NEXT_PUBLIC_APP_URL}
      />
      <main className={classes.main}>
        <BlockContainer>
          <Grid>
            <Cell
              cols={10}
              colsL={12}
              colsM={12}
            >
              <div className={classes.heading}>
                <Hyperlink
                  href="/docs/getting-started"
                >
                  <h1 className={classes.headingText}>
                    An unstyled <span style={{ display: 'inline-block' }}>React+<wbr />Typescript</span> UI library for brands
                  </h1>
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
      </main>
    </Fragment>
  )
}

export default Home
