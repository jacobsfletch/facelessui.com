import type { NextPage } from 'next'
import { Fragment } from 'react'
import Meta from '../components/Meta'
import { BlockContainer } from '../layout/BlockContainer';
import { Button } from '@components/Button';
import { UnstyledList } from '@components/UnstyledList';
import { Cell, Grid } from '@faceless-ui/css-grid';

const Showcase: NextPage = () => {
  return (
    <Fragment>
      <Meta>
        <title>
          Showcase
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
              <h2 style={{ marginTop: 0 }}>
                Used in dozens of production-level websites and apps.
              </h2>
              <p>
                {'Here are just a few: '}
              </p>
            </Cell>
          </Grid>
          <br />
          <UnstyledList
            items={[
              (
                <Button
                  newTab
                  href="https://hopenetwork.org"
                  appearance="text"
                  label="Hope Network"
                />
              ),
              (
                <Button
                  newTab
                  href="https://my.290signs.com"
                  appearance="text"
                  label="My290"
                />
              ),
              (
                <Button
                  newTab
                  href="https://payloadcms.com"
                  appearance="text"
                  label="Payload CMS"
                />
              ),
              (
                <Button
                  newTab
                  href="https://metricstructures.com/"
                  appearance="text"
                  label="Metric Structures"
                />
              ),
              (
                <Button
                  newTab
                  href="https://custerinc.com"
                  appearance="text"
                  label="Custer Inc"
                />
              ),
              (
                <Button
                  newTab
                  href="https://github.com/faceless-ui/website/issues"
                  appearance="text"
                  label="Get your project listed here"
                />
              )
            ]}
          />
        </BlockContainer>
      </main>
    </Fragment>
  )
}

export default Showcase
