// Views/FenceTypes/FenceTypes.jsx
import { Grid } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import TypeCard from "../../Components/TypeCard/TypeCard";
import { fenceTypes } from "../../Constants/Constants";
import { Helmet } from "react-helmet";

function FenceTypes() {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Use the current pathname to build the canonical URL
  const canonicalUrl =
  process.env.NODE_ENV === "production"
    ? `https://www.natesfenceandgate.com/fence-types`
    : window.location.href;

  return (
    <div
      className="md:h-screen md:w-screen xl:h-screen xl:w-screen bg-slate-100"
      style={{ paddingBottom: "5%", minHeight: "100vh", overflowY: "scroll" }}
    >
      <Helmet>
        <title>Fence Types | Nate's Fence and Gate</title>
        <meta
          name="description"
          content="Explore our wide range of fence types tailored to your individual needs and preferences at Nate's Fence and Gate."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div className="3xl:bg-3xl-hero-fence-types xl:bg-xl-hero-fence-types sm:md:bg-xl-hero-fence-types xs:bg-xl-hero-fence-types xs:bg-white h-1/2 flex flex-col justify-center">
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
          marginTop: isXsScreen || isSmScreen ? "5%" : "2%",
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
          {fenceTypes.map((fenceType, index) => (
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
              <TypeCard fenceType={fenceType} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default FenceTypes;
