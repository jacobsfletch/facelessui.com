import Meta from '@components/Meta';
import React, { Fragment, useEffect } from 'react';
import { Doc } from '@root/layout/Doc';
import { Heading } from '@components/Heading';
import { JumplistNode, useJumplist } from '@faceless-ui/jumplist';
import { collapsiblesJumplistNav } from '@root/docs-nav';

const CollapsiblesAPI = () => {
  const {
    setJumplist,
    clearJumplist
  } = useJumplist();

  useEffect(() => {
    const jumplist = collapsiblesJumplistNav.map((item) => ({ nodeID: item.id || '' }));
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
        title="Collapsibles API"
      />
      <h1>
        Collapsibles API
      </h1>
      <JumplistNode nodeID="collapsible">
        <Heading
          id="collapsible"
          href="/docs/collapsibles/api#collapsible"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#collapsible`}
          element='h4'
        >
          {'<Collapsible>'}
        </Heading>
        <p>
          This section has no content
        </p>
        <Heading
          id="collapsible-props"
          href="/docs/collapsibles/api#collapsible-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#collapsible-props`}
          element='h5'
        >
          Props
        </Heading>
        <p>
          This section has no content
        </p>
      </JumplistNode>
      <JumplistNode nodeID="content">
        <Heading
          id="content"
          href="/docs/collapsibles/api#content"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#content`}
          element='h4'
        >
          {'<CollapsibleContent>'}
        </Heading>
        <p>
          This section has no content
        </p>
        <Heading
          id="content-props"
          href="/docs/collapsibles/api#content-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#content-props`}
          element='h5'
        >
          Props
        </Heading>
        <p>
          This section has no content
        </p>
      </JumplistNode>
      <JumplistNode nodeID="toggler">
        <Heading
          id="toggler"
          href="/docs/collapsibles/api#toggler"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#toggler`}
          element='h4'
        >
          {'<CollapsibleToggler>'}
        </Heading>
        <p>
          This section has no content
        </p>
        <Heading
          id="toggler-props"
          href="/docs/collapsibles/api#toggler-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#toggler-props`}
          element='h5'
        >
          Props
        </Heading>
        <p>
          This section has no content
        </p>
      </JumplistNode>
      <JumplistNode nodeID="group">
        <Heading
          id="group"
          href="/docs/collapsibles/api#group"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#group`}
          element='h4'
        >
          {'<CollapsibleGroup>'}
        </Heading>
        <p>
          This section has no content
        </p>
        <Heading
          id="group-props"
          href="/docs/collapsibles/api#group-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#group-props`}
          element='h5'
        >
          Props
        </Heading>
        <p>
          This section has no content
        </p>
      </JumplistNode>
    </Fragment>
  )
}

CollapsiblesAPI.Layout = Doc;

export default CollapsiblesAPI;
