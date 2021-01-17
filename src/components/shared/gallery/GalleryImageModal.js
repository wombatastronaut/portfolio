import React from 'react'


const GalleryImageModal = ({image, setSelectedImage, nextImage, previousImage}) => {
    if (!image) {
        return (null)
    }

    const close = (e) => {
        e.preventDefault()

        setSelectedImage(null)
    }

    return (
        <div className="modal fixed inset-0 w-full h-full flex flex-col justify-center items-center fade-in">
            <a className="modal-close absolute top-0 right-0 z-10 mt-8 mr-8 cursor-pointer" onClick={close}>
                <i className="lni lni-close text-white text-3xl"></i>
            </a>

            <div className="modal-backdrop fixed inset-0 w-full h-full" onClick={close}></div>

            <div className="modal-body z-10">
                <img src={image.original} alt={image.title} />
                <div className="p-3 z-20">
                    <a href={image.link} className="font-bold text-white">{image.title}</a>
                </div>
            </div>

            <a className="absolute left-0 z-10 ml-8 cursor-pointer" onClick={previousImage}>
                <i className="lni lni-chevron-left text-white text-3xl"></i>
            </a>
            
            <a className="absolute right-0 z-10 mr-9 cursor-pointer" onClick={nextImage}>
                <i className="lni lni-chevron-right text-white text-3xl"></i>
            </a>
        </div>
    )
}

export default GalleryImageModal