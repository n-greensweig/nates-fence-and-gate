import ImageCarousel from "../../Components/ImageCarousel/ImageCarousel";

function ReviewCarousel() {

    const images = [
        `images/cedar/craftsman/craftsman-1.jpeg`,
        `images/cedar/craftsman/craftsman-2.jpeg`,
        `images/cedar/craftsman/craftsman-3.jpeg`,
        `images/cedar/craftsman/craftsman-4.jpeg`,
    ];

    const reviews = [
        {
            text: `
        If there was an option to give six stars, I would give them to Nate and his crew. 
        Stunningly beautiful fence, I am so happy! Not only the outside, but the inside is 
        gorgeous! Nate is very professional and easy to work with, knowledgeable and gave 
        good advice. Explained everything well and produced wonderful results. 
        He certainly outshines the bigger name outfits that could not come near his price.
        `, author: "Becky A.",
            source: 'Google Review',
        },
        {
            text: `
            Highly recommend this business! Nate was extremely easy to work with and I had a great experience. 
            My many questions were answered promptly. I appreciated that Nate confirmed each of my requests when he evaluated the yard. 
            I felt very confident that my specifications would be matched.
            `,
            author: "Erica B.",
            source: 'Google Review',
        },
        { text: "Review text 3", author: "Author Name 3", source: 'Google Review' },
        { text: "Review text 4", author: "Author Name 4", source: 'Google Review' },
    ];

    return (
        <div>
            <ImageCarousel images={images} reviews={reviews} source={'LandingPage'} />
        </div>
    )
}

export default ReviewCarousel;