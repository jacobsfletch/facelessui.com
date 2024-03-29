import Meta from '@components/Meta';
import React, { Fragment, useEffect } from 'react';
import { Doc } from '@root/layout/Doc';
import { useRouter } from 'next/dist/client/router';

const DocsLanding = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/docs/getting-started');
  }, [router])

  return (
    <Fragment>
      <Meta
        title="Docs - Faceless UI"
        description="An unstyled React+Typescript UI library for brands"
        url="/docs"
      />
      <h1>
        Docs
      </h1>
    </Fragment>
  )
}

DocsLanding.Layout = Doc;

export default DocsLanding;
