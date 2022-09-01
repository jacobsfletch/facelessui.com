import { BlockContainer } from '@root/layout/BlockContainer';
import React, { Fragment } from 'react';
import NextHead from 'next/head';
import { MarginGrid } from '@components/MarginGrid';
import { Heading } from '@components/Heading';

const Styleguide = () => {
  return (
    <Fragment>
      <NextHead>
        <title>
          Styleguide
        </title>
        <meta
          key="robots"
          name="robots"
          content="noindex,follow"
        />
        <meta
          key="googlebot"
          name="googlebot"
          content="noindex,follow"
        />
        <title>
          Styleguide
        </title>
      </NextHead>
      <BlockContainer>
        <h1>
          Styleguide
        </h1>
        <Heading
          id="typography"
          href="/styleguide#typography"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/styleguide#typography`}
          element='h5'
        >
          Typography
        </Heading>
        <h1>
          H1: Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <h2>
          H2: Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h2>
        <h3>
          H3: Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h3>
        <h4>
          H4: Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, exercitation ullamco
        </h4>
        <h5>
          H5: Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </h5>
        <p>
          Paragraph: Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </BlockContainer>
      <BlockContainer>
        <Heading
          id="colors"
          href="/styleguide#colors"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/styleguide#colors`}
          element='h5'
        >
          Colors
        </Heading>
        <MarginGrid
          cols={4}
        >
          <div>
            <div
              style={{
                backgroundColor: 'var(--color-white)',
                width: '100%',
                height: '100px',
              }}
            />
          </div>
          <div>
            <div
              style={{
                backgroundColor: 'var(--color-gray-1)',
                width: '100%',
                height: '100px',
              }}
            />
          </div>
          <div>
            <div
              style={{
                backgroundColor: 'var(--color-gray-2)',
                width: '100%',
                height: '100px',
              }}
            />
          </div>
          <div>
            <div
              style={{
                backgroundColor: 'var(--color-gray-3)',
                width: '100%',
                height: '100px',
              }}
            />
          </div>
          <div>
            <div
              style={{
                backgroundColor: 'var(--color-gray-4)',
                width: '100%',
                height: '100px',
              }}
            />
          </div>
          <div>
            <div
              style={{
                backgroundColor: 'var(--color-gray-5)',
                width: '100%',
                height: '100px',
              }}
            />
          </div>
          <div>
            <div
              style={{
                backgroundColor: 'var(--color-gray-6)',
                width: '100%',
                height: '100px',
              }}
            />
          </div>
          <div>
            <div
              style={{
                backgroundColor: 'var(--color-gray-7)',
                width: '100%',
                height: '100px',
              }}
            />
          </div>
          <div>
            <div
              style={{
                backgroundColor: 'var(--color-gray-8)',
                width: '100%',
                height: '100px',
              }}
            />
          </div>
          <div>
            <div
              style={{
                backgroundColor: 'var(--color-gray-9)',
                width: '100%',
                height: '100px',
              }}
            />
          </div>
          <div>
            <div
              style={{
                backgroundColor: 'var(--color-gray-10)',
                width: '100%',
                height: '100px',
              }}
            />
          </div>
          <div>
            <div
              style={{
                backgroundColor: 'var(--color-black)',
                width: '100%',
                height: '100px',
                border: '1px solid var(--color-gray-9)',
              }}
            />
          </div>
        </MarginGrid>
        <div
          style={{
            marginTop: '20px'
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--color-black)',
              padding: '20px',
              border: '1px solid var(--color-gray-9)',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--color-gray-10)',
                padding: '20px'
              }}
            >
              <div
                style={{
                  backgroundColor: 'var(--color-gray-9)',
                  padding: '20px'
                }}
              >
                <div
                  style={{
                    backgroundColor: 'var(--color-gray-8)',
                    padding: '20px'
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'var(--color-gray-7)',
                      padding: '20px'
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: 'var(--color-gray-6)',
                        padding: '20px'
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: 'var(--color-gray-5)',
                          padding: '20px'
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: 'var(--color-gray-4)',
                            padding: '20px'
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: 'var(--color-gray-3)',
                              padding: '20px'
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: 'var(--color-gray-2)',
                                width: '100%',
                                padding: '20px'
                              }}
                            >
                              <div
                                style={{
                                  backgroundColor: 'var(--color-gray-1)',
                                  padding: '20px'
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlockContainer>
    </Fragment>
  )
}

export default Styleguide;
