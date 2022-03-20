import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    maxWidth: 1250,
  },
  experienceList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginBottom: "50px",
  },
  experienceCont: {
    maxWidth: "600px",
    margin: "auto",
    textAlign: "center",
    padding: "10px",
    paddingBottom: "50px",
    flexGrow: 1,
    [theme.breakpoints.down("md")]: {
      height: "500px",
      width: "470px",
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      height: "450px",
      width: "607px",
      flexDirection: "column",
    },
  },
  experienceTitle: {
    color: "#000000",
    fontSize: "22px",
    fontFamily: "Poppins",
    fontWeight: 500,
    padding: "10px 0px 10px 0px",
  },
  experienceDetail: {
    marginTop: 0,
    marginBottom: "0.9rem",
    textAlign: "center",
  },
}));

export default useStyles;
