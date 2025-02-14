// Components/TypeCard/TypeCard.jsx
import {
  Paper,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import ProgressiveImage from "../../Components/ProgressiveImage/ProgressiveImage";

function TypeCard(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isCedarPage = location.pathname === "/fence-details/cedar";

  const handleClick = (route) => {
    navigate(`/fence-details/${route}`);
    window.scrollTo(0, 0);
  };

  const handleCedarClick = () => {
    navigate("/fence-details/cedar");
    window.scrollTo(0, 0);
  };

  const cardStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <div style={{ marginBottom: isXsScreen || isSmScreen ? "5%" : null }}>
      <Paper
        elevation={isCedarPage || isXsScreen || isSmScreen ? 1 : 3}
        style={cardStyle}
        onClick={() => {
          props.fenceType.route === "cedar"
            ? handleCedarClick()
            : handleClick(props.fenceType.route);
        }}
      >
        <Card
          style={{
            // Changed this line so CedarDetails page cards always have a fixed height:
            height: isCedarPage ? "275px" : "auto",
            margin: "0px",
            paddingTop: "10px",
            borderBottom: isXsScreen || isSmScreen ? "10px solid #0283AB" : null,
          }}
          className="bg-slate-100 hover:bg-slate-200 cursor-pointer"
        >
          <CardActionArea>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                <h1>{props.fenceType.name}</h1>
                {isXsScreen || isSmScreen ? (
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: ".6em",
                      padding: "1% 5%",
                      color: "#2F4F4F",
                    }}
                  >
                    {props.fenceType.introDescription}
                  </p>
                ) : null}
              </Typography>
            </CardContent>
            <ProgressiveImage
              lowSrc={props.fenceType.lowQualityImage}         // Low-quality image URL
              mediumSrc={props.fenceType.mediumQualityImage}   // Medium-quality image URL
              highSrc={props.fenceType.mainImage}              // High-quality image URL
              alt={`${props.fenceType.name} fence`}
              height={140}
              width="100%"
            />
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "left",
                paddingBottom: "10px",
              }}
            >
              {isXsScreen || isSmScreen ? null : (
                <Typography variant="body2" color="text.primary">
                  {props.fenceType.introDescription}
                </Typography>
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </div>
  );
}

export default TypeCard;
