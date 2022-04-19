import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  loginCont: {
    alignItems: "center",
    color: "#ffffff",
    // width: "100%",
    // height: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "200px",
  },
  titleCont: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: "25px",
  },
  signInWithGoogleCont: {
    marginTop: "20px",
    marginLeft: "5px",
    marginRight: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    border: "solid",
    borderRadius: "15px",
    minWidth: "250px",
    minHeight: "40px",
    cursor: "pointer",
  },
  signInText: {
    fontSize: "20px",
    fontWeight: "600",
    paddingRight: "10px",
    paddingTop: "2px",
  },
  googleIcon: {
    paddingTop: "5px",
  },
}));

export default useStyles;
