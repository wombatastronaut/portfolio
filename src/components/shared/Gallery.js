import React, { useState } from 'react'

import GalleryImageModal from './GalleryImageModal'

const Gallery = ({images, columns = 3, gap = 10}) => {
    if (!images) {
        return (null)
    }

    const [selectedImage, setSelectedImage] = useState(null)

    const selectImage = (image) => {
        setSelectedImage(image)
    }

    const nextImage = () => {
        const currentIndex = images.findIndex((image) => image.index === selectedImage.index)
        const nextIndex = currentIndex + 1
        const image = images.find((image) => image.index === nextIndex)

        if (!image) {
            const [firstImage] = images
            setSelectedImage(firstImage)
            return
        }
        
        setSelectedImage(image)
    }

    const previousImage = () => {
        const currentIndex = images.findIndex((image) => image.index === selectedImage.index)
        const previousIndex = currentIndex - 1
        const image = images.find((image) => image.index === previousIndex)

        if (!image) {
            const lastImage = images[images.length - 1]
            setSelectedImage(lastImage)
            return
        }

        setSelectedImage(image)
    }

    return (
        <div className="gallery">
            <div className={'grid ' + 'grid-cols-' + columns + ' gap-' + gap}>
                {images.map((image, index) => (
                    <div className="cursor-pointer" key={index}>
                        <img className="mb-3" src={image.thumbnail} alt={image.title} onClick={() => selectImage(image)} />
                        <a href={image.link} className="text-white" target="_blank">{image.title}</a>
                    </div>
                ))}
                {selectedImage && (
                    <GalleryImageModal image={selectedImage} setSelectedImage={setSelectedImage} nextImage={nextImage} previousImage={previousImage} />
                )}
            </div>

        </div>
    )
}

export default Gallery