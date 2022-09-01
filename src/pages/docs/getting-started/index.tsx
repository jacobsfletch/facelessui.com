import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { Hyperlink } from '@components/Hyperlink';
import { Heading } from '@components/Heading';

const GettingStartedDoc = () => {
  return (
    <Fragment>
      <h1>
        Getting started
      </h1>
      <p>
        {'Faceless UI is an unstyled '}
        <Hyperlink
          href="https://reactjs.org/"
          newTab
        >
          React
        </Hyperlink>
        +
        <Hyperlink
          href="https://www.typescriptlang.org/"
          newTab
        >
          TypeScript
        </Hyperlink>
        {' UI library. Use it to focus on the aesthetics of your user interface instead of the implementation details. Faceless UI APIs are extremely powerful and heavily documented so you can deliver beautiful products that just work.'}
      </p>
      <Margin bottom="xs">
        <Heading
          id="styling"
          href="/docs/getting-started#react"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started#react`}
          element='h5'
        >
          React
        </Heading>
        <p>
          {'Faceless UI is component-first, so you can build your app in a way that feels very natural. If you know '}
          <Hyperlink
            href="https://reactjs.org/"
            newTab
          >
            React
          </Hyperlink>
          {', you know Faceless UI — and since each package is independently versioned, you can integrate as little or as much into your existing app or website as you need.'}
        </p>
      </Margin>
      <Margin bottom="xs">
        <Heading
          id="styling"
          href="/docs/getting-started#react"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started#react`}
          element='h5'
        >
          Web APIs
        </Heading>
        <p>
          {'Faceless UI components lean on '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API"
            newTab
          >
            Web APIs
          </Hyperlink>
          {' as much as possible. This reduces dependencies, increases compatibility and performance, and keeps Faceless UI on the cutting-edge. Properties and methods often mirror these APIs exactly and are fully extensible.'}
        </p>
      </Margin>
      <Margin bottom="xs">
        <Heading
          id="styling"
          href="/docs/getting-started#styling"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started#styling`}
          element='h5'
        >
          Styling
        </Heading>
        <p>
          {'Faceless UI components have no appearance and apply as little CSS as possible to achieve core functionality. To customize the appearance of Faceless UI components, use your existing CSS setup. Every Faceless UI component exposes its DOM entirely, letting you customize the markup to meet your exact needs. A typical pattern is to pass class names or style objects to these components through props. This makes it possible to tie into any CSS framework, such as '}
          <Hyperlink
            href="https://github.com/css-modules/css-modules"
            newTab
          >
            CSS Modules
          </Hyperlink>
          {'.'}
        </p>
      </Margin>
      <Margin>
        <Heading
          id="accessibility"
          href="/docs/getting-started#accessibility"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started#accessibility`}
          element='h5'
        >
          Accessibility
        </Heading>
        <p>
          Accessibility is a top-priority of Faceless UI, which ensures best web practices out-of-the-box. By default, all Faceless UI components are fully accessible using the latest WAI-ARIA standards — and since every component exposes its DOM, you can easily add your own accessibility features as necessary.
        </p>
      </Margin>
      <Margin>
        <Heading
          id="typescript"
          href="/docs/getting-started#typescript"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started#typescript`}
          element='h5'
        >
          TypeScript
        </Heading>
        <p>
          All of Faceless UI is built with TypeScript. All types are exported for you to consume or extend as needed. See each individual API for full details.
        </p>
      </Margin>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/getting-started/index.tsx`}
      metaTitle="Getting Started"
      metaDescription="Getting started with Faceless UI"
      metaURL="/docs/getting-started"
    />
  )
};

GettingStartedDoc.Layout = DocLayout;

export default GettingStartedDoc;
