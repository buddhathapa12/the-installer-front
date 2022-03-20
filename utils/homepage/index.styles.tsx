import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  aboutUsCont: {
    padding: "30px 0px 50px 0px",
    alignItems: "center",
    maxWidth: "1140px",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
  },
  feedbackContainer: {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "298px",
  },
  feedbackHeading: {
    color: "white",
    fontSize: "40px",
    fontWeight: 600,
    height: 70,
    marginBottom: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  googleMapsWrapper: {
    width: "100%",
    height: 360,
  },

  contactUsContainer: {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "298px",
  },
  contactUsHeading: {
    color: "white",
    fontSize: "40px",
    fontWeight: 600,
    height: 70,
    marginBottom: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "center",
  },

  contactUsText: {
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: 400,
    fontFamily: "Poppins",
    textAlign: "center",
  },

  contactUsEmailSection: {
    paddingTop: "20px",
    alignItems: "center",
    color: "#ffffff",
    transform: "scale(1.6)",
    display: "flex",
    flexDirection: "row",
  },

  emailContainer: {
    color: "#ffffff",
    fontWeight: 600,
    fontFamily: "Poppins",
  },
}));

export default useStyles;
