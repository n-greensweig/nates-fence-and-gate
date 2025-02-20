import React, { useState, useEffect, useRef } from 'react'
import './adaptiveImage.css'

import { fenceGalleries, mainFenceImages } from '../../fenceImages'

const AdaptiveImage = ({ picture }) => {

    const fenceType = 'vinyl'
    // send the variable with props.
    // console.log('fenceGAlleryies', fenceGalleries)


    // const mainPhoto = fenceTypeImg['vinyl'].main
    // console.log('mainPhoto', mainPhoto)

    // const highResImg = mainPhoto.highRes
    // const lowResImg = mainPhoto.lowRes

    // console.log('high, low', highResImg, lowResImg)


    // const [imgSrc, setImgSrc] = useState(lowResImg || highResImg)
    const imgRef = useRef(null)

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if (entry.isIntersecting) {
    //                 const img = new Image()
    //                 img.src = highResImg
    //                 img.onload = () => {
    //                     setImgSrc(highResImg)
    //                 }
    //                 observer.disconnect()
    //             }
    //         },
    //         { threshold: 0.7 }
    //     )

    //     if (imgRef.current) observer.observe(imgRef.current)

    //     return () => observer.disconnect()
    // }, [highResImg])

    return (
        <div className="adaptive-img-wrapper" ref={imgRef}>
            {/* <img src={lowResImg} className={`adaptive-img low-res ${imgSrc === highResImg ? 'fade-out' : ''}`} alt="" />
            <img src={imgSrc} className={`adaptive-img high-res ${imgSrc === highResImg ? 'fade-in' : ''}`} alt="" /> */}
        </div>
    )
}

export default AdaptiveImage
