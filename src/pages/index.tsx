import type { NextPage } from 'next'
import { Fragment, useEffect } from 'react'
import Meta from '../components/Meta'
import { useCustomCursor } from '@root/providers/CustomCursorProvider';
import { MainHero } from '@root/heros';
import { useWindowInfo } from '@faceless-ui/window-info';

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
      />
      <main>
        <MainHero />
      </main >
    </Fragment >
  )
}

export default Home
