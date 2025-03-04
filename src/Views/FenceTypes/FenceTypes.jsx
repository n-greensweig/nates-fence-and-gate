import { Grid, useMediaQuery, useTheme } from "@mui/material";
import TypeCard from "../../Components/TypeCard/TypeCard";
import { Helmet } from "react-helmet";

// import your fence data and photos
import { mainFenceImages } from '../../fenceImages';
import fenceData from "../../Constants/fenceData";

function FenceTypes() {
  const theme = useTheme();
  
  // Custom media queries for different devices.
  const isIphoneSE = useMediaQuery('(max-width:375px)');
  const isIphone14ProMax = useMediaQuery('(min-width:376px) and (max-width:425px)');
  const isIpad = useMediaQuery('(min-width:426px) and (max-width:768px)');
  const isLaptop = useMediaQuery('(min-width:769px)');

  // Determine the about section's height based on device.
  let aboutHeight = "40vh"; // default for laptop
  if (isIphoneSE) {
    aboutHeight = "50vh";
  } else if (isIphone14ProMax) {
    aboutHeight = "35vh";
  } else if (isIpad) {
    aboutHeight = "30vh";
  } else if (isLaptop) {
    aboutHeight = "40vh";
  }

  // Adjust top padding and add matching bottom padding for the about section.
  let aboutPaddingTop;
  let aboutPaddingBottom;
  if (isIphoneSE) {
    aboutPaddingTop = "20%";
    aboutPaddingBottom = "20%";
  } else if (isIphone14ProMax) {
    aboutPaddingTop = "10%";
    aboutPaddingBottom = "10%";
  } else if (isIpad) {
    aboutPaddingTop = "5%";
    aboutPaddingBottom = "5%";
  } else if (isLaptop) {
    aboutPaddingTop = "5%";
    aboutPaddingBottom = "5%";
  }

  // Adjust margin top and add matching bottom margin for the cards container.
  let contentMarginTop;
  let contentMarginBottom;
  if (isIphoneSE) {
    contentMarginTop = "10%";
    contentMarginBottom = "10%";
  } else if (isIphone14ProMax) {
    contentMarginTop = "5%";
    contentMarginBottom = "5%";
  } else if (isIpad) {
    contentMarginTop = "5%";
    contentMarginBottom = "5%";
  } else if (isLaptop) {
    contentMarginTop = "2%";
    contentMarginBottom = "2%";
  } else {
    contentMarginTop = "2%";
    contentMarginBottom = "2%";
  }

  const fenceKeys = Object.keys(fenceData);

  // Use the current pathname to build the canonical URL.
  const canonicalUrl =
    process.env.NODE_ENV === "production"
      ? `https://www.natesfenceandgate.com/fence-types`
      : window.location.href;

  return (
    <div
      className="bg-slate-100"
      style={{ paddingBottom: "5%", minHeight: "100vh" }}
    >
      <Helmet>
        <title>Fence Types | Nate's Fence and Gate</title>
        <meta
          name="description"
          content="Explore our wide range of fence types tailored to your individual needs and preferences at Nate's Fence and Gate."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div
        className="3xl:bg-3xl-hero-fence-types xl:bg-xl-hero-fence-types sm:md:bg-xl-hero-fence-types xs:bg-xl-hero-fence-types xs:bg-white flex flex-col justify-center"
        style={{
          height: aboutHeight,
          paddingTop: aboutPaddingTop,
          paddingBottom: aboutPaddingBottom,
        }}
      >
        <h1 className="xs:text-5xl md:text-7xl xs:pt-10 md:pt-0 text-white mb-5">
          Fence Types
        </h1>
        <p className="xs:w-2/3 xs:mx-auto xs:text-xl xs:pb-10 text-white md:text-3xl font-thin">
          Choosing the perfect fence is as unique as your needs and interests.
          Explore our wide range of fence types, each tailored to match your
          individual requirements and preferences.
        </p>
      </div>
      <div
        className="content"
        style={{
          marginTop: contentMarginTop,
          marginBottom: contentMarginBottom,
        }}
      >
        <Grid
          container
          spacing={2}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            maxWidth: "100%",
            padding: 0,
            margin: 0,
          }}
        >
          {fenceKeys.map((fenceType, index) => {
            const fenceList = fenceData[fenceType];
            const images = mainFenceImages[fenceType];
            const combinedProps = { ...fenceList, images };
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
                style={{
                  margin: 0,
                  padding: "2% 2%",
                }}
              >
                <TypeCard fenceData={combinedProps} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default FenceTypes;
