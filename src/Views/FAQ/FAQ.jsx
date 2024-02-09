// Imports for FAQ accordion
import { useEffect } from "react";
import FaqAccordion from "../../Components/FaqAccordion/FaqAccordion";
import { faq } from "../../Constants/Constants";

// CSS import
import './FAQ.css';

function Faq() {

    useEffect(() => {
        document.title = 'FAQ';
    }, []);

    return (
        <>
            <h1 style={{ fontSize: '2.5rem' }}>FAQ</h1>
            <div className="faq-container">
                {/* Render FAQ accordions using data from Constants.jsx */}
                {/* Add link to instant quote form in second answer */}
                {faq.map((item, index) => {
                    return (
                        <FaqAccordion key={index} question={item.question} answer={item.answer} />
                    )
                })}
            </div>
        </>
    )
}


export default Faq;