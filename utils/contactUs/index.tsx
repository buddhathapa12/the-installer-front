import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    backgroundImage: "url(/static/images/contact-us/linear-gradient.png)",
  },
  formWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  contactInfoWrapper: {
    height: "480px",
    width: "85%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#2E2E2E",
    margin: 60,

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      height: "840px",
      width: "100%",
    },
  },
  imageWrapper: {
    position: "relative",
    width: "55%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      height: "50%",
      width: "100%",
    },
  },
  contactInfo: {
    color: "white",
    padding: 50,
  },

  contactInfoHeader: {
    fontSize: "40px",
    fontWeight: 500,
    marginBottom: 20,
  },

  contactInfoAddress: {
    fontSize: "20px",
    fontWeight: 500,
    marginBottom: 20,
  },
  contactPhoneEmail: {
    fontSize: "18px",
    fontWeight: 400,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  iconMargin: {
    marginRight: 8,
  },
  socialHandleCont: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  socialHandleItemCont: {
    borderRadius: "10%",
    transform: "scale(1.4)",
    textAlign: "center",
    paddingTop: "5px",
    width: "33px",
    float: "right",
    marginRight: "10%",
    cursor: "pointer",
  },

  googleMapsWrapper: {
    width: "100%",
    height: 360,
  },
}));

export default useStyles;
