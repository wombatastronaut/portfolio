import React, { useState } from 'react'

import ImageModal from './ImageModal'

const Gallery = ({images, columns = 3, gap = 10}) => {
    if (!images) {
        return (null)
    }

    const [selectedImage, setSelectedImage] = useState(null)

    const selectImage = (image) => {
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
                    <ImageModal image={selectedImage} onClose={setSelectedImage} />
                )}
            </div>

        </div>
    )
}

export default Gallery