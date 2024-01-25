// Imports for FAQ accordion
import FaqAccordion from "../../Components/FaqAccordion/FaqAccordion";

// CSS import
import './FAQ.css';

function Faq() {
    // Define FAQ questions and answers
    const firstQuestion = "How high can I build a fence?";
    const firstAnswer = `The allowable height of a fence is largely influenced by its 
    location in the yard and the local regulations. Front yard fences often have a maximum height of 4 feet, 
    while side and rear yard fences may typically reach 6 or 7 feet in certain cities. 
    Corner lots might have additional restrictions due to safety concerns related to vehicles and pedestrians, 
    impacting fence opacity and height based on city regulations.
    `;

    const secondQuestion = "How much does a fence cost?";
    const secondAnswer = `The cost of a fence can vary based on factors such as material, 
    length, height, and any additional features, we encourage you to try our 
    free instant quote tool or reach out for an estimate.
    `;

    const thirdQuestion = "Why steel post?";
    const thirdAnswer = `We are believers in higher quality products. 
    Galvanized steel will outlast a wood post everyday of the week. 
    Driving capabilities are added benefits allowing us to have stronger, cleaner installation 
    with out the use of heavy machinery or lugging around hazardous concrete.
    `;

    const fourthQuestion = "What are differences between cedar vs. pressure treated?";
    const fourthAnswer = `Cedar offers several advantages over pressure-treated fences. 
    It is naturally resistant to decay and insects, reducing the need for chemical treatments. 
    Cedar is known for its distinct, attractive appearance and aromatic scent. It’s also lighter in weight, 
    making it easier to handle during installation. Additionally, cedar has a lower environmental 
    impact compared to pressure-treated wood, aligning with sustainable and eco-friendly practices.
    `;

    const fifthQuestion = "Do I need to be home for install?";
    const fifthAnswer = `While your presence during the installation is not mandatory, 
    we highly encourage it. We value clear communication and prefer conducting walkthroughs 
    before and after the project to ensure everyone is aligned with the expectations.
    `;

    const sixthQuestion = "Survey?";
    const sixthAnswer = `While not mandatory in every city, having a survey is highly recommended to minimize 
    future complications associated with the fence installation.
    `;

    const seventhQuestion = "What are differences between pounding vs concrete?";
    const seventhAnswer = `Concrete has its applications in fencing, but we find superior advantages 
    with driven posts. Our method involves driving thick steel posts deeper than typical concrete installations, 
    reaching below the frost line in Minnesota to prevent heaving. Unlike concrete, which can crack over time, our 
    driven posts can avoid messy, labor-intensive processes, often eliminating the need for heavy machinery and causing 
    minimal soil disruptions—critical factors in ensuring a solid fencing solution.
    `;

    return (
        <>
            <p>FAQ</p>
            <div className="faq-container">
                {/* Render FAQ accordions */}
                <FaqAccordion question={firstQuestion} answer={firstAnswer} />
                {/* Add link to instant quote form in second answer */}
                <FaqAccordion question={secondQuestion} answer={secondAnswer} />
                <FaqAccordion question={thirdQuestion} answer={thirdAnswer} />
                <FaqAccordion question={fourthQuestion} answer={fourthAnswer} />
                <FaqAccordion question={fifthQuestion} answer={fifthAnswer} />
                <FaqAccordion question={sixthQuestion} answer={sixthAnswer} />
                <FaqAccordion question={seventhQuestion} answer={seventhAnswer} />
            </div>
        </>
    )
}

export default Faq;