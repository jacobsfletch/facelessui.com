import type { NextPage } from 'next'
import { Fragment } from 'react'
import Meta from '../components/Meta'
import { BlockContainer } from '../layout/BlockContainer';
import { Button } from '@components/Button';
import { Cell, Grid } from '@faceless-ui/css-grid';
import { MarginGrid } from '@components/MarginGrid';
import { Card } from '@components/Card';
import { HorizontalRule } from '@components/HorizontalRule';
import Margin from '@components/Margin';
import { VersionNumber } from '@components/VersionNumber';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Meta>
        <title>
          Home
        </title>
      </Meta>
      <main>
        <BlockContainer>
          <Grid>
            <Cell
              cols={10}
              colsL={12}
              colsM={8}
            >
              <Margin bottom="small">
                <h1 style={{ marginTop: 0 }}>
                  Make any interface.
                </h1>
                <p style={{ marginBottom: 0 }}>
                  A React UI library that looks like nothing, but can do anything.
                </p>
              </Margin>
            </Cell>
          </Grid>
          <MarginGrid size="small">
            <Button
              href="/docs/getting-started/what-is-faceless-ui"
              label="Get started"
              appearance="primary"
            />
            <Button
              href="/showcase"
              appearance="text"
              label="See who's using it."
            />
          </MarginGrid>
        </BlockContainer>
        <BlockContainer>
          <HorizontalRule />
        </BlockContainer>
        <BlockContainer>
          <Grid>
            <Cell
              cols={10}
              colsM={8}
            >
              <Margin bottom="small">
                <h3 style={{ marginTop: 0 }}>
                  It's easy to learn Faceless UI.
                </h3>
                <p style={{ marginBottom: 0 }}>
                  Use a few underlying utilities and components and create entires libraries.
                </p>
              </Margin>
            </Cell>
          </Grid>
          <Grid>
            <Cell
              cols={4}
              colsM={8}
            >
              <Card href="/docs/window-info">
                <VersionNumber
                  size="small"
                  name="window-info"
                />
                <h3 style={{ margin: 0 }}>
                  Window Info
                </h3>
              </Card>
            </Cell>
            <Cell
              cols={4}
              colsM={8}
            >
              <Card href="/docs/scroll-info">
                <VersionNumber
                  size="small"
                  name="scroll-info"
                />
                <h3 style={{ margin: 0 }}>
                  Scroll Info
                </h3>
              </Card>
            </Cell>
            <Cell
              cols={4}
              colsM={8}
            >
              <Card href="/docs/mouse-info" >
                <VersionNumber
                  size="small"
                  name="mouse-info"
                />
                <h3 style={{ margin: 0 }}>
                  Mouse Info
                </h3>
              </Card>
            </Cell>
            <Cell
              cols={3}
              colsM={8}
            >
              <Card href="/docs/modal">
                <VersionNumber
                  size="small"
                  name="modal"
                />
                <h3 style={{ margin: 0 }}>
                  Modal
                </h3>
              </Card>
            </Cell>
            <Cell
              cols={3}
              colsM={8}
            >
              <Card href="/docs/slider">
                <VersionNumber
                  size="small"
                  name="slider"
                />
                <h3 style={{ margin: 0 }}>
                  Slider
                </h3>
              </Card>
            </Cell>
            <Cell
              cols={3}
              colsM={8}
            >
              <Card href="/docs/css-grid" >
                <VersionNumber
                  size="small"
                  name="css-grid"
                />
                <h3 style={{ margin: 0 }}>
                  CSS Grid
                </h3>
              </Card>
            </Cell>
            <Cell
              cols={3}
              colsM={8}
            >
              <Card href="/docs/collapsibles">
                <VersionNumber
                  size="small"
                  name="collapsibles"
                />
                <h3 style={{ margin: 0 }}>
                  Collapsibles
                </h3>
              </Card>
            </Cell>
          </Grid>
        </BlockContainer>
      </main >
    </Fragment >
  )
}

export default Home
