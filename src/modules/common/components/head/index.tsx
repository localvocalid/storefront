import NextHead from 'next/head'
import React from 'react'

type HeadProps = {
  title?: string
  description?: string | null
  image?: string | null
}

const Head: React.FC<HeadProps> = ({ title, description, image }) => {
  return (
    <NextHead>
      <title>{title} - Localvocal</title>
      <meta content={title} itemProp="name" />
      {description && <meta content={description} itemProp="description" />}
      {image && <meta content={image} itemProp="image" />}
      <link href="/favicon.ico" rel="icon" />
    </NextHead>
  )
}

export default Head
