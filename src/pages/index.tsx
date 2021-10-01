import type { NextPage } from 'next'
import { Fragment } from 'react'
import Meta from '../components/Meta'
import { BlockContainer } from '../layout/BlockContainer';
import { Button } from '@components/Button';
import { Cell, Grid } from '@faceless-ui/css-grid';

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
              <h1>
                Make any interface.
              </h1>
              <p>
                {'Completely accessible. 100% brand-ready. A UI library for UI libraries. '}
                <Button
                  href="/showcase"
                  appearance="text"
                  label="See who's using it."
                />
              </p>
            </Cell>
          </Grid>
          <br />
          <div>
            <Button
              href="/docs/getting-started"
              label="Get started"
              appearance="primary"
            />
          </div>
        </BlockContainer>
      </main>
    </Fragment>
  )
}

export default Home
