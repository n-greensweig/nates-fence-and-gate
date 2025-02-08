// Views/LandingPage/LandingPage.jsx
import ButtonComponent from "../../Components/Button/Button";
import ReviewCarousel from "../../Components/ReviewCarousel/ReviewCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function LandingPage() {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));

    // Use the current pathname to build the canonical URL
    const canonicalUrl =
    process.env.NODE_ENV === "production"
      ? `https://www.natesfenceandgate.com`
      : window.location.href;

  return (
    <div className="w-full h-full">
      <Helmet>
        <title>Nate's Fence and Gate</title>
        <meta
          name="description"
          content="Nate's Fence and Gate is a top-rated fence contractor in Minnesota offering quality fence types, instant quotes, and exceptional service."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div
        className="3xl:bg-3xl-hero-landing 2xl:bg-xl-hero-landing xl:bg-xl-hero-landing lg:bg-xl-hero-landing md:bg-xl-hero-landing sm:bg-xl-hero-landing xs:bg-xl-hero-landing bg-cover bg-no-repeat bg-center h-screen relative"
        style={{
          paddingLeft: isXsScreen || isSmScreen ? null : "25%",
          margin: isXsScreen || isSmScreen ? "0 auto" : null,
        }}
      >
        <h1
          className="text-white xs:text-2xl sm:text-7xl start-1/4 bottom-1/2"
          style={{
            paddingTop: isXsScreen || isSmScreen ? "20%" : "25%",
            paddingBottom: isXsScreen || isSmScreen ? "3%" : "1%",
            marginBottom: "1%",
            fontSize: isXsScreen || isSmScreen ? "2.2rem" : null,
            textAlign: isXsScreen || isSmScreen ? "center" : "left",
            margin: isXsScreen || isSmScreen ? "0 auto" : null,
          }}
        >
          Nate's Fence and Gate
        </h1>
        <p
          className="text-white text-3xl font-thin start-1/4 bottom-1/2"
          style={{
            marginBottom: "0px",
            paddingBottom: isXsScreen || isSmScreen ? "20%" : "1%",
            fontSize: isXsScreen || isSmScreen ? "1.3rem" : null,
            textAlign: isXsScreen || isSmScreen ? "center" : "left",
            margin: isXsScreen || isSmScreen ? "0 auto" : null,
            marginTop: "0px",
          }}
        >
          Top-rated fence contractor in Minnesota
        </p>
        <div
          style={{
            display: "flex",
            height: "fit-content",
            width: "fit-content",
            paddingTop: isXsScreen || isSmScreen ? "10%" : "1%",
            margin: isXsScreen || isSmScreen ? "0 auto" : null,
          }}
        >
          <div className="mr-3">
            <ButtonComponent type="Types" />
          </div>
          <div>
            <ButtonComponent type="Quote" />
          </div>
          <div
            className="absolute bottom-0 start-1/2 -translate-x-1/2 mb-32"
            style={{
              marginTop: isXsScreen || isSmScreen ? "60%" : "1%",
            }}
          >
            <p className="text-white text-2xl font-normal">Learn More</p>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-white animate-bounce-fast"
            />
          </div>
        </div>
      </div>

      <div
        className="flex bg-slate-100 h-50vh py-14 w-screen"
        style={{
          flexDirection:
            isXsScreen || isSmScreen || isMdScreen || isLgScreen ? "column" : "row",
        }}
      >
        <div
          className="flex xs:w-2/3 xs:m-auto xs:pb-10 sm:w-1/2 sm:justify-center sm:items-center"
          style={{
            width:
              isXsScreen || isSmScreen || isMdScreen || isLgScreen ? "90%" : null,
            justifyContent:
              isXsScreen || isSmScreen || isMdScreen || isLgScreen ? "left" : null,
          }}
        >
          <div
            style={{
              width:
                isXsScreen || isSmScreen || isMdScreen || isLgScreen ? "90%" : "50%",
              marginBottom:
                isXsScreen || isSmScreen || isMdScreen || isLgScreen ? "5%" : null,
            }}
          >
            <h2
              className="xs:text-xl sm:text-3xl sm:text-left xs:text-left sm:border-l-4 border-nates-light-blue xs:border-l-4 border-nates-light-blue xs:pl-2 sm:pl-24"
            >
              We believe in providing the best possible service to our customers.
              Taking great pride in our work, we are committed to providing our
              customers with the highest quality products and services.
            </h2>
          </div>
        </div>
        <div
          className="m-auto sm:w-1/2"
          style={{
            width:
              isXsScreen || isSmScreen || isMdScreen || isLgScreen ? "90%" : null,
          }}
        >
          <ReviewCarousel />
        </div>
      </div>

      <div className="bottom-container getting-started mt-14">
        <h2 className="xs:text-3xl sm:text-4xl pb-6">Get Started!</h2>
        <div
          className="button-divs"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            gap: "40px",
          }}
        >
          <div className="fence-types-group">
            <ButtonComponent type="Types" />
          </div>
          <div className="quote-groups">
            <ButtonComponent type="Quote" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
