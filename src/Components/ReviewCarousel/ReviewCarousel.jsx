import ImageCarousel from "../../Components/ImageCarousel/ImageCarousel";

// Responsive imports
import { useTheme, useMediaQuery } from "@mui/material";

function ReviewCarousel() {

    const images = [
        `images/review-photos/becky-review.jpeg`,
        `images/review-photos/erica-review.jpeg`,
        `images/review-photos/nathan-review.jpeg`,
        `images/review-photos/kelly-review.jpeg`,
        `images/review-photos/karin-review.jpeg`,
    ];

    const mobileImages = [
        `images/review-photos/becky-review-mobile.jpeg`,
        `images/review-photos/erica-review-mobile.jpeg`,
        `images/review-photos/nathan-review-mobile.jpeg`,
        `images/review-photos/kelly-review-mobile.jpeg`,
        `images/review-photos/karin-review-mobile.jpeg`,
    ];

    const reviews = [
        {
            text: `
        "If there was an option to give six stars, I would give them to Nate and his crew. 
        Stunningly beautiful fence, I am so happy! Not only the outside, but the inside is 
        gorgeous! Nate is very professional and easy to work with, knowledgeable and gave 
        good advice. Explained everything well and produced wonderful results. 
        He certainly outshines the bigger name outfits that could not come near his price."
        `,
            author: 'Becky A.',
            source: 'Google Review',
        },
        {
            text: `
            "Highly recommend this business! Nate was extremely easy to work with and I had a great experience. 
            My many questions were answered promptly. I appreciated that Nate confirmed each of my requests when he evaluated the yard. 
            I felt very confident that my specifications would be matched."
            `,
            author: 'Erica B.',
            source: 'Google Review',
        },
        {
            text: `
            "Nate and his crew did a tremendous job with our horizontal cedar fence. 
            He’s a true professional and exceeded our expectations. His pricing is fair and the quality of the work done is 10/10.
            We’ve had several neighbors stop by to compliment the new fence and we can’t recommend Nate enough. Great job guys!"
        `,
            author: 'Nathan W.',
            source: 'Google Review',
        },
        {
            text: `
            "Nate was very professional. Keeps you informed, does great work and is truly interested in your satisfaction. 
            We Love our new fence! Highly recommend."
            `,
            author: 'Kelly H.',
            source: 'Google Review',
        },
        {
            text: `
            "We couldn't be happier with Nate's Fence and Gate! His communication, pricing, and quality can't be beat. 
            He was so flexible with some last minute changes and we're so glad we chose him to do our fence!"
            `,
            author: 'Karin B.',
            source: 'Google Review',
        },
    ];

    // Check the screen size for responsive design
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isLgScreen = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <div>
            <ImageCarousel images={isXsScreen || isSmScreen ? mobileImages : images} reviews={reviews} origin={'LandingPage'} />
        </div>
    )
}

export default ReviewCarousel;