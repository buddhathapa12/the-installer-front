import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  loginCont: {
    alignSelf: "center",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "gray",
    boxShadow: "none",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    height: 150,
    border: "2px solid #ffffff",
    borderRadius: 15,
    padding: 4,
  },
  titleCont: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: "25px",
    marginTop: 10,
  },
  signInWithGoogleCont: {
    marginTop: "20px",
    marginLeft: "5px",
    marginRight: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // border: "solid",
    // borderRadius: "15px",
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
