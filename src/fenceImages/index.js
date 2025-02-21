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



// your image label must match the appropriate alt to associate correctly
// adding or subtracting photos will require adjusting this
const altTextMap = {
    vinyl: {
        "vinyl-high-1": "White vinyl fence behind a gray garden shed, enclosing a green lawn amid mature foliage.",
    },
    craftsman: {
        "1-craftsman-high": "A double-door craftsman cedar fence gate with an extended arbor, set against a backdrop of mature trees.",
        "2-craftsman-high": "A high craftsman cedar fence running alongside a driveway, adjacent to a gray garage and neighboring homes.",
        "3-craftsman-high": "A tall craftsman cedar fence lining a sidewalk, shaded by large trees in a suburban neighborhood.",
        "4-craftsman-high": "A partial lattice-top craftsman cedar fence gate enclosing a driveway, next to a stucco house with a Tudor-style roof.",
        "5-craftsman-high": "A craftsman cedar fence built on a short retaining wall encloses a stucco home’s corner yard, with a treehouse perched in the large oak tree overhead.",
        // "6-craftsman-high": "A freshly installed craftsman cedar fence runs along the side of a property, with tall trees nearby.",
        // "7-craftsman-high": "A backyard view featuring a craftsman cedar fence with decorative top rails and a central wooden gate.",
        // "8-craftsman-high": "A spacious yard with raised metal garden beds, tree stumps, and a new craftsman cedar fence in the background.",
        // "9-craftsman-high": "A suburban yard with a tall, natural-toned craftsman cedar fence providing privacy under leafy trees.",
        // "10-craftsman-high": "A wide wooden gate with a curved top, framed by an arbor, forming part of the craftsman cedar fence.",
        // "11-craftsman-high": "A long craftsman cedar fence with vertical planks, leading to a matching arched gate next to a blue house.",
        // "12-craftsman-high": "A curved, double-door wooden gate set in a tall craftsman cedar fence, topped by a pergola-like arbor.",
        // "13-craftsman-high": "A craftsman cedar fence with an arched gate positioned on a slight slope, connecting the yard to the driveway.",
        // "14-craftsman-high": "A narrow walkway between a brick house and a tall craftsman cedar fence, ending at a wooden gate with an arbor.",
        // "15-craftsman-high": "A corner property enclosed by a craftsman cedar fence with a smooth top rail, seen from an alley perspective.",
        // "16-craftsman-high": "A craftsman-style cedar fence gate with a small arbor on top, surrounded by leafy trees near a red house.",
        // "17-craftsman-high": "A manicured backyard bordered by a craftsman cedar fence, showcasing a variety of flowering plants.",
        // "18-craftsman-high": "A tall craftsman cedar fence with horizontal accents, enclosing the yard of a light-colored home.",
        // "19-craftsman-high": "A long stretch of craftsman cedar fencing along a residential street, providing privacy for the front yard.",
        // "20-craftsman-high": "A neatly landscaped front yard with a craftsman cedar fence gate and an evergreen tree near the sidewalk.",
        // "21-craftsman-high": "A wide, arched craftsman cedar fence gate topped by a pergola-like arbor, positioned beside a dark blue house.",
    },
    ornamental: {
        "ornamental-high-1": "Enclosed backyard featuring a black ornamental fence and gate, set against farmland and clear skies.",
    },
    custom: {
        "custom-high-1": "A modern custom cedar fence with black metal posts and a decorative top rail, running along a sidewalk.",
    },
    standard: {
        "standard-high-1": "Standard cedar fence enclosing a pool area, blending seamlessly with a retaining wall and patio.",
    },
    chainLink: {
        "chainLink-high-1": "Black chain link fence around a backyard recreation area near a dark gray house, featuring a basketball pad and a children’s playset."
    },
    capAndTrim: {
        "capNtrim-high-1": "A tall, newly installed wooden fence lines a residential sidewalk on a sunny day, with a blue garage and green trees in the background."
    },
    horizontal: {
        "horizontal-high-1": "An enclosed corner of a backyard with horizontal cedar fencing, shaded by mature trees"
    },
    hogwire: {
        "hogwire-high-1": "A simple cedar hogwire fence enclosing a spacious yard, with a white house visible in the distance."
    },
}

const getAltText = (type, src) => {
    if (!src) return "Fence image"
    // Extract only the filename without Webpack hash
    const match = src.match(/\/([^/]+)\.[a-z]+$/i)
    const fileName = match ? match[1].split('.')[0] : null
    return altTextMap?.[type]?.[fileName] || "Fence image"
};



// ** This is the bundler of images from file to Adaptive Image
// dynamically import images for each fence type
Object.entries(imageContexts).forEach(([type, context]) => {
    const images = importAll(context)
    if (images.length >= 2) {

        // set alt text
        const altTxtMain = getAltText(type, images[0]);

        // Set main images
        mainFenceImages[type] = { highRes: images[0], lowRes: images[1], altTxt: altTxtMain }

        // Format remaining images into gallery pairs
        fenceGalleries[type] = images.slice(2).reduce((gallery, img, index, arr) => {
            if (index % 2 === 0 && arr[index + 1]) {
                const altTxt = getAltText(type, img)
                gallery.push({ highRes: img, lowRes: arr[index + 1], altTxt: altTxt })
            }
            console.log('gallery', gallery)
            return gallery
        }, [])
    }
})