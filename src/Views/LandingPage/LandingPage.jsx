import ButtonComponent from "../../Components/Button/Button";
import ReviewCarousel from "../../Components/ReviewCarousel/ReviewCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { useEffect } from "react";

function LandingPage() {
  useEffect(() => {
    document.title = "Nate's Fence and Gate";
  }, []);

  return (
    <div className="w-full h-full">
      <div className="bg-hero-landing h-screen relative">
        <h1 className="text-white text-7xl absolute start-1/4 bottom-1/2 mb-14">
          Nate's Fence and Gate
        </h1>
        <p className="text-white text-3xl font-thin absolute start-1/4 bottom-1/2">
          Top rated fence & deck contractor in Minnesota
        </p>
        <div className="absolute start-1/4 bottom-1/2 translate-y-16">
          <ButtonComponent type="Types" />
        </div>
        <div className="absolute start-1/4 bottom-1/2 translate-x-36 translate-y-16 ">
          <ButtonComponent type="Quote" />
        </div>
        <div className="absolute bottom-0 start-1/2 -translate-x-1/2 mb-32">
          <p className="text-white text-2xl font-normal">Learn More</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-white animate-bounce-fast"
          />
        </div>
      </div>

      <div className="flex flex-row bg-slate-100 h-50vh py-14">
        <div className="w-1/2 flex justify-center ">
          <div className="w-1/2">
            <h2 className="text-3xl text-left border-l-4 border-nates-light-blue pl-24">
              We believe in providing the best possible service to our
              customers. Taking great pride in our work, we are committed to
              providing our customers with the highest quality products and
              services.
            </h2>
          </div>
        </div>
        <div className="w-1/2">
          <ReviewCarousel />
        </div>
      </div>

      <div className="bottom-container getting-started mt-14">
        <h2 className="text-4xl">Choose from our many different fence types</h2>
        <div
          className="button-divs"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            gap: "20px",
          }}
        >
          <div className="fence-types-group">
            <p>View our fencing types</p>
            {/* Change button text to just 'Fence Types' */}
            <ButtonComponent type="Types" />
          </div>
          <div className="quote-groups">
            <p>Get an instant quote</p>
            <ButtonComponent type="Quote" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
