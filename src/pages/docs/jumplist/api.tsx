import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { JumplistNode } from '@faceless-ui/jumplist';
import { BasicProps } from '@components/BasicProps';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';

const JumplistAPI = () => {
  return (
    <Fragment>
      <Meta
        title="Jumplist API"
      />
      <h1>
        Jumplist API
      </h1>
      <div id="provider" />
      <JumplistNode nodeID="provider">
        <h4>
          JumplistProvider
        </h4>
        <p>
          The provider is rendered on time at the root of your project. It maintains a list of the intersection status of each jumplist item. Global settings can be controlled here.
        </p>
        <h5>
          Props
        </h5>
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
      <div id="node" />
      <JumplistNode nodeID="node">
        <h4>
          JumplistNode
        </h4>
        <p>
          Each jumplist node is a wrapper around Intersection Observer, and syncs its current intersection status to the provider.
        </p>
        <h5>
          Props
        </h5>
        <InlineCode>
          nodeID*
        </InlineCode>
        <p>
          Required. A unique string to identify this node.
        </p>
        <BasicProps />
      </JumplistNode>
      <div id="track" />
      <JumplistNode nodeID="track">
        <h4>
          JumplistTrack
        </h4>
        <p>
          By default, jumplist nodes report their intersection relative to the window. Alternatively, there is the JumplistTrack which is an overflowing div that you can place anywhere in your app. Intersection events will be relative to this instead of the window.
        </p>
        <h5>
          Props
        </h5>
        <BasicProps />
      </JumplistNode>
      <div id="useJumplist" />
      <JumplistNode nodeID="useJumplist">
        <h4>
          useJumplist
        </h4>
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
