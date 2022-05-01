import Meta from '@components/Meta';
import React, { Fragment, useEffect } from 'react';
import { Doc } from '@root/layout/Doc';
import { JumplistNode, useJumplist } from '@faceless-ui/jumplist';
import { BasicProps } from '@components/BasicProps';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import { jumplistJumplistNav } from '@root/docs-nav';
import { Heading } from '@components/Heading';

const JumplistAPI = () => {
  const {
    setJumplist,
    clearJumplist
  } = useJumplist();

  useEffect(() => {
    const jumplist = jumplistJumplistNav.map((item) => ({ nodeID: item.id || '' }));
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
        title="Jumplist API"
      />
      <h1>
        Jumplist API
      </h1>
      <JumplistNode nodeID="provider">
        <Heading
          id="provider"
          href="/docs/jumplist/api#provider"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#provider`}
          element='h4'
        >
          JumplistProvider
        </Heading>
        <p>
          The provider is rendered on time at the root of your project. It maintains a list of the intersection status of each jumplist item. Global settings can be controlled here.
        </p>
        <Heading
          id="provider-props"
          href="/docs/jumplist/api#provider-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#provider-props`}
          element='h5'
        >
          Props
        </Heading>
        <InlineCode>
          rootMargin
        </InlineCode>
        <p>
          {'Optional. The root margin of the intersection observer. See the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            newTab
            underline
          >
            Intersection Observer API
          </Hyperlink>
        </p>
        <InlineCode>
          threshold
        </InlineCode>
        <p>
          {'Optional. The threshold of the intersection observer. See the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            newTab
            underline
          >
            Intersection Observer API
          </Hyperlink>
        </p>
      </JumplistNode>
      <JumplistNode nodeID="node">
        <Heading
          id="node"
          href="/docs/jumplist/api#node"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#node`}
          element='h4'
        >
          JumplistNode
        </Heading>
        <p>
          Each jumplist node is a wrapper around Intersection Observer, and syncs its current intersection status to the provider.
        </p>
        <Heading
          id="node-props"
          href="/docs/jumplist/api#node-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#node-props`}
          element='h5'
        >
          Props
        </Heading>
        <InlineCode>
          nodeID*
        </InlineCode>
        <p>
          Required. A unique string to identify this node.
        </p>
        <BasicProps />
      </JumplistNode>
      <JumplistNode nodeID="track">
        <Heading
          id="track"
          href="/docs/jumplist/api#track"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#track`}
          element='h4'
        >
          JumplistTrack
        </Heading>
        <p>
          By default, jumplist nodes report their intersection relative to the window. Alternatively, there is the JumplistTrack which is an overflowing div that you can place anywhere in your app. Intersection events will be relative to this instead of the window.
        </p>
        <Heading
          id="track-props"
          href="/docs/jumplist/api#track-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#track-props`}
          element='h5'
        >
          Props
        </Heading>
        <BasicProps />
      </JumplistNode>
      <JumplistNode nodeID="useJumplist">
        <Heading
          id="useJumplist"
          href="/docs/jumplist/api#useJumplist"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#useJumplist`}
          element='h4'
        >
          useJumplist
        </Heading>
        <p>
          A hook used to access the jumplist context.
        </p>
        <BasicProps />
      </JumplistNode>
    </Fragment>
  )
}

JumplistAPI.Layout = Doc;

export default JumplistAPI;
