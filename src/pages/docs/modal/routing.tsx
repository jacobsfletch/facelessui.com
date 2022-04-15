import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { CodeBlock } from '@components/CodeBlock';
import { Hyperlink } from '@components/Hyperlink';
import { InlineCode } from '@components/InlineCode';
import Margin from '@components/Margin';

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
        You can opt-in to having the modal add and remove query parameters from the URL. This is useful when you need to send direct links to content that is rendered within a modal. There are two ways to do this:
      </p>
      <h5>
        History API
      </h5>
      <p>
        {'Allow the modal to handle URL changes using the '}
        <Hyperlink
          href="https://developer.mozilla.org/en-US/docs/Web/API/History_API"
          newTab
          underline
        >
          History API
        </Hyperlink>
        {`. Just pass `}
        <InlineCode>
          handleParamChange
        </InlineCode>
        {' to the ModalProvider.'}
      </p>
      <h5>
        Custom router
      </h5>
      <p>
        {`If your app already uses a router, send a callback function to `}
        <InlineCode>
          handleParamChange
        </InlineCode>
        {' instead. Here are some examples using common router libraries: '}
      </p>
      <p>
        <b>
          NextJS:
        </b>
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
        <b>
          React Router:
        </b>
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

ModalRouting.Layout = Doc;

export default ModalRouting;
