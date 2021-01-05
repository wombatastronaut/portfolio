import React from 'react'


const ImageModal = ({image, onClose}) => {
    if (!image) {
        return (null)
    }

    const close = (e) => {
        e.preventDefault()

        onClose(null)
    }

    return (
        <div className="modal fixed inset-0 w-full h-full flex flex-col justify-center items-center">
            <a className="modal-close absolute top-0 right-0 z-10 mt-8 mr-8" onClick={close}>
                <i className="lni lni-close text-white text-3xl"></i>
            </a>

            <div className="modal-backdrop fixed inset-0 w-full h-full" onClick={close}></div>
            <div className="modal-body z-10">
                <img src={image.original} alt={image.title} />
                <a href={image.link} className="inline-block text-white mt-5">{image.title}</a>
            </div>

            <a className="z-10">
                <i className="lni lni-chevron-left text-white text-3xl"></i>
            </a>
            <a className="z-10">
                <i className="lni lni-chevron-right text-white text-3xl"></i>
            </a>
        </div>
    )
}

export default ImageModal