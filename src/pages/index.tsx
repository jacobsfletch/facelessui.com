import type { NextPage } from 'next'
import { Fragment, useEffect } from 'react'
import Meta from '../components/Meta'
import { useCustomCursor } from '@root/providers/CustomCursorProvider';
import { useWindowInfo } from '@faceless-ui/window-info';
import { Card } from '@components/Card';
import { Hyperlink } from '@components/Hyperlink';
import { Cell, Grid } from '@faceless-ui/css-grid';
import { BlockContainer } from '@root/layout/BlockContainer';
import React from 'react';
import classes from './index.module.scss';
import { StyledList } from '@components/StyledList';

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
              cols={11}
              colsL={12}
              colsM={12}
            >
              <div className={classes.heading}>
                <h1 className={classes.headingText}>
                  <Hyperlink href="/docs/getting-started">
                    An unstyled <span style={{ display: 'inline-block' }}>React+<wbr />Typescript</span> UI library for brands
                  </Hyperlink>
                </h1>
                <p className={classes.description}>
                  Rapidly build user interfaces within any design system, free and open-source.
                </p>
                <StyledList
                  items={[
                    (
                      <Fragment key={1}>
                        ARIA-accessible
                      </Fragment>
                    ),
                    (
                      <Fragment key={2}>
                        SSR-friendly
                      </Fragment>
                    ),
                    (
                      <Fragment key={4}>
                        100% TypeScript
                      </Fragment>
                    )
                  ]}
                />
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
                Components:
              </p>
              <div className={classes.cards}>
                <div className={classes.cardsInner}>
                  <Card
                    title="Modal"
                    href="/docs/modal"
                    description='Dialogs, lightboxes, drawers, mega menus, confirmations, popups, alerts'
                    forceDark
                  />
                  <Card
                    title="Slider"
                    href="/docs/slider"
                    description='Carousels, image galleries, slideshows, thumbnail sliders, lightbox sliders, marquee sliderss'
                    forceDark
                  />
                  <Card
                    title="CSS Grid"
                    href="/docs/css-grid"
                    description='Grid system for rapid layout development'
                    forceDark
                  />
                  <Card
                    title="Collapsibles"
                    href="/docs/collapsibles"
                    description='Dropdowns, accordions, expandable content, collapsible sections'
                    forceDark
                  />
                  <Card
                    title="Jumplist"
                    href="/docs/jumplist"
                    description='Dots, page navigation, table of contents, quick-lists, jumplists'
                    forceDark
                  />
                </div>
              </div>
            </div>
            <div>
              <div className={classes.utilities}>
                <p className={classes.label}>
                  Utilities:
                </p>
                <div className={classes.cards}>
                  <div className={classes.cardsInner}>
                    <Card
                      title="Window Info"
                      href="/docs/window-info"
                      description="Viewport dimensions, media-query breakpoints, and more with a single event listener"
                      forceDark
                    />
                    <Card
                      title="Scroll Info"
                      href="/docs/scroll-info"
                      description="Scroll percentage, direction, position and more with a single event listener"
                      forceDark
                    />
                    <Card
                      title="Mouse Info"
                      href="/docs/mouse-info"
                      description="Mouse position, movement, direction and more with a single event listener"
                      forceDark
                    />
                  </div>
                </div>
              </div>
            </div>
          </BlockContainer>
        </div>
      </main>
    </Fragment>
  )
}

export default Home
