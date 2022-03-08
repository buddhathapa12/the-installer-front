import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
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
