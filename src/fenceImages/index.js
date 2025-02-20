// This file is importing photos from src/fenceImages by file structure
// it is creating the necessary objects to import into your components
// alternating high/low res photos for accurate display


// function to import images from a given folder (and sort)
const importAll = (r) => 
    r.keys()
     .sort((a, b) => a.localeCompare(b, undefined, { numeric: true })) // Natural sorting
     .map(r)


// manually require each fence type folder
// webpack cannot do this dynamically :(
const imageContexts = {
    vinyl: require.context("./vinyl", false, /\.(jpg|jpeg|png|webp)$/),
    ornamental: require.context("./ornamental", false, /\.(jpg|jpeg|png|webp)$/),
    chainLink: require.context("./chainLink", false, /\.(jpg|jpeg|png|webp)$/),
    hogwire: require.context("./hogwire", false, /\.(jpg|jpeg|png|webp)$/),
    custom: require.context("./custom", false, /\.(jpg|jpeg|png|webp)$/),
    capAndTrim: require.context("./capAndTrim", false, /\.(jpg|jpeg|png|webp)$/),
    horizontal: require.context("./horizontal", false, /\.(jpg|jpeg|png|webp)$/),
    standard: require.context("./standard", false, /\.(jpg|jpeg|png|webp)$/),
    craftsman: require.context("./craftsman", false, /\.(jpg|jpeg|png|webp)$/),
};

// Objects to store images
export const mainFenceImages = {}
export const fenceGalleries = {}

// ? if you wanted you could export direct file types for your hero images here
// EX: export { default as mainHero } from './your/path/here'


// dynamically import images for each fence type
Object.entries(imageContexts).forEach(([type, context]) => {
    const images = importAll(context)
    if (images.length >= 2) {
        // Set main images
        mainFenceImages[type] = { highRes: images[0], lowRes: images[1] }

        // Format remaining images into gallery pairs
        fenceGalleries[type] = images.slice(2).reduce((gallery, img, index, arr) => {
            if (index % 2 === 0 && arr[index + 1]) {
                gallery.push({ highRes: img, lowRes: arr[index + 1] })
            }
            return gallery
        }, [])
    }
})
