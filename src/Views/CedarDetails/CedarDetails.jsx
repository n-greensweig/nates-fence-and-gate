// CedarDetails.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { fenceTypes } from "../../Constants/Constants";
import TypeCard from "../../Components/TypeCard/TypeCard";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

function CedarDetails() {
  const cedarTypes = fenceTypes[0].cedarTypes;

  // Check the screen size for responsive design
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Use the current pathname to build the canonical URL
  const canonicalUrl =
    process.env.NODE_ENV === "production"
      ? `https://www.natesfenceandgate.com/fence-details/cedar`
      : window.location.href;

  return (
    <>
      {/* Add canonical link for SEO */}
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div
        className="bg-slate-100 pb-16 pt-1"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "3% auto 0 auto",
        }}
      >
        <Grid
          container
          spacing={2}
          style={{ maxWidth: "1300px", width: isXsScreen || isSmScreen ? "85%" : null }}
        >
          {cedarTypes.map((cedarType, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <TypeCard fenceType={cedarType} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default CedarDetails;
