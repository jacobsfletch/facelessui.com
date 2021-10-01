import NextHead from 'next/head';
import React, { Fragment } from 'react';

const Meta: React.FC<{
  title?: string,
  description?: string
  keywords?: string
  image?: {
    filename?: string
  }
}> = (props) => {
  const {
    title,
    description,
    image, // may be 'null' so do not destructure
    keywords,
  } = props;

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
      {image && (
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_API_URL}/media/${image.filename}`}
        />
      )}
      {keywords && (
        <meta
          name="keywords"
          content={keywords}
        />
      )}
    </NextHead>
  );
};

export default Meta;
