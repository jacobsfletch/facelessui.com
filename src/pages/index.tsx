import type { NextPage } from 'next'
import { Fragment, useEffect } from 'react'
import Meta from '../components/Meta'
import { BlockContainer } from '../layout/BlockContainer';
import { Button } from '@components/Button';
import { Cell, Grid } from '@faceless-ui/css-grid';
import { MarginGrid } from '@components/MarginGrid';
import Margin from '@components/Margin';
import { Heading } from '@components/Heading';
import { CallToAction } from '@components/CallToAction';
import { useCustomCursor } from '@root/providers/CustomCursorProvider';

const Home: NextPage = () => {
  const {
    setShowCustomCursor,
    setHighlightCursor
  } = useCustomCursor();

  useEffect(() => {
    setShowCustomCursor(true)
    return () => {
      setShowCustomCursor(false)
    }
  }, [setShowCustomCursor])

  return (
    <Fragment>
      <Meta>
        <title>
          Home
        </title>
      </Meta>
      <main>
        <BlockContainer>
          <Margin
            top="small"
            bottom="large"
          >
            <div
              style={{
                minHeight: '50vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
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
                      Make any interface for any brand.
                    </Heading>
                    <Heading
                      element="h1"
                      as="h6"
                      marginBottom={false}
                    >
                      An unstyled and accessible React+TypeScript UI library.
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
          </Margin>
        </BlockContainer>
        <BlockContainer>
          <Margin
            bottom="large"
          >
            <Grid>
              <Cell
                cols={8}
                colsL={10}
                colsM={8}
              >
                <h3 style={{ marginTop: 0 }}>
                  Focus on the aesthetics of your user interface
                </h3>
                <p style={{ marginBottom: 0 }}>
                  If you know React, you know Faceless UI. And since each package is independently versioned, you can integrate as little or as much into your existing app as you need.
                </p>
              </Cell>
            </Grid>
          </Margin>
        </BlockContainer>
        <CallToAction />
      </main >
    </Fragment >
  )
}

export default Home
