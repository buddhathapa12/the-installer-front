import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    maxWidth: "1300px",
  },
  projectListCont: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  projectItemCont: {
    flexBasis: 340,
    height: "776px",
    width: "366.67px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: 30,
    border: "solid",
    borderColor: "#ffffff",
    borderWidth: "1px",
  },

  imageWrapper: {
    borderRadius: "10%",
    overflow: "hidden",
    cursor: "pointer",
    transitionDuration: "0.5s",
    position: "relative",
    marginBottom: 20,
    marginLeft: "1px",
    "&:hover": {
      transform: "scale(1.1)",
    },
    // [theme.breakpoints.down("md")]: {
    //   height: "50vh",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   maxHeight: "30vh",
    // },
  },

  imageCont: {
    objectFit: "cover",
    aspectRatio: "1920/2560",
  },

  titleCOnt: {
    fontSize: "32px",
    fontWeight: 500,
    color: "#ffffff",
    fontFamily: "Poppins",
    textAlign: "center",
    padding: "10px",
  },

  descriptionCont: {
    padding: "0px 10px 10px 10px",
    textAlign: "center",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: "poppins",
  },
}));

export default useStyles;
