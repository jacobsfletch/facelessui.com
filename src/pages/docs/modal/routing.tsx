import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { CodeBlock } from '@components/CodeBlock';
import { Hyperlink } from '@components/Hyperlink';
import { InlineCode } from '@components/InlineCode';
import Margin from '@components/Margin';
import { Heading } from '@components/Heading';

const ModalRouting = () => {
  return (
    <Fragment>
      <Meta
        title="Modal routing"
      />
      <h1>
        Modal routing
      </h1>
      <p>
        You can opt-in to having the modal react to changes to the URL, and push changes to the URL as necessary. This would allow you to directly link to an open modal. There are two ways to do this — using the native browser history API, or your app&apos;s existing router.
      </p>
      <Heading
        id="history"
        href="/docs/modal/routing#history"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/routing#history`}
        element='h5'
      >
        History API
      </Heading>
      <p>
        {'To allow the modal to handle URL changes using the '}
        <Hyperlink
          href="https://developer.mozilla.org/en-US/docs/Web/API/History_API"
          newTab
          underline
        >
          History API
        </Hyperlink>
        {`, pass `}
        <InlineCode>
          handleParamChange
        </InlineCode>
        {' to the '}
        <InlineCode>
          ModalProvider
        </InlineCode>
        {'. The '}
        <InlineCode>
          {'?modal='}
        </InlineCode>
        {' param will appear in the URL as modals are navigated. Modals will also react to external changes to this param, so your app can load with an open modal. This enables you to directly link to modal content.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import { ModalProvider } from \'@faceless-ui/modal\';

export const MyApp = (props) => {
    return (
      <ModalProvider handleParamChange>
        ...
      </ModalProvider>
    );
}`}
        </CodeBlock>
      </Margin>
      <Heading
        id="custom"
        href="/docs/modal/routing#custom"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/routing#custom`}
        element='h5'
      >
        Custom router
      </Heading>
      <p>
        {`If your app already uses a router, send a callback function to `}
        <InlineCode>
          handleParamChange
        </InlineCode>
        {' instead. Here are some examples using common router libraries.'}
      </p>
      <p>
        <Heading
          id="next-router"
          href="/docs/modal/routing#next-router"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/routing#next-router`}
          element='b'
        >
          NextJS
        </Heading>
      </p>
      <Margin bottom="small">
        <CodeBlock>
          {`import React, { useCallback } from 'react';
import { ModalProvider } from '@faceless-ui/modal';
import Router from 'next/router';

export default App = () => {
  const handleParamChange = useCallback((incomingSlug) => {
    Router.push({
      query: { modal: incomingSlug },
    })
  }, []);

  return (
    <ModalProvider handleParamChange={handleParamChange}>
      ...
    </ModalProvider>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        <Heading
          id="react-router"
          href="/docs/modal/routing#react-router"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/modal/routing#react-router`}
          element='b'
        >
          React router
        </Heading>
      </p>
      <Margin bottom="small">
        <CodeBlock>
          {`import React, { useCallback } from 'react';
import { ModalProvider } from '@faceless-ui/modal';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'qs';

export default App = () => {
  const history = useHistory();
  const { url, search } = useLocation();

  const handleParamChange = useCallback((incomingSlug) => {
    const withChangedSlug = qs.parse(search, { ignoreQueryPrefix: true });
    withChangedSlug.slug = incomingSlug;
    newSearchString = qs.stringify(withChangedSlug, { encode: false });
    history.push(\`\${url}\${newSearchString}\`)
  }, [url, search, history]);

  return (
    <ModalProvider handleParamChange={handleParamChange}>
      ...
    </ModalProvider>
  )
}`}
        </CodeBlock>
      </Margin>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/modal/routing.tsx`}
    />
  )
};

ModalRouting.Layout = DocLayout;

export default ModalRouting;
