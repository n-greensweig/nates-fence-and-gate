import React, { useState, useEffect, useRef } from 'react'
import './adaptiveImage.css'


const AdaptiveImage = ({ images }) => {

    const { highRes, lowRes } = images
    const [imgSrc, setImgSrc] = useState(lowRes || highRes)
    const imgRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const img = new Image()
                    img.src = highRes
                    img.onload = () => {
                        setImgSrc(highRes)
                    }
                    observer.disconnect()
                }
            },
            { threshold: 0.7 }
        )

        if (imgRef.current) observer.observe(imgRef.current)

        return () => observer.disconnect()
    }, [highRes])

    return (
        <div className="adaptive-img-wrapper" ref={imgRef}>
            <img src={lowRes} className={`adaptive-img low-res ${imgSrc === highRes ? 'fade-out' : ''}`} alt="" />
            <img src={imgSrc} className={`adaptive-img high-res ${imgSrc === highRes ? 'fade-in' : ''}`} alt="" />
        </div>
    )
}

export default AdaptiveImage
