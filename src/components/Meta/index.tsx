import NextHead from 'next/head';
import React, { Fragment } from 'react';

const Meta: React.FC<{
  title?: string,
  description?: string
  url?: string
}> = (props) => {
  const {
    title,
    description,
    url: urlFromProps = process.env.NEXT_PUBLIC_APP_URL
  } = props;

  const image = "/images/documentation.png";
  let url = urlFromProps;

  try {
    if (url) {
      const urlWithBase = new URL(url, process.env.NEXT_PUBLIC_APP_URL).href;
      url = urlWithBase;
    }
  } catch (e) {
    console.error(e);
  }

  // NOTE: see https://schema.org/APIReference
  const jsonLD = {
    "@context": "https://schema.org",
    '@type': 'APIReference',
    subjectOf: 'CreativeWork',
    url,
    description,
    name: '',
    headline: title,
    image,
    assemblyVersion: 'React 16.8.0, React 18.0.0, TypeScript 4.6.3',
    executableLibraryName: '.js, .ts, .tsx, .d.ts',
    programmingModel: 'managed',
    targetPlatform: 'web, browser, mobile, phone, native',
    dependencies: '',
    proficiencyLevel: 'beginner, intermediate, advanced',
    articleSection: '', // TODO: slider, modal, etc,
    about: '',
    accessMode: 'textual',
    accessModeSufficient: '',
    accessibilityAPI: '',
    accessibilityControl: '',
    accessibilityFeature: '',
    accessibilityHazard: '',
    accessibilitySummary: '',
    accountablePerson: '',
    publisher: '',
    license: '',
    isFamilyFriendly: true,
    inLanguage: 'en',
    funder: '',
    creator: '',
    contributor: '',
    creditText: ''
  }

  return (
    <NextHead>
      {title && (
        <Fragment>
          <title>
            {title}
          </title>
          <meta
            property="og:title"
            content={title}
          />
        </Fragment>
      )}
      {description && (
        <Fragment>
          <meta
            name="description"
            content={description}
          />
          <meta
            property="og:description"
            content={description}
          />
        </Fragment>
      )}
      <meta
        property="og:image"
        content={image}
      />
      {url && (
        <meta
          property="og:url"
          content={url}
        />
      )}
      <meta
        property="og:site_name"
        content="Faceless UI"
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        property="og:type"
        content="website"
      />
      <link
        rel="shortcut icon"
        href="/favicon.png"
        type="image/png"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
    </NextHead>
  );
};

export default Meta;
