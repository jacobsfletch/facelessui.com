import Meta from '@components/Meta';
import React, { Fragment, useEffect } from 'react';
import { Doc } from '@root/layout/Doc';
import { JumplistNode, useJumplist } from '@faceless-ui/jumplist';
import { cssGridJumplistNav } from '@root/docs-nav';
import { Heading } from '@components/Heading';

const CSSGridAPI = () => {
  const {
    setJumplist,
    clearJumplist
  } = useJumplist();

  useEffect(() => {
    const jumplist = cssGridJumplistNav.map((item) => ({ nodeID: item.id || '' }));
    setJumplist(jumplist);
    return () => {
      clearJumplist();
    }
  }, [
    setJumplist,
    clearJumplist
  ])

  return (
    <Fragment>
      <Meta
        title="CSS Grid API"
      />
      <h1>
        CSS Grid API
      </h1>
      <div>
        This section has no content.
      </div>
      <JumplistNode nodeID="provider">
        <Heading
          id="provider"
          href="/docs/grid/api#provider"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/grid/api#provider`}
          element='h4'
        >
          Provider
        </Heading>
        <p>
          This section has no content.
        </p>
        <Heading
          id="provider-props"
          href="/docs/grid/api#provider-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/grid/api#provider-props`}
          element='h5'
        >
          Props
        </Heading>
        <p>
          This section has no content.
        </p>
      </JumplistNode>
      <JumplistNode nodeID="grid">
        <Heading
          id="grid"
          href="/docs/grid/api#grid"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/grid/api#grid`}
          element='h4'
        >
          Grid
        </Heading>
        <p>
          This section has no content.
        </p>
        <Heading
          id="grid"
          href="/docs/grid/api#grid-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/grid/api#grid-props`}
          element='h5'
        >
          Props
        </Heading>
        <p>
          This section has no content.
        </p>
      </JumplistNode>
      <JumplistNode nodeID="cell">
        <Heading
          id="cell"
          href="/docs/grid/api#cell"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/grid/api#cell`}
          element='h4'
        >
          Cell
        </Heading>
        <p>
          This section has no content.
        </p>
        <Heading
          id="cell"
          href="/docs/grid/api#cell-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/grid/api#cell-props`}
          element='h5'
        >
          Props
        </Heading>
        <p>
          This section has no content.
        </p>
      </JumplistNode>
    </Fragment>
  )
}

CSSGridAPI.Layout = Doc;

export default CSSGridAPI;
