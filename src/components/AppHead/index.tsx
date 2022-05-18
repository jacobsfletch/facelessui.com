import React from 'react';
import NextHead from 'next/head'

export const AppHead: React.FC = () => {
  return (
    <NextHead>
      <title>
        Faceless UI
      </title>
      <link
        rel="icon"
        href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/face-without-mouth_1f636.png"
      />
    </NextHead>
  )
}
