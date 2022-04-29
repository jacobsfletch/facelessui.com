import type { NextPage } from 'next'
import { Fragment, useEffect } from 'react'
import Meta from '../components/Meta'
import { BlockContainer } from '../layout/BlockContainer';
import { Cell, Grid } from '@faceless-ui/css-grid';
import Margin from '@components/Margin';
import { CallToAction } from '@components/CallToAction';
import { useCustomCursor } from '@root/providers/CustomCursorProvider';
import { MainHero } from '@root/heros';

const Home: NextPage = () => {
  const {
    setShowCustomCursor,
  } = useCustomCursor();

  useEffect(() => {
    setShowCustomCursor(true)
    return () => {
      setShowCustomCursor(false)
    }
  }, [setShowCustomCursor])

  return (
    <Fragment>
      <Meta
        title="Home"
      />
      <main>
        <MainHero />
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
