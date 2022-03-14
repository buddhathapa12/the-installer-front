import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    maxWidth: 1250,
  },
  productList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  productWrapper: {
    flexBasis: 340,
    height: "550px",
    width: "340px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: 30,
    flexGrow: 1,
    [theme.breakpoints.down("md")]: {
      height: "650px",
      width: "470px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "450px",
      width: "607px",
    },
  },
  imageWrapper: {
    height: "50vh",
    borderRadius: 20,
    overflow: "hidden",
    cursor: "pointer",
    transitionDuration: "0.5s",
    position: "relative",
    marginBottom: 20,
    [theme.breakpoints.down("md")]: {
      height: "50vh",
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: "30vh",
    },
  },
  positionRelative: {
    position: "relative",
  },
  image: {
    objectFit: "cover",
    aspectRatio: "1984/2005",
  },

  bookNowButton: {
    width: 152,
    height: 44,
    borderRadius: 5,
    color: "white",
    textTransform: "none",
    transitionDuration: "10s",
    backgroundColor: "#ED1C23",
  },

  calendarIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
}));

export default useStyles;
