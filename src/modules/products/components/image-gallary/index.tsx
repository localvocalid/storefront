import { Image as MedusaImage } from '@medusajs/medusa'
import Image from 'next/image'
import { useRef } from 'react'

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  return (
    <div className="flex items-start relative">
      <div className="flex flex-col flex-1 gap-y-4">
        {images.map((image, index) => {
          return (
            <div className="relative aspect-[29/34] w-full" id={image.id} key={image.id} ref={image => imageRefs.current.push(image)}>
              <Image alt={`Product image ${index + 1}`} className="absolute inset-0 rounded-xl" layout="fill" objectFit="cover" priority={index <= 2} src={image.url} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageGallery
