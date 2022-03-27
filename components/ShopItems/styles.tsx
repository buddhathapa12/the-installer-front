import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  productList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  itemWrapper: {
    flexBasis: 220,
    flexGrow: 1,
    [theme.breakpoints.down("md")]: {
      flexBasis: 320,
      display: "flex",
      flex: 1,
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "space-around",
    },
  },
  productWrapper: {
    width: "180px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
    color: "#c36",
    [theme.breakpoints.down("md")]: {
      maxWidth: "320px",
      display: "flex",
      flex: 1,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "280px",
      display: "flex",
      flex: 1,
    },
  },
  imageWrapper: {
    height: "210px",
    width: "210px",
    overflow: "hidden",
    position: "relative",
    marginBottom: 20,
    [theme.breakpoints.down("md")]: {
      height: "280px",
      width: "280px",
    },
  },
  positionRelative: {
    position: "relative",
  },

  contentWrapper: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    textAlign: "left",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },

  title: {
    fontSize: 16,
    fontWeight: 500,
    flexWrap: "wrap",
    padding: "0.5em 0",
  },
  price: {
    fontSize: 14,
    marginBottom: 20,
    color: "#77a464",
  },
}));

export default useStyles;
