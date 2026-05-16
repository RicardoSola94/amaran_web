import Image from 'next/image'
import type { ImageProps } from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function BaseImage({ src, ...props }: ImageProps) {
  const prefixedSrc = typeof src === 'string' ? `${basePath}${src}` : src
  return <Image src={prefixedSrc} {...props} />
}
